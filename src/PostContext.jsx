import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PostContext = createContext();

const postReducer = (state, action) => {
    switch(action.type){
        case 'ADD_POST': 
            return [...state, action.payload];
        case 'REMOVE_POST':
            return state.filter((post, index) => index !== action.payload);
        default:
            return state;
    }
}

export const PostProvider = ({children}) => {
    const [posts, dispatch] = useReducer(postReducer,  [] )
    return(
        <PostContext.Provider value={{posts, dispatch}}>
            {children}
        </PostContext.Provider>
    )
}