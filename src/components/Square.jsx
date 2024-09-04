import React from 'react'

const Square = ({state,onClick}) => {
  return (
    <div className={` ${state=='X'? 'text-red-700': 'text-green-500'} h-20 w-20 flex justify-center items-center bg-blue-500 text m-1 font-semibold text-3xl`} onClick={onClick} >
        {state}
    </div>
  )
}

export default Square