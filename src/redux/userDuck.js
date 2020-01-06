// constants
let initialState = {
    leggedIn: false,
}
let LOGIN = "LOGIN"

//reducer
// Es como un observable
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:            
            break;
        default:
            return state;
    }
}


// action (action creator)