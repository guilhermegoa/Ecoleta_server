import express from "express";
import routes from "./routes";
import path from "path";

const app = express();

app.use(express.json());
app.use(routes);

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);

//Rota: endereço completo da requisição
//Recurso: qual entidade está acessando do sistema

//GET: Buscar uma ou mais informações do back-end
//POST: Criar uma nova informação do back-end
//PUT: Atualizar uma informção existente no back-end
//DELETE: Remover uma informação do back-end

//Request Param: Parâmetros que vem na própria rota que identificam um recurso
//Query Param: Parâmetros que vem na príoria roda, geralamente opcionais para filtro
//Rquest Body: Parâmetros para criação/atualização de informação

//Knex: Linguagem SQL  para js
