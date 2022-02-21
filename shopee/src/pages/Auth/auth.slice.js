import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authApi from 'src/api/auth.api'
import LocalStorage from 'src/constants/localStorage'
import { payloadCreator } from 'src/untils/helper'

export const register = createAsyncThunk('auth/register', payloadCreator(authApi.register))
export const login = createAsyncThunk('auth/login', payloadCreator(authApi.login))

const handleAuthFulfilled = (state, action) => {
    state.profile = action.payload.data
    localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile))
}

const auth = createSlice({
    name: 'auth',
    initialState: { profile: localStorage.getItem(LocalStorage.user) || {} },
    extraReducers: {
        [register.fulfilled]: handleAuthFulfilled,
        [login.fulfilled]: handleAuthFulfilled
    }
})

const authReducer = auth.reducer
export default authReducer
