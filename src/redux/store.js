import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import userReducer from './userDuck'
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
    user:userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Crea el archivo y lo devuelve porque lo vamos a necesitar en otro archivo
// Dentro de generateStore podemos tener más de una configuración.
// PE: Un sore sin enl composeEnhancers para producción
export default function generateStore() {
    let store = createStore(rootReducer, 
        composeEnhancers(applyMiddleware(thunk))
    )
    return store
}