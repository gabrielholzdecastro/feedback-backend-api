import Setor from 'express';
import SetorController from '../controllers/setor-controller';

const setorController = new SetorController();
Setor.Router().get("/setor", setorController.index);
Setor.Router().get("/setor/:id", setorController.get);
Setor.Router().post("/setor", setorController.create);
Setor.Router().delete("/setor/:id", setorController.delete);

export const SetorRouter = Setor.Router();