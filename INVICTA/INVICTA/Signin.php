<?php

$email = $_REQUEST['email'];

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "trivia db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO email_tb (Email_Id) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
  echo "Registered successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>