import { userActionType } from "./UserType"
export const setCurrentUser = user =>({
    type : userActionType.SET_CURRENT_USER,
    payload:user
})