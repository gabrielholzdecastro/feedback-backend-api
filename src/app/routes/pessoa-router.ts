import Pessoa from 'express';
import PessoaController from '../controllers/pessoa-controller';

const pessoaController = new PessoaController();
Pessoa.Router().get("/pessoa", pessoaController.index);
Pessoa.Router().get("/pessoa/:id", pessoaController.get);
Pessoa.Router().post("/pessoa", pessoaController.create);
Pessoa.Router().delete("/pessoa/:id", pessoaController.delete);

export const PessoaRouter = Pessoa.Router();