<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png">
  <link rel="manifest" href="/assets/favicon/site.webmanifest">

  <script src="https://unpkg.com/imask"></script>

  <meta property="og:title" content="Doce Arte Confeitaria">
  <meta property="og:description" content="Bolos incríveis para momentos inesquecíveis! Clique aqui para encomendar o seu.">
  <meta property="og:image" content="https://docearte.wellsfernandes.repl.co/assets/favicon/android-chrome-512x512.png">
  <meta property="og:url" content="https://docearte.wellsfernandes.repl.co/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt-BR">

  <link rel="stylesheet" href="./style.css">
  <title>Doce Arte</title>
</head>
<body>
  <header>
    <nav class="nav-bar">
      <div class="left-menu">
        <a href="#" class="company-name company-link-header">Doce Arte</a>
      </div>
      <ul class="right-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#aboutUs">Sobre Nós</a></li>
        <li><a href="#specialOffer">Oferta especial</a></li>
        <li><a href="#contacts">Contato</a></li>
      </ul>
      <div class="menu-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
    <div class="orderCake">
      <h2 class="order-title">Deixe o amago para o chocolate<br>seja doce com a doce arte!</h2>
      <a href="#" class="order-button button lightButton">Escolha um bolo</a>
    </div>
  </header>

  <section class="aboutUs" id="aboutUs">
    <h2 class="aboutUs-title">Sobre Nós</h2>
    <p class="aboutUs-text">Nos especializamos em fazer bolos extraordinários que não são apenas deliciosos, mas também verdadeiras obras de arte. Com uma paixão inigualável pela confeitaria, cada bolo que criamos conta uma história única. Seja para ocasiões especiais ou simplesmente para adoçar o seu dia, nossa missão é trazer alegria através da magia da confeitaria. Conheça a Doce Arte e permita-nos tornar seus momentos mais doces e memoráveis.</p>
    <hr>
    <h2 class="company-name company-name-aboutUs">Doce Arte</h2>
  </section>

  <section class="specialOffer" id="specialOffer">
    <div class="specialOffer-card">
      <h3>Oferta especial</h3>
      <p>
        Delicie-se com nosso Naked Cake! Uma delícia de 1kg por apenas R$ 59,99! Aproveite esta oferta incrível!
      </p>
      <a href="#" class="button offerButton">
        Peça o seu!
      </a>
    </div>
    <div class="specialOffer_image">
      <img src="assets/img/nakedCake.webp" alt="Bolo pelado" class="specialOffer-image">
    </div>
  </section>

  <section class="form">
    <h2 class="form-title">Fale conosco</h2>
    <form action="./database.php" method="post">
      <div class="input-container">
        <input type="text" name="name" id="name" placeholder="Seu nome" required>
        <input type="email" name="email" id="email" placeholder="Seu email" required>
        <input type="tel" name="phone" id="phone" placeholder="Seu telefone" >
        <input type="text" name="whatsApp" id="WhatsApp" placeholder="Seu WhatsApp">
      </div>
      <button type="submit" class="button blackButton formButton">Enviar</button>
    </form>
  </section>

  <footer class="footer" id="contacts">
    <div class="footer-content">
      <h2 class="company-name company-link-footer">Doce Arte</h2>
      <ul class="footer-links">
        <li><a href="#" class="footer-link">Home</a></li>
        <li><a href="#" class="footer-link">Produtos</a></li>
        <li><a href="#" class="footer-link">Sobre Nós</a></li>
        <li><a href="#" class="footer-link">Contato</a></li>
      </ul>
      <div class="social-media">
        <a href="https://www.instagram.com/docecacauartes/" class="social-media-link">
          <img src="./assets/img/instagram-w.svg" class="social-media-logo" alt="Logo do Instagram">
          <span class="social-media-label">Instagram</span>
        </a>
        <a href="https://wa.me/5531996464513" class="social-media-link">
          <img src="./assets/img/whatsapp-w.svg" class="social-media-logo" alt="Logo do WhatsApp">
          <span class="social-media-label">WhatsApp</span>
        </a>
      </div>
    </div>
  </footer>
  <!-- <?php

  echo getenv('adminUser');
  echo getenv('adminPassword');

  ?> -->
  <script src="index.js" type="module"></script>
  <script src='https://cdn.rawgit.com/lagden/vanilla-masker/lagden/build/vanilla-masker.min.js'></script>
</body>
</html>
