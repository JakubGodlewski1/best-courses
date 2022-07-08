import {useCallback, useEffect, useState} from "react";


export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(
        async () => {
            try{
                setError(null)
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
                setIsPending(false)

            }catch (err){
                setError(err.message)
                setIsPending(false)
            }
        } ,[url]
    )


   useEffect(()=>{
       fetchData()
   },[url, fetchData])



    return {data, isPending, error}
}