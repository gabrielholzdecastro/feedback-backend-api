import Feedback from 'express';
import FeedbackController from '../controllers/feedback-controller';

const feedbackController = new FeedbackController();
Feedback.Router().get("/feedback", feedbackController.index);
Feedback.Router().get("/feedback/:id", feedbackController.get);
Feedback.Router().post("/feedback", feedbackController.create);
Feedback.Router().delete("/feedback/:id", feedbackController.delete);

export const FeedbackRouter = Feedback.Router();