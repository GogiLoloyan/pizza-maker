import React from 'react'

const History = ({ history }) => {
	return <p className='menu-history'>{history.join(' / ')}</p>
}

export default History
