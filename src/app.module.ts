/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller'; 
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'path/to/database.sqlite',
      entities: [User],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController], 
  providers: [AppService], 
})
export class AppModule {}