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
export default notificationSlice.reducer