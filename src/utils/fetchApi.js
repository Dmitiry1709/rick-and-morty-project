import {SERVER_ERROR} from "../consts/messages"

export const fetchApi = (url, callback, options = {}) => {
    fetch(url, options)
        .then(res => res.json())
        .then(res => callback(res))
        .catch(() => console.log(SERVER_ERROR))
}