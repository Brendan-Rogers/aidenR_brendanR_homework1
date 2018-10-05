<?php

$user = "root";
$pass = "root";
$host = "localhost";
// name of DATABASE
$db = "test";
// name of TABLE
$tbl = "tbl_gold";

$conn = mysqli_connect($host, $user, $pass, $db);

if (!conn) {
	echo "something broke!";
	exit;
}

// write a db query

// echo "Connected!";

$myQuery = "SELECT * FROM $tbl";
$result = mysqli_query($conn, $myQuery);
$rows = array();

while ($row = mysqli_fetch_assoc($result)) {
	$rows[] = $row;
};

echo json_encode($rows);

?>