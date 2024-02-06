import { httpService } from './http.service'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getById,
    update,
    isAuth,
    checkProfile,
    checkGoogleProfile
}

const STORAGE_KEY = 'loggedinUser'

async function login(userCerd) {
    const user = await httpService.post(`auth/login`, userCerd);
    return _handleLoggedinUser(user);
}

async function signup(userCerd) {
    const user = await httpService.post(`auth/signup`, userCerd);
    return _handleLoggedinUser(user);
}


function _handleLoggedinUser(user) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    return user;
}

async function checkProfile(email) {
    const users = await getUsers()
    const res = users.some((user) => user.emailAddress === email)
    return res
}

async function checkGoogleProfile(email) {
    const users = await getUsers()
    const user = users.filter((user) => user.emailAddress === email)
    return user[0].password
}


function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || null)
}

function isAuth() {
    // getLoggedinUser() ? true : false
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY)
    return await httpService.post('auth/logout')
}


async function getUsers() {
    const users = await httpService.get(`user`)
    return users
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)
    return user;
}

async function update(user) {
    const newUser = await httpService.put(`user/${user._id}`, user)
    if (getLoggedinUser()._id === user._id) _handleLoggedinUser(newUser)
    return newUser;
}








