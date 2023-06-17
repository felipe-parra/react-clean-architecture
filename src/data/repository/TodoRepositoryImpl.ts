import { Todo } from "../../domain/model/Todo";
import { TodoRepository } from "../../domain/repository/TodoRepository";
import TodoDataSource from "../data-source/TodoDataSource";

export class TodoRepositoryImpl implements TodoRepository {
  dataSource: TodoDataSource;

  constructor(_datasource: TodoDataSource) {
    this.dataSource = _datasource;
  }

  async getTodos(): Promise<Todo[]> {
    return this.dataSource.getTodos();
  }
}
