import {decrease_number, increase_number} from "../actions/actions";

const initialState = {
    num : 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case action.type = increase_number:
            return {
                ...state,
                num: state.num +1
            }

        case action.type = decrease_number:
            return {
                ...state,
                num: state.num - 1
            }
        default:
            return state;
    }
}