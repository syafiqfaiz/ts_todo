import { useState } from 'react'
import { TodoCardProps,  ItemProps } from '../types'

import Form from './Form'

function TodoCard(props: {todo: TodoCardProps}) {
  const todo: TodoCardProps = props.todo
  const [todoState, setTodoState] = useState(todo)
  const [newItemMode, setNewItemMode] = useState(false)
  const [newItem, setNewItem] = useState({id: todoState.items.length + 1, title: ''})

  const toggleNewItemMode = () => {
    setNewItemMode(true)
  }

  const resetNewItemMode = () => {
    setNewItemMode(false)
    setNewItem({...newItem, title: ''})
  }

  const addNewItem = (newItem: ItemProps) => {
    const item = {...newItem, id: todoState.items.length + 1, editMode: false}
    setTodoState({...todoState, items: [...todoState.items, item]})
    setNewItemMode(false)
    setNewItem({id: todoState.items.length + 1, title: ''})
  }

  const toggleEdit = (item: ItemProps) => {
    const items = todoState.items.map((i: ItemProps) => {
      if (i.id === item.id) {
        i.editMode = !item.editMode
      }
      return i
    })
    setTodoState({...todoState, items: items})
  }

  const editItem = (item: ItemProps) => {
    const items = todoState.items.map((i: ItemProps) => {
      if (i.id === item.id) {
        i.editMode = false
        i.title = item.title
      }
      return i
    })
    setTodoState({...todoState, items: items})
  }

  return (
    <div className='col-4 mt-4'>
      <div className='card' key={todoState.id}>
        <div className='card-body'>
          <h5 className='card-title'>{todoState.title}</h5>
          <p className='card-text'>{todoState.description}</p>
          <ul className='list-group'>
            {todoState.items.map((item: ItemProps) => (
              <li className='list-group-item' key={item.id}>
                {item.editMode ? (
                   <Form
                    item={item}
                    onAbort={()=>toggleEdit(item)}
                    onSubmit={editItem}
                  />
                ) :(
                  <div className="row">
                    <div className="col-8">
                      {item.title}
                    </div>
                    <div className="col-4">
                      <a className='' onClick={() => toggleEdit(item)}>Edit</a>
                    </div>
                  </div>
                )}
                
              </li>
            ))}
            {newItemMode ? (
              <li className='list-group-item' key={'new'}>
                <Form
                  item={newItem}
                  onAbort={resetNewItemMode}
                  onSubmit={addNewItem}
                />
             </li>
            ) : ( <button className='btn btn-primary my-1' onClick={toggleNewItemMode}>Add Item</button> ) }
          </ul>
         
        </div>
      </div>
    </div>
  )
}

export default TodoCard
