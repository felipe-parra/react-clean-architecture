import { Todo } from "../../model/Todo";
import { TodoRepository } from "../../repository/TodoRepository";

export interface GetTodoUseCase {
  invoke: (todoId: string) => Promise<Todo>;
}

export class GetTodo implements GetTodoUseCase {
  private todoRepo: TodoRepository;

  constructor(_todoRepo: TodoRepository) {
    this.todoRepo = _todoRepo;
  }

  async invoke(todoId: string) {
    return this.todoRepo.getTodo(todoId);
  }
}
