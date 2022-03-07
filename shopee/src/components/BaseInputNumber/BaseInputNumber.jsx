import React from 'react'
import PropTypes from 'prop-types'

export default function BaseInputNumber({ onChange, value, onBlur, ...props }) {
    const handleChange = event => {
        const val = event.target.value

        if ((/^\d+$/.test(val) || val === '') && onChange) {
            onChange(val)
        }
    }

    const handleBlur = event => {
        const val = event.target.value
        onBlur && onBlur(val)
    }

    return <input type='text' onChange={handleChange} value={value} onBlur={handleBlur} {...props} />
}

BaseInputNumber.prototype = {
    onChange: PropTypes.func,
    value: PropTypes.string,
    onBlur: PropTypes.func
}
