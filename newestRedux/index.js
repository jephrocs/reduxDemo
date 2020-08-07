const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const SELL_CAKE = 'SELL_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action - oject with a 'type' property. Action creator - function that returns an action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function sellCake() {
    return {
        type: SELL_CAKE,
        info: 'Second redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'third redux action'
    }
}

// (previousState, action) => newState


// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
//     rep: 0
// }

const initialCakeState = {
    numOfCakes: 10,
    rep : 0
}

const initialIceCreamState = {
    numOfIceCreams: 20,
    rep: 0
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {

//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case SELL_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes + 10,
//             rep: state.rep + 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1,
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {

        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case SELL_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes + 10,
            rep: state.rep + 1
        }

        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {

        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1,
        }
        default: return state
    }
}

//hold app state
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)
console.log('Initial state', store.getState())

//subscribe to changes in the store
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(sellCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

//unsub to the store 
unsubscribe()



