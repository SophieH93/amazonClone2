export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':      
            return {
                ...state,
                basker: [...state.basket, action.item]
            };
        default:
            return state; 
    }
};

export default reducer;
