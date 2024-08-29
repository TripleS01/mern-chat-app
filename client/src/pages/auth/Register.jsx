import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CheckboxRegister from './checkboxRegister'
import PathTo from '../../paths'

import useRegister from '../../hooks/useRegister';

export default function Register() {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    repeatPassword: '',
    gender: '',
  });
  const { loading, register } = useRegister();

  function handleCheckbox(gender) {
    setInputs({ ...inputs, gender })
  };

  async function onRegister(event) {
    event.preventDefault();
    await register(inputs);
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-300'>
          <h1 className='text-3xl font-semibold text-center text-gray-200'>
            Sign Up
          </h1>

          <form onSubmit={onRegister}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-gray-200'>Username:</span>
              </label>
              <input
                value={inputs.username}
                onChange={(event) => setInputs({ ...inputs, username: event.target.value })}

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
                value={inputs.password}
                onChange={(event) => setInputs({ ...inputs, password: event.target.value })}

                className='w-full input input-bordered h-10 bg-gray-200 placeholder-gray-400 text-gray-800'
                type="password"
                placeholder='Enter password'
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text text-gray-200'>Confirm Password:</span>
              </label>
              <input
                value={inputs.repeatPassword}
                onChange={(event) => setInputs({ ...inputs, repeatPassword: event.target.value })}

                className='w-full input input-bordered h-10 bg-gray-200 placeholder-gray-400 text-gray-800'
                type="password"
                placeholder='Enter confirm password'
              />
            </div>

            <CheckboxRegister
              onCheckboxChange={handleCheckbox}
              selectGender={inputs.gender}
            />

            <Link className='hover:text-yellow-500 mt-2 inline-block text-gray-200'
              to={PathTo.Login}>
              Already have an account?
            </Link>

            <div>
              <button
                disabled={loading}

                className='btn border-0 btn-block btn-sm text-lg mt-2 bg-gray-200 hover:bg-gray-500 hover:text-gray-800'
              >

                {loading ?
                  <span className='loading loading-spinner'></span>
                  :
                  "Register"
                }

              </button>
            </div>

          </form>

        </div>
      </div >
    </>
  )
};