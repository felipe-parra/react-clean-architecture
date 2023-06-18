import { Todo } from "../model/Todo";

export interface TodoRepository {
  getTodo(id: string): Promise<Todo>;
  getTodos(): Promise<Todo[]>;
}
