import mongoose  from "mongoose";
import { autoresSchema } from "./autores.js";

const livroSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, require: true},
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', require: true },
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema );

export default livro;