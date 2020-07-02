import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer.js'
const initialState= {
    transactions : [
        {id: 1 , description: "Income 1" , transactionAmount : 1000},
        {id: 2 , description: "Expense 1" , transactionAmount : -500},
        {id: 3 , description: "Income 2" , transactionAmount : 2000},
        {id: 4 , description: "Expense 2" , transactionAmount : -1000}
    ]
}



export const GlobalContext = createContext(initialState);
    
export const GlobalProvider= ({children})=>{
    const [state] = useReducer(AppReducer, initialState);


    return(
        <GlobalContext.Provider value = {
            {
                transactions: state.transactions
            }
        
        }>
            {children}
        </GlobalContext.Provider>
    )

}
