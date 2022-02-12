import React from 'react'
import { Message } from './errorMessage.style'
import PropsTypes from 'prop-types'

export default function ErrorMessage({ errors, name }) {
    const error = errors[name]
    return <Message>{error && error.message}</Message>
}

ErrorMessage.propsTypes = {
    errors: PropsTypes.object,
    name: PropsTypes.string
}
