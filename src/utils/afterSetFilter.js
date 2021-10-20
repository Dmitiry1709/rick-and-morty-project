export const afterSetFilter = (state, action) => {
    let prev = state.filter[action.filterName]
    let value = action.filterValue

    if (prev === value || (prev === undefined && value === '')) {
        return {...state}
    }

    let filter = {...state.filter}
    filter[action.filterName] = value

    return {...state, filter}
}