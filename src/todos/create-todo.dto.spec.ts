import { CreateTodoDto } from './create-todo.dto';

describe('CreateTodoDto', () => {
  it('should be defined', () => {
    expect(new CreateTodoDto('1', 'test', 'new test')).toBeDefined();
  });
});
