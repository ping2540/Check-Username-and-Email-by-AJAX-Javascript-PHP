<?php
if (isset($_SERVER['CONTENT_TYPE'])) {
    $incom_contentType = $_SERVER['CONTENT_TYPE'];
    if ($incom_contentType != 'application/json') {
        header($_SERVER['SERVER_PROTOCOL'] . '599 Bad request');
        exit();
    }
    $content = trim(file_get_contents("php://input"));
    $arr = json_decode($content, true);
    $db = mysqli_connect('localhost', 'root', '0634955767', 'api');
    if ((isset($arr['email']) && isset($arr['username'])) && isset($arr['password'])) {
        $username = $arr["username"];
        $email = $arr["email"];
        $password = $arr["password"]; 
        $sql = "SELECT * FROM users WHERE username = '$username' ";
        $sql = "INSERT INTO `api`(`Username`, `Password`, `Email`) VALUES ('$username','md5($password)','".$email."')";
        $results = mysqli_query($db, $sql);
        echo 'record';
    } else if (isset($arr['username'])) {
        $sql = "SELECT Username FROM `api` WHERE Username = " . "'" . $arr["username"] . "'";
        $results = mysqli_query($db, $sql);
        if (mysqli_num_rows($results) > 0) {
            echo 'have';
        } else
            echo 'no_have';
    } else if (isset($arr['email'])) {
        $email = $arr["email"];
        $sql = "SELECT Email FROM api WHERE Email = '$email' ";
        $results = mysqli_query($db, $sql);
        if (mysqli_num_rows($results) > 0) {
            echo 'have';
        } else echo 'no_have';
    }
    exit();
}
