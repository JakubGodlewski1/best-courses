import {useContext} from "react";
import {QueryContext} from "../context/QueryContext";


export const useQueryContext = () => {
    const context = useContext(QueryContext)



    if (context === undefined){
        throw Error("context is outside context provider scope")
    }

    return context
}