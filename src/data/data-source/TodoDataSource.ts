import { Todo } from "../../domain/model/Todo";

export default interface TodoDataSource {
  getTodo(id: string): Promise<Todo>;
  getTodos(): Promise<Todo[]>;
}
