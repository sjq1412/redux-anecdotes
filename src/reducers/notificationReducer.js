import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: "notification",
    initialState: "",
    reducers: {
        createNotification(state, action) {
            const notification = action.payload
            return notification
        },
        clearNotification(state, action) {
            return ""
        }
    }
})

export const { createNotification, clearNotification } = notificationSlice.actions

export const setNotification = (message, durationInSeconds) => {
    console.log(durationInSeconds);
    return async (dispatch) => {
      dispatch(createNotification(message))

      setTimeout(() => {
        dispatch(clearNotification())
      }, durationInSeconds * 1000);
    }
  } 

export default notificationSlice.reducer