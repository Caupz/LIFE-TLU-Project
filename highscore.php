<?php
$servername = "localhost";
$username = "user";
$password = "pass";
$dbName = "dbname";

// DB connection with credentials

$db = new mysqli($servername, $username, $password, $dbName);

if ($db->connect_error) {
    $db->close();
    die("Connection failed: " . $db->connect_error);
}

if(isset($_POST)) {
    $sql = "INSERT INTO highscore (`name`, `similarity`) VALUES (:playerName, :similarity)";

    if (!($statement = $db->prepare($sql))) {
        echo "Prepare failed: (" . $db->errno . ") " . $db->error;
        $db->close();
        die;
    }

    $statement->bindParam("playerName", $_POST["name"]);
    $statement->bindParam("similarity", $_POST["similarity"]);

    if (!$statement->execute()) {
        echo "Execute failed: (" . $statement->errno . ") " . $statement->error;
    }

} else {
    $sql = "SELECT id, `name`, similarity, created_at FROM highscore";
    $result = $db->query($sql);
    $data = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = ["name" => $row["name"], "similarity" => $row["similarity"], "created_at" => $row["created_at"]];
        }
    } else {
        echo "0 results";
    }

    echo json_encode($data);
}

$db->close();
?>