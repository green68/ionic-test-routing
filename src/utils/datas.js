

export const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user")) 
    return user
}

export const setUser = (username, password, token) => {
    let user = {
        username: username,
        password: password,
        token: token
    }
    localStorage.setItem("user", JSON.stringify(user))
}

export const removeUser = () => {
    localStorage.clear()
}