import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { path } from 'src/constants/path'
import { unauthorize } from 'src/pages/Auth/auth.slice'

export default function Authorization() {
    const status = useSelector(state => state.app.status)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (status === 401) {
            dispatch(unauthorize())
            navigate(path.login)
        }
    }, [status, dispatch, navigate])
    return null
}
