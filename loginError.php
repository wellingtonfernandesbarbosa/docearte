<?php 

require './adminHead.php';

?>

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
        <p class='errorMessage'>Usuário ou senha incorretos</p>
        <button type="submit" id="login" class="button blackButton formButton disabledButton" disabled>Entrar</button>
      </form>
    </div>
  </main>

  <script type="module" src="../app/login.js"></script>
</body>
</html>
