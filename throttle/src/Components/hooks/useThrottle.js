import React, { useState } from "react";

export const useThrottle=(callback,delay)=>{
    const [isthrot,setIsthrot]=useState(false)

    const throttlecallback=(...args)=>{
        if(!isthrot){
            callback(...args)
            setIsthrot(true)

            setTimeout(()=>{
                setIsthrot(false)
            },delay)
        }
    }

    return throttlecallback;
}