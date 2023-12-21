<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
  <link rel="manifest" href="/assets/favicon/site.webmanifest">

  <meta property="og:title" content="Doce Arte Confeitaria">
  <meta property="og:description" content="Bolos incríveis para momentos inesquecíveis! Clique aqui para encomendar o seu.">
  <meta property="og:image" content="https://docearte.wellsfernandes.repl.co/assets/favicon/android-chrome-512x512.png">
  <meta property="og:url" content="https://docecake.wellsfernandes.repl.co/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt-BR">

  <link rel="stylesheet" href="./style.css">
  <link rel="stylesheet" href="./styles/login.css">
  <title>Doce Cake - Admin</title>
</head>

<body>

  <main class="main">
    <div class="login-section">
      <section class="login-welcome">
        <img class="login-logo" src="../assets/favicon/android-chrome-512x512.png" alt="Logo da Doce Arte">
        <p class="login-message">Cada bolo é uma tela em branco, e suas mãos são os pinceis da doçura. Deixe sua criatividade fluir!</p>
      </section>
      <form class="form login-form" id="loginForm" action="admin.php" method="post">
        <div class="input-container">
          <input type="text" name="name" id="name" placeholder="Usuário" autocomplete="off" required>
          <input type="password" name="password" id="password" placeholder="Senha" autocomplete="off" required>
        </div>
        <?php
        $errorMsg = false;

        $errorMsg && print "<p class='errorMessage'>Usuário ou senha incorretos</p>";

        ?>
        <button type="submit" id="login" class="button blackButton formButton disabledButton" disabled>Entrar</button>
      </form>
    </div>
  </main>

  <script type="module" src="../app/login.js"></script>
</body>
</html>
