import { Repository } from "typeorm";
import AppDataSource from "../../database/data-source"
import PessoaModel from "../models/pessoa-model";

export default class PessoasService {
    private pessoaRepository: Repository<PessoaModel>;

    constructor() {
        this.pessoaRepository = AppDataSource.getRepository(PessoaModel);
    }

    public index = async () => {
        return await this.pessoaRepository.find({
            relations: {
                setor: true,
            },
        });
    }
    public get = async (id: number) => {
        return await this.pessoaRepository.find({
            where: {
                id: id,
            },
            relations: {
                setor: true,
            },
        });
    }

    public create = async (pessoa: PessoaModel) => {
        return await this.pessoaRepository.insert(pessoa);
    }

    public update = async (pessoa: PessoaModel, id: number) => {
        return await this.pessoaRepository.update(id, pessoa);
    }

    public delete = async (id: number) => {
        return await this.pessoaRepository.delete(id);
    }
}