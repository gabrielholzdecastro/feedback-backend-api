import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import FeedbackModel from './feedback-model';
import SetorModel from './setor-model';

@Entity()
export default class PessoaModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @OneToMany(() => FeedbackModel, (feedbacks) => feedbacks.avaliado)
  feedbacks: FeedbackModel;

  @ManyToOne(() => SetorModel, (setor) => setor.pessoa)
  setor: SetorModel;
}