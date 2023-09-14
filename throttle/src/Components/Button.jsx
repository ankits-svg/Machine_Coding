import React, { useEffect, useState } from 'react'
import { useThrottle } from './hooks/useThrottle'
import './Button.css'; // Import your CSS file

const Button = () => {
    const [click, setClick] = useState(0)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (isButtonDisabled) {
            const timeoutId = setTimeout(() => {
                setIsButtonDisabled(false);
            }, 3000);
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isButtonDisabled]);

    const handleClick = useThrottle(() => {
        console.log("ankit")
        setClick(click + 1)
        setIsButtonDisabled(true);
    }, 3000)

    return (
        <div className="button-container"> {/* Apply a CSS class */}
            <p>Click Me: {click}</p>
            <button onClick={handleClick} disabled={isButtonDisabled}>Click me</button>
        </div>
    )
}

export default Button
