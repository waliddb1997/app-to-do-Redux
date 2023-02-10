import { configureStore } from '@reduxjs/toolkit'
import taskreducer from "./taskSlice/TaskSlice"
export const store = configureStore({
  reducer: {task:taskreducer},
})