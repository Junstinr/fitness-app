<?php
include_once('db_connection.php');

$encodedData = file_get_contents('php://input');

$decodedData = json_decode($encodedData, true)

// Check if json_decode was successful
if ($decodedData === null) {
    echo json_encode(array('status' => 'error', 'message' => 'Invalid JSON data.', 'error' => json_last_error_msg()));
    exit;
}

$token = mysqli_real_escape_string($connection, isset($decodedData['token']) ? $decodedData['token'] : null) ;

?>