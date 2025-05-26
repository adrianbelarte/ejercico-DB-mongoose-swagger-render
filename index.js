const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/index');

app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/tasks', routes); // opcional: cambiar esto si tus rutas están todas en /tasks

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
