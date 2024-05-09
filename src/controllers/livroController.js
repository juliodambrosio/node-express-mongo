import livro from "../models/livros.js";
import { autor } from "../models/autores.js";

class livroController {

    static async listarLivro(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `Error ao listar livros ${error.message}` });
        }

    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);

        } catch (error) {
            res.status(500).json({ message: `Error ao listrar livro por ID: ${error}` });
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = req.body;
            const autorLivro = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorLivro._doc } };
            console.log(livroCompleto);
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "criado com sucesso", livro: livroCriado });
        } catch (error) {
            res.status(500).json({ message: `falha ao cadastrar livro: ${error.message}` });
        }
    }


    static async atualizarLivro(req, res) {
        try {
            const idDoLivro = req.params.id;
            await livro.findByIdAndUpdate(idDoLivro, req.body);
            res.status(200).json({ message: "Livro atualizado com Sucesso:" });

        } catch (error) {
            res.status(500).json({ message: `Error ao atualizar Livro: ${error}` })
        }
    }

    static async excluirLivro(req, res) {
        try {
            await livro.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: "Apagado com sucesso!!" })
        } catch (error) {
            res.status(500).json({ message: `Erro ao excluir livro:  ${error}` })
        }
    }

    static async listarLivroPorEditora(req, res){
        
        try {
            const editora = req.query.editora;
            console.log(editora);
            const livros = await livro.find({editora: editora});
            res.status(200).json(livros)
        } catch (error) {
            res.status(500).json({message: `Erro ao listar livros por editora: ${error}`});
        }
    }
}


export default livroController;