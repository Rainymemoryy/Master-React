import React, { memo } from 'react'
import './content.css'
function Content(props) {
    console.log('content', props)
    return (
        <div className='content'>
            <h2>Content</h2>

            <button onClick={props.onIncrease}>Content click</button>
        </div>
    )
}

export default memo(Content)
