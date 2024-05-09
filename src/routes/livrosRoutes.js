import express from "express";
import livroController from "../Controllers/livroController.js";

const routes = express.Router();
routes.get("/livros", livroController.listarLivro);
routes.get("/livros/busca", livroController.listarLivroPorEditora);
routes.get("/livros/:id", livroController.listarLivroPorId);
routes.post("/livros", livroController.cadastrarLivro);
routes.put("/livros/:id", livroController.atualizarLivro);
routes.delete("/livros/:id", livroController.excluirLivro);


export default routes;