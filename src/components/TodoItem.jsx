import { useState } from 'react';

function TodoItem({item, onChangeItem}){
  const [itemState, setItemState] = useState(item)
  const [isEditing, setIsEditing] = useState(false)

  const toggleIsEditing = () => {
    setIsEditing(!isEditing)
  }

  const onChangeItemInput = (event) => {
    setItemState({
      ...itemState,
      title: event.target.value
    })
  }

  const onSubmit = () => {
    toggleIsEditing()
    onChangeItem(itemState)
  }

  const onAbort = () => {
    toggleIsEditing()
    setItemState(item)
  }

  const listenKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit()
    }
  }
  
  return (
    <>
      {isEditing ? (
        <div className='row'>
          <input
            type='text'
            value={itemState.title}
            onChange={onChangeItemInput}
            onKeyDown={listenKeyDown}
          />
          <span className='text-danger' onClick={onSubmit} > Submit</span>
        </div>
      ) : (
        <div className='row'>
          <li className="list-group-item">{itemState.title}</li>
          <span className='text-primary' onClick={onAbort}> Edit</span>
        </div>
        
      )}
    </>
  )
}

export default TodoItem;
