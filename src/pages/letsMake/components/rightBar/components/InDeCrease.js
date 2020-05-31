import React from 'react'

const InDeCrease = ({ increase, decrease }) => {
	return (
		<div className='btns--wrapper'>
			<button onClick={increase} className='btn-small btn-crease'>
				<span className='icon'>+</span>
			</button>
			<button onClick={decrease} className='btn-small btn-crease btn-clr-red'>
				<span className='icon'>-</span>
			</button>
		</div>
	)
}

export default InDeCrease
