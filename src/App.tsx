import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TodoCardProps } from './types';

import NewTodoCard from './components/NewTodoCard';

function App() {

  const todoList = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Todo 1 description',
      items: [
        {id: 1,title: 'Item 1'},
        {id: 2,title: 'Item 2'},
        {id: 3,title: 'Item 3'},
        {id: 4,title: 'Item 4'},
        {id: 5,title: 'Item 5'},
      ]
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Todo 2 description',
      items: [
        {id: 1,title: 'Item 1'},
        {id: 2,title: 'Item 2'},
        {id: 3,title: 'Item 3'},
        {id: 4,title: 'Item 4'},
        {id: 5,title: 'Item 5'},
      ]
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Todo 3 description',
      items: [
        {id: 1,title: 'Item 1'},
        {id: 2,title: 'Item 2'},
        {id: 3,title: 'Item 3'},
        {id: 4,title: 'Item 4'},
        {id: 5,title: 'Item 5'},
      ]
    },
    {
      id: 4,
      title: 'Todo 4',
      description: 'Todo 4 description',
      items: [
        {id: 1,title: 'Item 1'},
        {id: 2,title: 'Item 2'},
        {id: 3,title: 'Item 3'},
        {id: 4,title: 'Item 4'},
        {id: 5,title: 'Item 5'},
      ]
    },
    {
      id: 5,
      title: 'Todo 5',
      description: 'Todo 5 description',
      items: [
        {id: 1,title: 'Item 1'},
        {id: 2,title: 'Item 2'},
        {id: 3,title: 'Item 3'},
        {id: 4,title: 'Item 4'},
        {id: 5,title: 'Item 5'},
      ]
    },
    {
      id: 6,
      title: 'Todo 6',
      description: 'Todo 6 description',
      items: [
        {id: 1,title: 'Item 1'},
        {id: 2,title: 'Item 2'},
        {id: 3,title: 'Item 3'},
        {id: 4,title: 'Item 4'},
        {id: 5,title: 'Item 5'},
      ]
    },
  ]

  return (
    <div className='row'>
      <h1>Todo List</h1>
      {todoList.map((todoData) => (
        <NewTodoCard todo={todoData} />
      ))}
    </div>  
  )
}

export default App
