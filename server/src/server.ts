import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

/* irá ouvir as requisições nesta porta */
app.listen(3333);

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: São os parâmetros usados para fazer uma 'consulta'
