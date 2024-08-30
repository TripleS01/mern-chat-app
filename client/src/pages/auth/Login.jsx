import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PathTo from '../../paths';
import useLogin from '../../hooks/useLogin';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loading, login } = useLogin();

    async function onLogin(event) {
        event.preventDefault();
        await login(username, password);

    };

    return (
        <>
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

                <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-300'>
                    <h1 className='text-3xl font-semibold text-center text-gray-200'>
                        Sign In
                    </h1>

                    <form onSubmit={onLogin}>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text text-gray-200'>Username:</span>
                            </label>
                            
                            <input
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}

                                className='w-full input input-bordered h-10 bg-gray-200 placeholder-gray-400 text-gray-800'
                                type="text"
                                placeholder='Enter username'
                            />
                        </div>

                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text text-gray-200'>Password:</span>
                            </label>

                            <input
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}

                                className='w-full input input-bordered h-10 bg-gray-200 placeholder-gray-400 text-gray-800'
                                type="password"
                                placeholder='Enter password'
                            />
                        </div>

                        <Link className='hover:text-yellow-500 mt-2 inline-block text-gray-200'
                            to={PathTo.Register}>
                            Don't have an account?
                        </Link>

                        <div>
                            <button
                                disabled={loading}

                                className='btn border-0 btn-block btn-sm text-lg mt-2 bg-gray-200 hover:bg-gray-500 hover:text-gray-800'
                            >

                                {loading ?
                                    <span className='loading loading-spinner'></span>
                                    :
                                    "Login"
                                }

                            </button>
                        </div>

                    </form>

                </div>

            </div >
        </>
    )
};