import { Todo } from "../../domain/model/Todo";

export default interface TodoDataSource {
  getTodos(): Promise<Todo[]>;
}
