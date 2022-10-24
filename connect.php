<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = $_POST['nm'];
    $email = $_POST['eml'];
    $message = $_POST['msg'];

    //Database connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "contact_db";

    //Create a connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    //Die if connection not successful
    if(!$conn){
        die("Sorry we failed to connect: ". mysqli_connect_error());
    }
    else {
        echo "Connection was successful<br>";
        //Insert to db
        $sql = "INSERT INTO `connections` (`nm`, `eml`, `msg`) VALUES ('$name', '$email', '$message')";
        $result = mysqli_query($conn, $sql);

        //Check for submission
        if($result){
            echo "<strong>Success!</strong> The data was submitted successfully<br>";
        }
        else {
            echo "The data was not submitted because of ". mysqli_error($conn);
        }
    }
}



// // Create a db
// $sql = "CREATE DATABASE contact_db";
// //Create a table in the db
// $sql = "CREATE TABLE `contact_db`.`connections` (`sno` INT(6) NOT NULL AUTO_INCREMENT , `nm` VARCHAR(50) NOT NULL , `eml` VARCHAR(20) NOT NULL , `msg` TEXT NOT NULL , PRIMARY KEY (`sno`)) ENGINE = InnoDB";
//Fetching data from Form


?>
