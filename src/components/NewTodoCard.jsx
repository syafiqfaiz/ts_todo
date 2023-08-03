import { useState } from "react";
import TodoItem from "./TodoItem";

function NewTodoCard(props){
  const [todoState, setTodoState] = useState({
    ...props.todo,
    isEditing: false
  })
  // todoState ialah a state
  // setTodoState ialah a function to change the todoState
  // initial value of todoState is todo props

  const onChangeInput = (key, event) => {
    const newValue = event.target.value
    let newTodoState = { ...todoState }
    newTodoState[key] = newValue
    setTodoState(newTodoState)
  }

  // const onChangeTitle = (event) => {
  //   const newTitle = event.target.value
  //   setTodoState({
  //     ...todoState,
  //     title: newTitle
  //   })
  // }

  // const onChangeDescription = (event) => {
  //   const newDescription = event.target.value
  //   setTodoState({
  //     ...todoState,
  //     description: newDescription
  //   })
  // }

  const onChangeItem = (newItem) => {
    const newItems = todoState.items.map((item) => {
      if (item.id === newItem.id) {
        return newItem
      } else {
        return item
      }
    })
    setTodoState({
      ...todoState,
      items: newItems
    })
  }
  return (
    <div className="col-4 mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {todoState.isEditing ? (
              <input
                type='text'
                value={todoState.title}
                onChange={(event)=>{onChangeInput('title',event)}}
              />
            ) : (
              <>{todoState.title}</>
            )}
          </h5>
          {todoState.isEditing ? (
            <input
              type='text'
              value={todoState.description}
              onChange={(event)=>{onChangeInput('description',event)}}
            />
          ) : (
            <p className="card-text">{todoState.description}</p>
          )}
          <ul className="list-group list-group-flush">
            {todoState.items.map((item) => (
             <TodoItem item={item} onChangeItem={onChangeItem} />
            ))}
          </ul>
          {todoState.isEditing ? (
            <button
              className="btn btn-primary"
              onClick={()=>{setTodoState({...todoState, isEditing: false })}}
            >Save</button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={()=>{setTodoState({...todoState, isEditing: true })}}
            >Edit Todo</button>
          )}
          </div>
      </div>
    </div>
  )
}

export default NewTodoCard;