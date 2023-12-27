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
  <link rel="stylesheet" href="./styles/dashboard.css">
  <title>Doce Cake - Admin</title>
</head>


<body>
  <header class="header">
    <h1 class="company-name">Doce Arte</h1>
    <p class="dashboard-welcome">Seja bem vinda, Jack!</p>
  </header>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h2 class="dashboard-title">Clientes Cadastrados</h2>
    </div>
    <div class="dashboard-items">
      <div class="items-container">
        <?php
        include './database.php';
        $count = 0;

        $dados = consultarDados();

        if (!empty($dados)) {
          foreach ($dados as $row) {
            $count++;
            $dateUpdated = date('d/m/Y', strtotime($row['date']));
            echo '<div class="dashboard-item">';
            echo '<p class="item-info socialContainer nameContainer">' . $row['nome'] . '</p>';
            echo '<p class="item-info socialContainer mailContainer">
                    <a class="socialLink" href="mailto:' . $row['email'] . '">
                    <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg">
                      <image href="assets/img/mail.svg" width="25px" height="25px" />
                    </svg>

                    <span class="item-contact">' . $row['email'] . '</span></a></p>';
            echo $row['tel'] ? '<p class="item-info socialContainer phoneContainer">
                                  <a class="socialLink" href="tel:' . $row['tel'] . '">
                                    <svg width="25px" height="25px" xmlns="http://www.w3.org/2000/svg">
                                      <image href="assets/img/phone.svg" width="25px" height="25px" />
                                    </svg>
                                    <span class="item-contact">' . $row['tel'] . '</span>
                                  </a>
                                </p>' : '
                                <p class="item-info">
                                  <a class="dashboard-phone" href="tel:"</a>
                                </p>';
            echo $row['whatsapp'] ? '<p class="item-info socialContainer whatsAppContainer">
                    <a class="socialLink" href="https://api.whatsapp.com/send?phone=' . $row["whatsapp"] . '">
                      <svg viewBox="0 0 16 16" class="socialSvg" href="https://api.whatsapp.com/send?phone=' . $row['whatsapp'] . '">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
                        </path>
                      </svg>
                      <span class="item-contact">' . $row['whatsapp'] . '</span>
                    </a>
                  </p>' : '<p class="item-info">
                  <a class="" href=""> </a>
                </p>';
            echo '<p class="item-info socialContainer dateContainer">' . $dateUpdated . '</p>';
            echo '</div>';
            echo $count < count($dados) ? '<hr class="line-list">' : '';
          }
        } else {
          echo '<p>Nenhum resultado encontrado.</p>';
        }
        ?>
      </div>
    </div>
  </div>
</body>

</html>