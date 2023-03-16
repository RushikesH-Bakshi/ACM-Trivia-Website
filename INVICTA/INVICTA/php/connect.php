<?php
$email = $_POST'email'];

//database connection
$conn = new mysqli('localhost','myphp','2cgVz)7VnW@tQF(','trivia');
if($conn->connect_error){
    echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into registration(useremail) values(?)");
    $stmt->bind_param("s", $email);
    $execval = $stmt->execute();
    echo $execval;
    echo "Registration successfully...";
    $stmt->close();
    $conn->close();
}

?>