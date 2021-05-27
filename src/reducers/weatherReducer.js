import initialState from './initialState';
export default function weatherReducer(state = initialState, action) {
    if (action.type === "GET_WEATHER") {
        return { ...state, city: action.payload }
    }
    return state;
}