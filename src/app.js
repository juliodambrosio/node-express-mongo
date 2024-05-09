import express from "express";
import ativarConexao from "./config/dbConnection.js";
import routes from "./routes/index.js";
import livro from "./Controllers/livroController.js"

const conn = await ativarConexao();

conn.on("error", (erro) =>{
    console.error("Erro para conectar com o banco: " + erro)
});

conn.once("open", () =>{
    console.log("Conexao feita com sucesso!!")
});

const app = express();
routes(app);


// app.get("/", (req, res) =>{
//     res.status(200).send("Curso node com Express")
// });

// app.get("/livros", async (req, res) => {
//     const livros = await livro.find({});
//     res.status(200).json(livros);
// });

// app.post("/livros", (req, res) => {
//     livros.push(req.body);
//     res.status(201).send("Livro cadastrado com sucesso")
// });

// app.get("/livros/:id", (req, res) => {

// });

// app.put("/livros/:id", (req, res) => {
//     atualizarLivro(req.params.id, req.body.titulo);
//     res.status(200).send(livros);
// });

// app.delete("/livros/:id", (req, res) =>{
//     apagarLivro(req.params.id);
//     res.status(200).send("Livro apagado com sucesso")
// });


export default app;