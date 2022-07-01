import { Request, Response } from "express";
import SetorModel from "../models/setor-model";
import SetorService from "../services/setor-service";

export default class SetoresController {
    private setorService: SetorService;

    constructor() {
        this.setorService = new SetorService();
    }

    public index = async (req: Request, res: Response) => {
        try {
            res.send(await this.setorService.index()).json();
            return;
        } catch {
            return;
        }
    }

    public get = async (req: Request, res: Response) => {
        res.send(await this.setorService.get(Number(req.params))).json();
    }

    public create = async (req: Request, res: Response) => {
        const setor = req.body as SetorModel;
        res.send(await this.setorService.create(setor)).json();
    }

    public update = async (req: Request, res: Response) => {
        const setor = req.body as SetorModel;
        res.send(this.setorService.update(setor, Number(req.params)));
    }

    public delete = async (req: Request, res: Response) => {
        res.send(this.setorService.delete(Number(req.params)));
    }
}