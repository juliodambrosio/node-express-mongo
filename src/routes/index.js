import express from "express"
import livros from "./livrosRoutes.js"
import autores from "./autorRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de NodeJs"));

    app.use(express.json(), livros, autores);// use() utilizado para incluir middleware dentro do Express

};



export default routes;