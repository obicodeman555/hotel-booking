import * as actionType from "./actionTypes"

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case actionType.LogInUser:
            return { ...state, ...action.payload }

        case actionType.LogOutUser:
            return action.payload


        default: return state
    }
}

