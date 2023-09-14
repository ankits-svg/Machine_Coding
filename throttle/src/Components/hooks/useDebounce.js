import React, { useEffect, useState } from "react";

export const useDebounce=(value,delay)=>{

    const [debouncedvalue,setDebouncedvalue]=useState(value)

    useEffect(()=>{
        const clearid=setTimeout(() => {
            setDebouncedvalue(value)
        }, delay);

        return ()=>{
            clearTimeout(clearid)
        }
    },[value,delay])

    return debouncedvalue;

}

