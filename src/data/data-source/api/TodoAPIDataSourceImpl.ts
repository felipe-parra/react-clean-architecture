import { Todo } from "../../../domain/model/Todo";
import TodoDataSource from "../TodoDataSource";
import { TodoAPIEntity } from "./entity/TodoAPIEntity";

const BASE_URL = "https://jsonplaceholder.typicode.com";

interface TypedResponse<T = any> extends Response {
  json<P = T>(): Promise<P>;
}

function myFetch<T>(...args: any): Promise<TypedResponse<T>> {
  return fetch.apply(window, args);
}

export default class TodoAPIDataSourceImpl implements TodoDataSource {
  async getTodos(): Promise<Todo[]> {
    const response = await myFetch<TodoAPIEntity[]>(`${BASE_URL}/todos`);
    const data = await response.json();
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      isCompleted: item.completed,
    }));
  }
}
