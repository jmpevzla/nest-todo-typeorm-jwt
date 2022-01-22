import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto as Todo } from './create-todo.dto';
import { nanoid } from 'nanoid';

@Injectable()
export class TodosService {
  private todosDb: Todo[] = [];

  findAll(): any {
    return [...this.todosDb];
  }

  create(todoTitle: string, todoDescription: string): any {
    const id = nanoid();
    const newTodo = new Todo(id, todoTitle, todoDescription);
    this.todosDb = this.todosDb.concat(newTodo);
    return newTodo;
  }

  findOne(id: string): any {
    const todoIndex = this.todosDb.find((elem) => elem.id === id);
    if (todoIndex === undefined) {
      throw new NotFoundException();
    }
    return todoIndex;
  }

  deleteById(id: string): any {
    const index = this.todosDb.findIndex((elem) => elem.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }
    this.todosDb.splice(index, 1);
    return { message: 'Todo Deleted' };
  }

  updateById(id: string, todoTitle: string, todoDescription: string): any {
    const index = this.todosDb.findIndex((elem) => elem.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }
    const singleTodo = this.todosDb[index];
    if (todoTitle) {
      singleTodo.title = todoTitle;
    } else if (todoDescription) {
      singleTodo.description = todoDescription;
    }
    return { message: 'Todo Updated' };
  }
}
