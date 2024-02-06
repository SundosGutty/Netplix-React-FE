import { userService } from '../../services/user.service'

const INITIAL_STATE = {
    users: [],
    loggedinUser: userService.getLoggedinUser()
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_USER':
            return {
                ...state,
                loggedinUser: action.user
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.user],
                loggedinUser: action.user
            }
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => {
                    if (action.user._id === user._id) return action.user
                    return user;
                })
            }
        default:
            return state
    }
}