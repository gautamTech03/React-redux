import { useState } from 'react'
function Count({value}) {
    const [count, setCount] = useState(9)
    return (
        <>
            <div className="mt-4 inline-block px-4 py-2 border-2 border-indigo-600 rounded text-xl font-semibold text-indigo-700 bg-indigo-100">
                {value}
            </div>
        </>
    )


}

export default Count