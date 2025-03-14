import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    // SIGN IN
    const [Email, setEmailSignIn] = useState('');
    const [Password, setPasswordSignIn] = useState('');
    const [signinError, setSigninError] = useState('');

    const navigate = useNavigate();


    const SubmitSignin = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Validate fields
        if (!Email || !Password) {
            setSigninError('All fields are required.');
            return;
        } else {
            setSigninError(''); // Clear error if validation passes
        }

        const checkuser = {
            Email,
            Password,
        };

        axios.post('http://localhost:8000/api/Login', checkuser, { withCredentials: true })
            .then(response => {
                if (response.data.msg === "Success") {
                    const sessionID = response.data.token;  
                    Cookies.set('uid', sessionID, { expires: 7 });
                    navigate('/home');
                    console.log("Sign-in successful, navigating to home.");
                } else {
                    // Handle case where sign-in is not successful
                    setSigninError('Invalid email or password.');
                }
            })
            .catch(error => {
                // Handle any errors that occurred during the request
                console.error("Error during sign-in:", error);
                setSigninError('An error occurred during sign-in. Please try again later.');
            });
    };


    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-200 to-indigo-200">
            <div className="bg-white rounded-3xl shadow-lg w-96 relative overflow-hidden">
                {/* Sign Up Form */}
                <div className="flex-1 p-8">
                    <h1 className="text-2xl font-semibold">Sign In</h1>
                    <span className="text-sm">or use your email password</span>
                    <form className="flex flex-col mt-4" onSubmit={SubmitSignin}>
                        <input onChange={(e) => setEmailSignIn(e.target.value)} type="email" placeholder="Email" className="p-2 border border-gray-300 rounded mb-2" />
                        <input onChange={(e) => setPasswordSignIn(e.target.value)} type="password" placeholder="Password" className="p-2 border border-gray-300 rounded mb-2" />
                        {signinError && <p className="text-red-500">{signinError}</p>} {/* Display signin error message */}
                        <a href="#" className="text-sm text-blue-500">Forget Your Password?</a>
                        <button type="submit" className="bg-indigo-600 text-white py-2 rounded mt-2 px-4 ">
                            Sign In
                        </button>
                        <Link
                            to={"/"}>
                            <h1 className='text-center  text-white bg-indigo-600 py-2 rounded mt-2 px-4'>Create Account.</h1>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;