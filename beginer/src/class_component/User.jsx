import React, { useMemo, useState } from 'react'
import Userprofile from './Userprofile'

export default function User() {
    const [count, setCount] = useState(0)
    const profile = useMemo(() => {
        console.log('Cre')
        return {
            name: 'Khang',
            age: count
        }
    }, [count])
    console.log('User')

    return (
        <div>
            <div>User</div>
            <button onClick={() => setCount(pre => pre + 1)}>Change count ({count})</button>
            <Userprofile data={count} profile={profile} />
        </div>
    )
}
