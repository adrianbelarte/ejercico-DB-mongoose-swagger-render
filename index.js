const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const cors = require('cors');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/index');

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/tasks', routes); 

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
