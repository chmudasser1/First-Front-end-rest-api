import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createsignup } from '../features/userdetailSlice';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    // SIGN UP
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [signupError, setSignupError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SubmitSignup = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate fields
        if (!Name || !Email || !Password) {
            setSignupError('All fields are required.');
            return;
        } else {
            setSignupError(''); // Clear error if validation passes
        }

        const newUser = {
            Name,
            Email,
            Password,
        };
        console.log(newUser)
        dispatch(createsignup(newUser)); // Dispatch the signup action
        navigate("/Login")
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-indigo-200">
            <div className="bg-white rounded-3xl shadow-lg w-96 relative overflow-hidden">
                <div className="flex-1 p-8">
                    <h1 className="text-2xl font-semibold">Create Account</h1>
                    <span className="text-sm">or use your email for registration</span>
                    <form className="flex flex-col mt-4" >
                        <label>Name</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="p-2 border border-gray-300 rounded mb-2" />
                        <label>Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="p-2 border border-gray-300 rounded mb-2" />
                        <label>Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="p-2 border border-gray-300 rounded mb-2" />
                        {signupError && <p className="text-red-500">{signupError}</p>} {/* Display signup error message */}
                        <button
                            onClick={SubmitSignup}
                            type="submit" className="bg-indigo-600 text-white py-2 rounded mt-2 px-4" >
                            Submit
                        </button>
                        <Link
                            to={"/Login"}>
                            <h1 className='text-center  text-white bg-indigo-600 py-2 rounded mt-2 px-4'>I have already registered.</h1>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
