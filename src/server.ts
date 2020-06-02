import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listagem de usuarios");
  response.json(["asdsa", "asdadsa", "asdasda", "as"]);
});

app.listen(3333);
