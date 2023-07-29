import React from 'react'
import { useState, useEffect } from 'react'

function useAPI(url) {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    useEffect(()=>{
        async function fetchData()
        {
            try
            {
                const info = await fetch(url)
                const response = await info.json()
                setData(response)
            }
            catch(error)
            {
                setError(error);
            }
            setLoading(false);
        }
        fetchData()
    },[url]);

  return({data,loading,error})
}

export default useAPI