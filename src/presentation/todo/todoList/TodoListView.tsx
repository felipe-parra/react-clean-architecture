import { useEffect } from 'react';
import useViewModel from './TodoListViewModel'
import { Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function TodoListView() {
  const { getTodos, todos } = useViewModel();

  useEffect(() => {
    getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <List>
      {
        todos.map((todo, i) => {
          return (
            <ListItem key={i}>
              <ListItemIcon>
                <Checkbox checked={todo.isCompleted} />
              </ListItemIcon>
              <ListItemText primary={todo.title} />
            </ListItem>
          )
        })
      }
    </List>
  )
}
