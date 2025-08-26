const INITIAL_STATE = { count: 0, mood: '( ʘ̅ ͜ʖʘ̅ )'}

const countMoodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count -1}
        case 'MULTIPLY':
            return {...state, count: state.count * action.payload}
        case 'RESET':
            return {...state, count: 0}
        case 'HAPPY':
            return {...state, mood: 'ヽ(ヅ)ノ'}
        case 'ANGRY':
            return {...state, mood: 'ಠ╭╮ಠ'}
        case 'SAD':
            return {...state, mood: 'ಥ_ಥ'}
        case 'CONFUSED':
            return {...state, mood: 'ↂ_ↂ'}                                    
        default:
            return state
    }
    return state;
}

const store = Redux.createStore(countMoodReducer);
// goes in the console:
// store.dispatch({ type: 'INCREMENT' });
// store.getState()