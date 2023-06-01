import { Todo } from '@prisma/client'
type TodoItemProps = {
  todo: Todo
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <>
      <li className='flex items-center gap-3'>{todo.title}</li>
    </>
  )
}

export default TodoItem
