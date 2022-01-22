import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAllTodos(): any {
    return this.todosService.findAll();
  }

  @Post()
  addTodo(
    @Body('title') todoTitle: string,
    @Body('description') todoDescription: string,
  ): any {
    return this.todosService.create(todoTitle, todoDescription);
  }

  @Get(':id')
  getTodoById(@Param('id') todoId: string): any {
    return this.todosService.findOne(todoId);
  }

  @Delete(':id')
  deleteTodoById(@Param('id') todoId: string): any {
    return this.todosService.deleteById(todoId);
  }

  @Patch(':id')
  updateTodoById(
    @Param('id') todoId: string,
    @Body('title') todoTitle: string,
    @Body('description') todoDescription: string,
  ): any {
    return this.todosService.updateById(todoId, todoTitle, todoDescription);
  }
}
