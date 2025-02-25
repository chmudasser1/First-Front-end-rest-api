import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createuser } from '../features/userdetailSlice';

const CreateData = () => {
    const [first_name, setfirst_name] = useState();
    const [last_name, setlast_name] = useState();
    const [email, setemail] = useState();
    const [gender, setgender] = useState();
    const [job_title, setjob_title] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const SubmitData = (e) => {
        e.preventDefault();

        const newdata = {
            first_name,
            last_name,
            email,
            gender,
            job_title,
        }
        if (!first_name || !last_name || !email || !gender || !job_title) {
            alert("All fields are required!");
            return;
        }
        dispatch(createuser(newdata));
        navigate("/")
    }

    return (
        <div className='bg-gradient-to-br from-red-500 via-orange-700 to-amber-800'>
            <div className='mx-auto container px-4   '>
                <div className='flex justify-center items-center w-full h-screen '>
                    <div className='w-[400px] border-gray-600  border-2 bg-gradient-to-br from-red-200 via-orange-300 to-amber-300'>
                        <div className='text-center '>
                            <h1 className='text-6xl font-bold text-gray-700 border-gray-600  border-b-2 '>Create Data</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center text-center my-4'>
                            <label htmlFor="FirstName">First Name</label>
                            <input type="text" id="FirstName" className="mb-2 border w-60 border-black rounded-lg"
                                onChange={(e) => setfirst_name(e.target.value)}
                            />
                            <label htmlFor="LastName">Last Name</label>
                            <input type="text" id="LastName" className="mb-2 border w-60 border-black rounded-lg"
                                onChange={(e) => setlast_name(e.target.value)}
                            />
                            <label htmlFor="Email">Email</label>
                            <input type="email" id="Email" required className="mb-2 border w-60 border-black rounded-lg"
                                onChange={(e) => setemail(e.target.value)}
                            />
                            <label htmlFor="Gender">Gender</label>
                            <input type="gender" id="Gender" required className="mb-2 border w-60 border-black rounded-lg"
                                onChange={(e) => setgender(e.target.value)}
                            />
                            <label htmlFor="JobTitle">JobTitle</label>
                            <input type="jobTitle" id="JobTitle" required className="mb-2 border w-60 border-black rounded-lg"
                                onChange={(e) => setjob_title(e.target.value)}
                            />
                            <button className='bg-green-500 text-3xl px-4 py-1 rounded-xl mt-3 ' onClick={SubmitData}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateData
