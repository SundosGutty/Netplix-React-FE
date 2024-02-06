import { userService } from "../../services/user.service";

export function loadUsers() {
  return async dispatch => {
    const users = await userService.getUsers()
    dispatch({ type: 'SET_USERS', users });
    return users;
  };
}

export function loadUser() {
  return async dispatch => {
    const user = await userService.getLoggedinUser()
    dispatch({ type: 'SET_USER', user })
  }
}

export function login(userCreds) {
  return async dispatch => {
    const user = await userService.login(userCreds)
    dispatch({ type: 'SET_USER', user });
    return user;
  }
}

export function logout() {
  return async dispatch => {
    await userService.logout();
    const user = userService.getLoggedinUser();
    dispatch({ type: 'SET_USER', user });
  }
}

export function signup(userCreds) {
  return async dispatch => {
    const user = await userService.signup(userCreds)
    dispatch({ type: 'SET_USER', user })
  }
}


export function updateUser(currUser) {
  return async (dispatch) => {
    try {
      const user = await userService.update(currUser);
      dispatch({ type: 'SET_USER', user });
    } catch (err) {
      console.log(err);
    }
  };
}

