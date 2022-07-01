import express, { Express, Request, Response, NextFunction } from 'express';
import { FeedbackRouter } from './routes/feedback-router';
import { PessoaRouter } from './routes/pessoa-router';
import { SetorRouter } from './routes/setor-router';
import { config } from 'dotenv';
import initializeDB from '../database';

config({
  path: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env',
});

class App {
  public express: Express;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.database();
  }

  public async database() {
    await initializeDB();
  }

  public middlewares() {
    this.express.use(express.json());
    this.express.use((req: Request, res: Response, next: NextFunction) => {
      console.log(req.query, `request em: ${new Date().toISOString()}`);
      next();
    });
    this.express.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Pass to next layer of middleware
      next();
    });
  }

  public routes() {
    this.express.use("/", PessoaRouter);
    this.express.use("/", SetorRouter);
    this.express.use("/", FeedbackRouter);
  }
}

export default new App().express;