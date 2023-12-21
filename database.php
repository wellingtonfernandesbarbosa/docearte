<?php

// Nome do arquivo de banco de dados SQLite
$databaseFile = 'database.sqlite';

function conectarBanco() {
    global $databaseFile;

    try {
        // Conectar ao banco de dados SQLite
        $db = new SQLite3($databaseFile);

        // Verificar se a conexão foi estabelecida com sucesso
        if (!$db) {
            die("Não foi possível conectar ao banco de dados.");
        }

        return $db;

    } catch (Exception $e) {
        echo "Erro ao conectar ao banco de dados: " . $e->getMessage();
        return null;
    }
}

function criarTabela() {
    $db = conectarBanco();

    if ($db) {
        // Consulta SQL para criar uma tabela (substitua com suas próprias necessidades)
        $query = "CREATE TABLE IF NOT EXISTS users (
                  id INTEGER PRIMARY KEY AUTOINCREMENT,
                  nome VARCHAR(255) NOT NULL,
                  email VARCHAR(255) NOT NULL,
                  tel VARCHAR(15),
                  whatsapp VARCHAR(15),
                  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )";

        // Executar a consulta
        $db->exec($query);

        // echo "Banco de dados e tabela criados com sucesso.";

        // Fechar a conexão com o banco de dados
        $db->close();
    }
}

function inserirDados($nome, $email, $tel = null, $whatsapp = null) {
    $db = conectarBanco();

    if ($db) {
        // Consulta SQL para inserir dados na tabela
        $insertQuery = "INSERT INTO users (nome, email, tel, whatsapp, date) 
                        VALUES (:nome, :email, :tel, :whatsapp, :date)";

        // Preparar a consulta
        $stmt = $db->prepare($insertQuery);

        $data = date('Y-m-d H:i:s');

        // Substituir os parâmetros com bindParam
        $stmt->bindParam(':nome', $nome, SQLITE3_TEXT);
        $stmt->bindParam(':email', $email, SQLITE3_TEXT);
        $stmt->bindParam(':tel', $tel, SQLITE3_TEXT);
        $stmt->bindParam(':whatsapp', $whatsapp, SQLITE3_TEXT);
        $stmt->bindParam(':date', $data, SQLITE3_TEXT);

        // Executar a consulta preparada
        $result = $stmt->execute();

        if ($result) {
            // echo "Dados inseridos com sucesso.";
        } else {
            // echo "Erro ao inserir os dados.";
        }

        // Fechar a conexão com o banco de dados
        $db->close();
    }
}


function consultarDados() {
    $db = conectarBanco();

    if ($db) {
        // Consulta SQL para selecionar todos os dados da tabela "usuarios"
        $selectQuery = "SELECT * FROM users";

        // Executar a consulta
        $result = $db->query($selectQuery);

        // Verificar se há resultados
        if ($result) {
            // Criar um array para armazenar os resultados
            $dados = [];

            // Iterar sobre os resultados e adicionar ao array
            while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                $dados[] = $row;
            }

            // Fechar a conexão com o banco de dados
            $db->close();

            // Retornar o array de dados
            return $dados;
        } else {
            // Fechar a conexão com o banco de dados
            $db->close();

            // Retorna um array vazio se não houver resultados
            return [];
        }
    }
}

// Chamar as funções conforme necessário
criarTabela();

$request = $_SERVER['REQUEST_URI'];

// Remove a barra inicial e possíveis parâmetros da URL
$route = trim(parse_url($request, PHP_URL_PATH), '/');

if (($_SERVER["REQUEST_METHOD"] == "POST") && ($route == 'database.php')) {
    
    // Receba os dados do formulário
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['phone'];
    $whatsapp = $_POST['whatsApp'];

    // Chame a função inserirDados
    inserirDados($nome, $email, $tel, $whatsapp);

    // Pode redirecionar ou fazer outras ações após o envio do formulário
    header("Location: ../home");
}

consultarDados();
?>
