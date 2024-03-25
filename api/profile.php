<?php
include_once('db_connection.php');

session_start(); // Add semicolon here

if (!isset($_SESSION['user_id'])) {
    echo json_encode(array('error' => 'User not logged in'));
    exit;
}

// Get user data from the database
$user_id = mysqli_real_escape_string($connection, $_SESSION['user_id']);
$query = "SELECT username FROM login WHERE user_id = '$user_id'"; // Use prepared statement
$result = mysqli_query($connection, $query);

if ($result && mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $username = $row['username'];

    echo json_encode(array('username' => $username));
} else {
    echo json_encode(array('error' => 'User data not found'));
}

mysqli_close($connection);
?>
