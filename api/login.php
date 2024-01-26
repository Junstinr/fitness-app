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
$username = mysqli_real_escape_string($connection, isset($decodedData['username']) ? $decodedData['username'] : null) ;
$password = mysqli_real_escape_string($connection, isset($decodedData['password']) ? $decodedData['password'] : null) ;


// Retrieve hashed password from the database based on the username
$query = "SELECT username, password FROM login WHERE username = '$username'";
$result = mysqli_query($connection, $query);

// Check if the user exists
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $hashedPassword = $row['password'];

    // Verify the password
    if (password_verify($password, $hashedPassword)) {
        echo json_encode(array('status' => 'success', 'message' => 'Login successful.'));
    } else {
        echo json_encode(array('status' => 'error', 'message' => 'Incorrect password.'));
    }
} else {
    echo json_encode(array('status' => 'error', 'message' => 'User not found.'));
}


// Close database connection
mysqli_close($connection);

?>
