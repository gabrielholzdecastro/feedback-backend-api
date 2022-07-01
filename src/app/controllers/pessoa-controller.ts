import { Request, Response } from "express";
import PessoaModel from "../models/pessoa-model";
import PessoasService from "../services/pessoa-service";

export default class PessoasController {
    private pessoaService: PessoasService;

    constructor() {
        this.pessoaService = new PessoasService();
    }

    public index = async (req: Request, res: Response) => {
        try {
            res.send(await this.pessoaService.index()).json();
            return;
        } catch {
            return;
        }
    }

    public get = async (req: Request, res: Response) => {
        res.send(await this.pessoaService.get(Number(req.params))).json();
    }

    public create = async (req: Request, res: Response) => {
        const pessoa = req.body as PessoaModel;
        res.send(await this.pessoaService.create(pessoa)).json();
    }

    public update = async (req: Request, res: Response) => {
        const pessoa = req.body as PessoaModel;
        res.send(this.pessoaService.update(pessoa, Number(req.params)));
    }

    public delete = async (req: Request, res: Response) => {
        res.send(this.pessoaService.delete(Number(req.params)));
    }
}