import { Injectable } from '@nestjs/common';
import { CreateRecipientInput } from './dto/create-recipient.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipient } from './entities/recipient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipientsService {
  constructor(
    @InjectRepository(Recipient)
    private readonly recipientRepo: Repository<Recipient>,
  ) {}

  create({ id, ...createRecipientInput }: CreateRecipientInput) {
    const recipient = this.recipientRepo.create(createRecipientInput);
    return this.recipientRepo.save(
      id ? { id, ...createRecipientInput } : recipient,
    );
  }

  findAll() {
    return this.recipientRepo.find({});
  }

  findOne(id: string) {
    return this.recipientRepo.findOne({ where: { id } });
  }

  async remove(id: string) {
    const userToDelete = await this.recipientRepo.findOne({ where: { id } });

    await this.recipientRepo.delete({ id });

    return userToDelete;
  }
}
