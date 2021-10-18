import {CHARACTER_URL} from "../consts/Api";

export const generateQueryCharacters = (page, filter) => {
    const url = CHARACTER_URL
    const pageQuery = `?page=${page}`
    const filterQuery = []

    for (let key in filter) {
        if (filter[key]) {
            filterQuery.push(`&${key}=${filter[key]}`)
        }
    }

    return url + pageQuery + filterQuery.join('')
}