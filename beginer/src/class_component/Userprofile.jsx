import React, { memo } from 'react'
const Userprofile = memo(
    props => {
        console.log('userprofile', props)

        return (
            <div>
                <div>User profile</div>
            </div>
        )
    },
    (pre, next) => {
        return pre.profile.name === next.profile.name && pre.profile.age === next.profile.age
    }
)

export default Userprofile
