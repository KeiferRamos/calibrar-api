import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { RecipientsModule } from './recipients/recipients.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'Recipients',
      type: 'postgres',
      username: 'postgres',
      password: 'postgres',
      host: 'localhost',
      synchronize: true,
      autoLoadEntities: true,
      port: 5432,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),
    }),
    RecipientsModule,
  ],
})
export class AppModule {}
