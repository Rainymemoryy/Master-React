import { createAsyncThunk } from '@reduxjs/toolkit'
import categoryApi from 'src/api/category.api'
import { payloadCreator } from 'src/untils/helper'

export const getCategories = createAsyncThunk('home/getCategories', payloadCreator(categoryApi.getCategories))
