import axios from "axios";

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})


export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))

    axios.get(`http://localhost:3000/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy}&_order=desc`)
        .then(({data}) => {
            dispatch(setItems(data))
        })
}

export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items
})
