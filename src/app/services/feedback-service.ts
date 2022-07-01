import { Repository } from "typeorm";
import AppDataSource from "../../database/data-source"
import FeedbackModel from "../models/feedback-model";

export default class FeedbackService {
    private feedbackRepository: Repository<FeedbackModel>;

    constructor() {
        this.feedbackRepository = AppDataSource.getRepository(FeedbackModel);
    }

    public index = async () => {
        return await this.feedbackRepository.find({
            relations: {
                avaliado: true,
            },
        });
    }

    public get = async (id: number) => {
        return await this.feedbackRepository.find({
            where: {
                id: id,
            },
            relations: {
                avaliado: true,
            },
        });
    }

    public create = async (feedback: FeedbackModel) => {
        return await this.feedbackRepository.insert(feedback);
    }

    public update = async (feedback: FeedbackModel, id: number) => {
        return await this.feedbackRepository.update(id, feedback);
    }

    public delete = async (id: number) => {
        return await this.feedbackRepository.delete(id);
    }
}