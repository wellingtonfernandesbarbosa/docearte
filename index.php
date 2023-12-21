<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


$request = $_SERVER['REQUEST_URI'];

// Remove a barra inicial e possíveis parâmetros da URL
$route = trim(parse_url($request, PHP_URL_PATH), '/');

$route = $route ?: 'home'; // Rota padrão se estiver na raiz

if ($route === 'admin') {
  $route = 'admin';
} elseif ($route == 'login'){
  $route = 'login';
} else if (($route != 'home') && ($route != 'admin')){
  $route = '404';     
};

$file_path = "./{$route}.php";

// echo $file_path;

// Verifica se o arquivo existe antes de incluí-lo
if (file_exists($file_path)) {
    include $file_path;
} else {
    // Página não encontrada, você pode redirecionar ou exibir uma mensagem de erro
    include './404.php';
}
?>
