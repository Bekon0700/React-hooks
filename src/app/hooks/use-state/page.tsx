'use client'
import React, {useState} from 'react';

function Page() {
    const [countVal, setCountVal] = useState<number>(0)

    const handleInc = () => {
        setCountVal((prev) => prev + 1)
    }

    const handleDec = () => {
        setCountVal((prev) => prev - 1)
    }

    return (
        <>
            <p>Count is: {countVal}</p>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </>
    )
}

export default Page