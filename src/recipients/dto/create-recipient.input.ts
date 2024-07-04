import { Field, InputType } from '@nestjs/graphql';
import { Bank } from '../enum/bank';
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateRecipientInput {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field()
  @IsEnum(Bank)
  bank: Bank;

  @Field()
  @IsString()
  account_number: string;

  @Field()
  @IsString()
  first_name: string;

  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  middle_name?: string;

  @Field()
  @IsString()
  last_name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  account_name: string;
}
