
const initialState = []; 

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
    
 case 'REMOVE_FROM_FAVORITES':
            return state.filter((fav) => fav !== action.payload);
        case 'ADD_TO_FAVORITES':
          
        return [...state, action.payload];
        
       
        default:
            return state;
    }
};

export default favoritesReducer;
