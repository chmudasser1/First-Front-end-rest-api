import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUSer } from '../features/userdetailSlice';
import { Link } from 'react-router-dom';

const ReadData = () => {
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.app);
    // const [data, setdata] = useState();

    useEffect(() => {
        dispatch(showUSer());
    }, [])

    if (loading) {
        return <h1 className='h-screen text-6xl text-red-700  flex justify-center items-center '>Loading...</h1>
    }
    return (
        <div className='container mx-auto pt-4 bg-gradient-to-tr from-slate-400 via-gray-400 to-zinc-400'>
            <div className='grid grid-cols-4 gap-6'>
                {users ? users.map((user, index) => (
                    <div key={user._id} className='border-2 px-2 py-2 border-blue-950 '>
                        {/* <h1 className='text-2xl text-blue-600 text-center border-b-2 border-black'>{user.id}</h1> */}
                        <h1 className='pt-2 text-lg'>First-Name: {user.first_name}</h1>
                        <h1 className='pt-2 text-lg'>Last-Name: {user.last_name}</h1>
                        <h1 className=' text-lg'>Email: {user.email}</h1>
                        <h1 className=' text-lg'>Gender: {user.gender}</h1>
                        {/* <h1 className=' text-lg'>Job_Title: {user.jobTitle}</h1> */}
                        {/* <h1 className=' text-lg'>Job-Title: {user.job-title}</h1> */}
                        <div className='gap-3 flex'>
                            <Link
                                to={`/edit/${user._id}`}
                            >
                                <button className='bg-green-300 text-lg px-2 py-1 rounded-lg'>Edit</button>
                            </Link>
                            <button
                                onClick={() => dispatch(deleteUser(user._id))}
                                className='bg-red-300 text-lg px-2 py-1 rounded-lg'>Delete</button>
                        </div>
                    </div>
                )) : <h1>Something is wrong!</h1>}
            </div>
        </div>
    )
}

export default ReadData
