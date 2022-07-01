import { Request, Response } from "express";
import FeedbackModel from "../models/feedback-model";
import FeedbackService from "../services/feedback-service";

export default class FeedbacksController {
    private feedbackService: FeedbackService;

    constructor() {
        this.feedbackService = new FeedbackService();
    }

    public index = async (req: Request, res: Response) => {
        try {
            res.send(await this.feedbackService.index()).json();
            return;
        } catch {
            return;
        }
    }

    public get = async (req: Request, res: Response) => {
        res.send(await this.feedbackService.get(Number(req.params))).json();
    }

    public create = async (req: Request, res: Response) => {
        const feedback = req.body as FeedbackModel;
        res.send(await this.feedbackService.create(feedback)).json();
    }

    public update = async (req: Request, res: Response) => {
        const feedback = req.body as FeedbackModel;
        res.send(this.feedbackService.update(feedback, Number(req.params)));
    }

    public delete = async (req: Request, res: Response) => {
        res.send(this.feedbackService.delete(Number(req.params)));
    }
}