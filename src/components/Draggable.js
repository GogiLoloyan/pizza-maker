import React, { forwardRef, createContext } from 'react'

const Draggable = forwardRef((_, ref) => {
	return <div className='draggable' ref={ref}></div>
})

export default Draggable
export const DragContext = createContext()
