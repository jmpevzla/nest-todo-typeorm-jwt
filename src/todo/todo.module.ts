import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoRepository } from './repository/todo.repository';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
