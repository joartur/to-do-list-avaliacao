const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');  
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

// Middleware para capturar erros não tratados
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro interno do servidor');
  });

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rota para a raiz
app.get('/', (req, res) => {
  res.render('index');
});

// Rotas
app.use('/api', taskRoutes);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
