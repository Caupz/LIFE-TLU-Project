<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbName = "dbName";

// DB connection with credentials

$db = new mysqli($servername, $username, $password, $dbName);

if ($db->connect_error) {
    $db->close();
    die("Connection failed: " . $db->connect_error);
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sql = "INSERT INTO highscore (name, similarity) VALUES (?, ?)";

    if (!($statement = $db->prepare($sql))) {
        echo "Prepare failed: (" . $db->errno . ") " . $db->error;
        $db->close();
        die;
    }

    $statement->bind_param("sd", $_POST["name"], $_POST["similarity"]);

    if (!$statement->execute()) {
        echo "Execute failed: (" . $statement->errno . ") " . $statement->error;
    }

} else {
    $sql = "SELECT id, `name`, similarity, created_at FROM highscore ORDER BY similarity DESC";
    $result = $db->query($sql);
    $data = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = ["name" => $row["name"], "similarity" => $row["similarity"], "created_at" => $row["created_at"]];
        }
    } else {
        echo "NONE";
    }

    echo json_encode($data);
}

$db->close();
?>