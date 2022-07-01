import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import PessoaModel from './pessoa-model';

@Entity()
export default class SetorModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => PessoaModel, (pessoa) => pessoa.setor)
  pessoa: PessoaModel[];
}