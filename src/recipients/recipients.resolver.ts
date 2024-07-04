import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RecipientsService } from './recipients.service';
import { Recipient } from './entities/recipient.entity';
import { CreateRecipientInput } from './dto/create-recipient.input';

@Resolver(() => Recipient)
export class RecipientsResolver {
  constructor(private readonly recipientsService: RecipientsService) {}

  @Mutation(() => Recipient)
  createRecipient(
    @Args('createRecipientInput') createRecipientInput: CreateRecipientInput,
  ) {
    return this.recipientsService.create(createRecipientInput);
  }

  @Query(() => [Recipient], { name: 'recipients' })
  findAll() {
    return this.recipientsService.findAll();
  }

  @Query(() => Recipient, { name: 'recipient' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.recipientsService.findOne(id);
  }

  @Mutation(() => Recipient)
  removeRecipient(@Args('id', { type: () => String }) id: string) {
    return this.recipientsService.remove(id);
  }
}
