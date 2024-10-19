<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include $_SERVER['DOCUMENT_ROOT'] . '/05_KioskProject/inc/db.inc';

$db_conn = mysqli_connect($db_server, $db_id, $db_pw, $db_db);

if (!$db_conn) {
     die("Connection failed: " . mysqli_connect_error());
}

if (!isset($_GET['category'])) {
     die("Category parameter is missing");
}

$category = mysqli_real_escape_string($db_conn, $_GET['category']);
$sql_query = "SELECT * FROM `menuitems` WHERE `category` = '$category'";
$sql_result = mysqli_query($db_conn, $sql_query);

if (!$sql_result) {
     die("Query failed: " . mysqli_error($db_conn));
}

$categoryJson = array();
while ($row = mysqli_fetch_assoc($sql_result)) {
     $hashMap = array(
          'id' => $row['id'],
          'category' => $row['category'],
          'product_name' => $row['product_name'],
          'price' => $row['price'],
          'img_src' => $row['img_src']
     );

     array_push($categoryJson, $hashMap);
}
mysqli_free_result($sql_result);
mysqli_close($db_conn);

header('Content-Type: application/json');
echo json_encode($categoryJson);
