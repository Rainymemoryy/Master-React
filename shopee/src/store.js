import { configureStore } from '@reduxjs/toolkit'
import appReducer from './app.slice'
import authReducer from './pages/Auth/auth.slice'

const rootReducer = {
    auth: authReducer,
    app: appReducer
}

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware => [...getDefaultMiddleware({ serializableCheck: false })]
})

export default store
