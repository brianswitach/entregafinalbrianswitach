const express = require('express');
const { create } = require('express-handlebars');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const app = express();

// Configurar Handlebars
const hbs = create({
    extname: '.handlebars',
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());

// Usar las rutas importadas
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Definir la ruta raíz
app.get('/', (req, res) => {
  res.render('index');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

