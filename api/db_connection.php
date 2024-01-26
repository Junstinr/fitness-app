<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

try {
    // Database configuration
    $host = 'localhost';
    $username = 'root';
    $password = 'Kraken12345!@';
    $database = 'workout_tracker';

    // Create connection
    $connection = mysqli_connect($host, $username, $password, $database);

    // Check connection
    if (!$connection) {
    die('Connection failed: ' . mysqli_connect_error());
    }
} catch (Exception $e) {
    echo "Connection failed: " . $e->getMessage();
}


?>
