import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";

const ShowingBackenddata = () => {
    const [drawer, setdrawer] = useState(false)
    const [drawer1, setdrawer1] = useState(false)
    const [drawer2, setdrawer2] = useState(false)
    const handledarwer = () => {
        setdrawer(!drawer)
    }
    const handledarwer1 = () => {
        setdrawer1(!drawer1)
    }
    const handledarwer2 = () => {
        setdrawer2(!drawer2)
    }
    

    return (
        <div className='flex justify-between pt-24 px-44'>
            <div>
                <button><IoIosMenu onClick={handledarwer} />
                </button>
                {drawer && <h1>WOWWOWOWOWOWWO</h1>}
            </div>
            <div>
                <button><IoIosMenu onClick={handledarwer1} />
                </button>
                {drawer1 && <h1>Greate</h1>}
            </div>
            <div>
                <button><IoIosMenu onClick={handledarwer2} />
                </button>
                {drawer2 && <h1>Nice</h1>}
            </div>
        </div>
    )
}

export default ShowingBackenddata
