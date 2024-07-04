import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Bank } from '../enum/bank';

@ObjectType()
@Entity()
export class Recipient {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field()
  @Column({
    type: 'enum',
    enum: Bank,
    default: Bank.BANKO_DE_ORO,
  })
  bank: Bank;

  @Column()
  @Field()
  account_number: string;

  @Field()
  @Column()
  first_name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  middle_name?: string;

  @Field()
  @Column()
  last_name: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field()
  account_name: string;
}
