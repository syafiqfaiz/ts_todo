import { useState } from 'react'
import { ItemProps } from '../types'

function Form(props: {
  item: ItemProps,
  onSubmit: (e:ItemProps)=>void,
  onAbort: ()=>void}) {

  const {item, onSubmit, onAbort} = props
  const [itemState, setItemState] = useState(item)

  const onChangeItem = (event: { target: { value: string } }) => {
    setItemState({...itemState, title: event.target.value})
  }

  const handleSubmit = () => {onSubmit(itemState)}
  return (
    <div className="row">
      <div className="col-8">
        <input type='text' className='form-control' placeholder='Item' onChange={onChangeItem} value={itemState.title}/>
      </div>
      <div className="col-4 row justify-content-evenly">
        <div className="col-6 px-1">
          <button className='btn btn-primary' onClick={handleSubmit}>+</button>
        </div>
        <div className="col-6">
          <button className='btn btn-danger' onClick={onAbort}>x</button>
        </div>
      </div>
    </div>
  )
}

export default Form
