import { useState } from "react"
import { Todo } from "../../../domain/model/Todo"
import { TodoRepositoryImpl } from "../../../data/repository/TodoRepositoryImpl";
import TodoAPIDataSourceImpl from "../../../data/data-source/api/TodoAPIDataSourceImpl";
import { GetTodos } from '../../../domain/use-case/todo/GetTodos'

export default function TodoListViewModel() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const UseCase = new GetTodos(
    new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
  );

  async function getTodos() {
    setTodos(await UseCase.invoke());
  }
  return {
    getTodos,
    todos
  }
}
