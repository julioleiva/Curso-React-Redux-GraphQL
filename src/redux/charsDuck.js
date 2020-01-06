import axios from "axios";


// constants
let initialData = {
    fetching: false,
    array: [],
    current: {}
}

let URL = "https://rickandmortyapi.com/api/character"

let GET_CHARACTERS = "GET_CHARACTERS"
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS"
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR"

// reducer
// Cuando es llamado por primera vez se contruye a partir de lo que el reducer devuelve
export default function reducer(state = initialData, action) {
    switch (action.type) {
        case GET_CHARACTERS:
        case GET_CHARACTERS_ERROR:
        case GET_CHARACTERS_SUCCESS:
            return {...state, array: action.payload}
        default:
            return state
    }
}

// actions [creators] (thunk: todo lo que tiene que ver con promesas)
// fuynción que devuelve otra función
export let getCharactersAction = () => (dispatch, getState) => {
    return axios.get(URL)
        .then(res => {
            dispatch({
                type: GET_CHARACTERS_SUCCESS,
                payload: res.data.results
            })
        })
}