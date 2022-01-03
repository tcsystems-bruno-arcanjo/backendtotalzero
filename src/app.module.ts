import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://${process.env.DATABASE_USERNAME || 'mongo'}:${process.env.DATABASE_PASSWORD || ''}@${process.env.DATABASE_SERVER || 'localhost'}/${process.env.DATABASE_NAME || 'backendtotalzero'}?retryWrites=true&w=majority`),
    UsersModule
  ],
})
export class AppModule {}
