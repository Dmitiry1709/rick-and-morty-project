export const generateRequestUrl = (url, page, filter) => {
    const pageQuery = `?page=${page}`
    const filterQuery = []

    for (let key in filter) {
        if (filter[key]) {
            filterQuery.push(`&${key}=${filter[key]}`)
        }
    }

    return url + pageQuery + filterQuery.join('')
}