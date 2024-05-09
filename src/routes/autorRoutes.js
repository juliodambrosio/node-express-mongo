import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();
routes.get("/autores", autorController.listarAutores);
routes.get("/autores/:id", autorController.listarAutorPorId);
routes.post("/autores", autorController.cadastrarAutor);
routes.put("/autores/:id", autorController.alterarAutor);
routes.delete("/autores/:id",autorController.apagarAutor);

export default routes;