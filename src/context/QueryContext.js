import {createContext, useState} from "react";

export const QueryContext = createContext()

export const QueryProvider = ({children}) => {
    const [query, setQuery] = useState("")

    const changeQuery = (newQuery) =>{
        setQuery(newQuery)
    }

    return <QueryContext.Provider value={{query, changeQuery}}>
        {children}
    </QueryContext.Provider>
}