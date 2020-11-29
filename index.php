<?php require "checkData.php"; ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
    <link href="CSS/register.css" rel="stylesheet" />
</head>

<body>
    <div class="container">
        <div class="header">
            <center>
                <h2>Register</h2>
            </center>
        </div>
        <form class="form" id="form">
            <div class="form-control">
                <label><b>Username</b></label>
                <br><br>
                <input type="text" placeholder="username" id="username" maxlength="16">
                <i class="fas fa-check-circle" style='font-size:30px'></i>
                <i class="fas fa-exclamation-circle" style='font-size:30px'></i>
                <small></small>
            </div>
            <div class="form-control">
                <label><b>Email</b></label>
                <br><br>
                <input type="email" placeholder="example@hotmail.com" id="email">
                <i class="fas fa-check-circle" style='font-size:30px'></i>
                <i class="fas fa-exclamation-circle" style='font-size:30px'></i>
                <small></small>
            </div>
            <div class="form-control">
                <label><b>Password</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="fa fa-fw fa-eye field-icon toggle-password" id="togglePassword"></span></label>
                <br><br>
                <input type="password" placeholder="password" id="password" maxlength="16">
                <i class="fas fa-check-circle" style='font-size:30px'></i>
                <i class="fas fa-exclamation-circle" style='font-size:30px'></i>
                <small></small>
            </div>
            <div class="form-control">
                <label><b>Password check</b><span class="fa fa-fw fa-eye field-icon toggle-password1" id="togglePassword1"></span></label>
                <br><br>
                <input type="password" placeholder="password" id="checkpassword" maxlength="16">
                <i class="fas fa-check-circle" style='font-size:30px'></i>
                <i class="fas fa-exclamation-circle" style='font-size:30px'></i>
                <small></small>
            </div>
            <button id='btn'>Submit</button>
        </form>
    </div>
    <script src="Js/register.js"></script>
    <script src="Js/togglepw.js"></script>
</body>

</html>
