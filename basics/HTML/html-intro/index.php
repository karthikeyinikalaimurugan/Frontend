<?php
  $username = $_POST['username'];
  $password = $_POST['passwrd'];
  $email = $_POST['email'];

  $query = 'select * from users where username='+$username+' and password='+$password;
  $success = true;
  redirect($success ? '/dashboard.html' : 'index.html');
?>