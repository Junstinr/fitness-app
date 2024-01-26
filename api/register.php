<?php

// Include database connection file
include_once('db_connection.php');

// Retrieve raw POST data
$encodedData = file_get_contents('php://input');

// Print received data for debugging
error_log("Received data: " . $encodedData);

// Decode JSON data
$decodedData = json_decode($encodedData, true);

// Check if json_decode was successful
if ($decodedData === null) {
    echo json_encode(array('status' => 'error', 'message' => 'Invalid JSON data.', 'error' => json_last_error_msg()));
    exit;
}

// Get user data from React Native app
$username = mysqli_real_escape_string($connection, isset($decodedData['username']) ? $decodedData['username'] : null);
$password = mysqli_real_escape_string($connection, isset($decodedData['password']) ? $decodedData['password'] : null);

// Check if username and password are present
if ($username === null || $password === null) {
    echo json_encode(array('status' => 'error', 'message' => 'Username and password are required.'));
    exit;
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert user data into the database
$query = "INSERT INTO login (username, password) VALUES ('$username', '$hashedPassword')";
$result = mysqli_query($connection, $query);

// Check if registration was successful
if ($result) {
    echo json_encode(array('status' => 'success', 'message' => 'User registered successfully.'));
} else {
    echo json_encode(array('status' => 'error', 'message' => 'Registration failed.'));
}

// Close database connection
mysqli_close($connection);

?>
