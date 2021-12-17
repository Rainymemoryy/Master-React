import React, { useState } from 'react'

export default function Product(props) {
    // console.log({ ...props })
    // console.log(props.data)

    const [check, setCheck] = useState(true)
    const [test1, setTest1] = useState(['1', '2', '3'])

    const handleClick = () => {
        setCheck(pre => !pre)
        setTest1(pre => [...pre, '5'])
        console.log(test1)
    }
    return (
        <div>
            {check && props.data.map(e => <p key={e}>{e}</p>)}
            <div>
                <button onClick={handleClick}>toggle</button>
            </div>
        </div>
    )
}
