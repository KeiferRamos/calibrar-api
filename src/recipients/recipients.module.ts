import { Module } from '@nestjs/common';
import { RecipientsService } from './recipients.service';
import { RecipientsResolver } from './recipients.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipient } from './entities/recipient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipient])],
  providers: [RecipientsResolver, RecipientsService],
})
export class RecipientsModule {}
