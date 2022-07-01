import 'reflect-metadata';
import { DataSource } from 'typeorm';
import FeedbackModel from '../app/models/feedback-model';
import PessoaModel from '../app/models/pessoa-model';
import SetorModel from '../app/models/setor-model';

export default new DataSource({
  type: 'sqlite',
  database: './src/database/database.db',
  synchronize: true,
  logging: false,
  entities: [
    FeedbackModel,
    SetorModel,
    PessoaModel
  ],
  migrations: [],
  subscribers: [],
});
