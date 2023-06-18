import { useState } from "react"
import { Todo } from "../../../domain/model/Todo"
import { TodoRepositoryImpl } from "../../../data/repository/TodoRepositoryImpl";
import TodoAPIDataSourceImpl from "../../../data/data-source/api/TodoAPIDataSourceImpl";
import { GetTodos } from '../../../domain/use-case/todo/GetTodos'
import { GetTodo } from "../../../domain/use-case/todo/GeTodo";

export default function TodoListViewModel() {
  const [todoSelected, setTodoSelected] = useState<Todo | null>(null)

  const [todos, setTodos] = useState<Todo[]>([]);

  const UseCaseGetTodos = new GetTodos(
    new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
  );

  const UseCaseGetTodo = new GetTodo(
    new TodoRepositoryImpl(new TodoAPIDataSourceImpl())
  )

  async function getTodos() {
    setTodos(await UseCaseGetTodos.invoke());
  }

  async function getTodo(id: string) {
    setTodoSelected(await UseCaseGetTodo.invoke(id));
  }
  return {
    todos,
    todoSelected,
    getTodos,
    getTodo
  }
}
