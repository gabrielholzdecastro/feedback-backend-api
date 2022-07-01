import { Repository } from "typeorm";
import AppDataSource from "../../database/data-source"
import SetorModel from "../models/setor-model";

export default class SetorService {
    private setorRepository: Repository<SetorModel>;

    constructor() {
        this.setorRepository = AppDataSource.getRepository(SetorModel);
    }

    public index = async () => {
        return await this.setorRepository.find();
    }
    public get = async (id: number) => {
        return await this.setorRepository.find({
            where: {
                id: id,
            },
        });
    }

    public create = async (setor: SetorModel) => {
        return await this.setorRepository.insert(setor);
    }

    public update = async (setor: SetorModel, id: number) => {
        return await this.setorRepository.update(id, setor);
    }

    public delete = async (id: number) => {
        return await this.setorRepository.delete(id);
    }
}