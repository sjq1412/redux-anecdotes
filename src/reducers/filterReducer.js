 const filterReducer = (state = "", action) => {
    console.log("ACTION:", action)
    
    if (action.type === "FILTER") {
        return action.payload
    }
    return state
 }

export const changeFilter = filter => {
    return {
        type: "FILTER",
        payload: filter
    }
 }

 export default filterReducer