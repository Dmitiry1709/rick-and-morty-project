export const afterObserver = (state, action) => {
    const items = [...state.items, ...action.data.results]

    return {
        ...state,
        info: action.data.info,
        items: items
    }
}