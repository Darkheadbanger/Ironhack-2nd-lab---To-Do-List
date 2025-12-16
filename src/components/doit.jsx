import React from 'react'

function DoIt() {
  return (
    <div className="add-form">
        <input type="text" placeholder='What will you do ?' id='add_text' className="add_input" />
        <input type="datetime-local" id='add_time' className="add_input" />
        <input type="time" id='add_date' className="add_input" />
        <button className='addButton'>
            Add here
        </button>
    </div>
  )
}

export default DoIt