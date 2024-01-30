# Gerenciador de Tarefas (To-Do List) - Node.js e Express

Um simples gerenciador de tarefas (To-Do List) construído usando Node.js e Express, seguindo a arquitetura Model-View-Controller (MVC).

## Configuração Inicial

1. **Instalação de Dependências:**
   ```bash
   npm install
Configuração do Banco de Dados:

Crie um banco de dados MySQL chamado todolist.

Execute o script SQL para criar a tabela tasks:

sql
Copy code
CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
Certifique-se de configurar as credenciais do banco de dados no arquivo db.js.

Execução da Aplicação:

bash
Copy code
node app.js
Acesso à Aplicação:
Acesse a aplicação em http://localhost:3000.

Funcionalidades
Listar Tarefas:

Rota: /api/tasks
Método: GET
Descrição: Lista todas as tarefas.
Visualizar Tarefa por ID:

Rota: /api/tasks/:id
Método: GET
Descrição: Exibe os detalhes de uma tarefa específica.
Adicionar Tarefa:

Rota: /api/addTask

Método: GET

Descrição: Renderiza a página para adicionar uma nova tarefa.

Rota: /api/tasks

Método: POST

Descrição: Adiciona uma nova tarefa ao banco de dados.

Atualizar Tarefa por ID:

Rota: /api/tasks/:id
Método: PUT
Descrição: Atualiza os detalhes de uma tarefa específica.
Excluir Tarefa por ID:

Rota: /api/deleteTask/:id

Método: GET

Descrição: Renderiza a página para confirmar a exclusão de uma tarefa.

Rota: /api/tasks/:id

Método: POST

Descrição: Exclui uma tarefa do banco de dados.

Tecnologias Utilizadas
Node.js
Express
MySQL
EJS (para as views)
Contribuição
Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Abra uma "issue" para discutir ideias antes de iniciar um novo desenvolvimento.

Licença
Este projeto está licenciado sob a licença MIT - consulte o arquivo LICENSE para obter detalhes.
