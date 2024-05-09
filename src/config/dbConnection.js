import mongoose, { mongo } from "mongoose";

async function ativarConexao(){
    mongoose.connect(process.env.DB_CONNECTION)
    return mongoose.connection;
}


export default ativarConexao;