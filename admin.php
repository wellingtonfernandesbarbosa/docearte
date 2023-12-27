<?php
$loggedUser = false;
$errorMsg = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $user = $_POST["name"];
  $password = $_POST["password"];

  if (empty($user) || empty($password)) {
    echo "Por favor, preencha todos os campos.";
  } else if ($user == $adminUser && $password == $adminPassword) {
    $errorMsg = false;
    $loggedUser = true;
  } else {
    $errorMsg = true;
  }
}

if ($loggedUser == false) {
  if ($errorMsg == false) {
    include "login.php";
  } elseif ($errorMsg) {
    include "loginError.php";
  }
} elseif ($loggedUser) {
  require './dashboard.php';
}


?>
