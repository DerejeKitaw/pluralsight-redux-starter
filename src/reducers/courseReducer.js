export default function courseReducer(state = [], sction) {
    switch (action.type) {
        case 'CREATE_COURSE':
            // state.push(action.course);
            // return state;
            return [...state,
            Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}