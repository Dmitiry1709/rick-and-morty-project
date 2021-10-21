import {SERVER_ERROR} from "../consts/messages"

export const fetchApi = (url, callback, options = {}) => {
    fetch(url, options)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(res => callback(res))
        .catch(() => console.log(SERVER_ERROR))
}