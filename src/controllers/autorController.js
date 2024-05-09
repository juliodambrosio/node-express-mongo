import { autor } from "../models/autores.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const autores = await autor.find({});
            res.status(200).json(autores);
        } catch (error) {
            res.status(500).json({ message: `Erro ao listar autores: ${error}` });
        }

    }

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autor = await autor.findById(id);
            res.status(200).json(autor);
        } catch (error) {
            res.status(500).json({ message: `Error ai listar autor por id: ${error}` });
        }

    }

    static async cadastrarAutor(req, res){
        try {
            const novoAutor =  await autor.create(req.body);
            res.status(201).json({message: 'autor cadastrado com sucesso!!', novoAutor});
        } catch (error) {
            res.status(500).json({message: `Erro ao cadastrar autor: ${error}`});
        }
    }


    static async alterarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(201).json({message: 'Autor alterado com sucesso!!'});
        } catch (error) {
            res.status(500).json({message: `Error ao alterar autor: ${error}`})
        }
    }


    static async apagarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(req.params.id)
            res.status(200).json({message: 'Autor apagado com sucesso!!'});
        } catch (error) {
            res.status(500).json({message: `Erro ao apagar autor: ${error}`});
        }
      
    }

}

export default AutorController;