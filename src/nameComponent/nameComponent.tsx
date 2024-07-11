import React from 'react'
import './nameComponent.scss'
import { useDispatch } from 'react-redux'
import { nameSlice } from '../store/slices/nameSlice'

type NameComponentProps = {
  name: string,
  pos: number,
}


const NameComponent: React.FC<NameComponentProps> = ({ name, pos }) => {

  const dispatch = useDispatch();
  const removeThisUser = (pos:number) => {
    dispatch(nameSlice.actions.removeUser({pos }))
  }
  return (
    <div className='flex'>
        <div className='flex-item'>
            {pos}&nbsp;{name}
        </div>
        <div className='flex-item'>
            <button className='btn' onClick={()=>removeThisUser(pos)}>🗑️</button>
        </div>
    </div>
  )
}

export default NameComponent