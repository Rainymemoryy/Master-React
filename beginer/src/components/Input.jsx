import React from 'react'

import PropTypes from 'prop-types'

export default function Input({ type = 'text', onChange, value, ...props }) {
    const handleChange = event => {
        const val = event.target.value
        if (type === 'number') {
            if (/^\d+$/.test(val) || val === '') {
                onChange(val)
            }
        } else {
            onChange(val)
        }
    }
    return <input type={type === 'number' ? 'text' : type} value={value} onChange={handleChange} {...props} />
}

Input.prototype = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.number.isRequired,
    type: PropTypes.string
}
