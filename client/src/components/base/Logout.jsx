import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";

import useLogout from '../../hooks/useLogout';

export default function Logout() {
    const { loading, logout } = useLogout();

    return (
        <div className='mt-auto m-1'>

            {!loading ? (
                <BiLogOutCircle
                    onClick={logout}

                    className='w-7 h-7 text-white cursor-pointer'
                />
            ) : (
                <span className='loading loading-spinner'></span>
            )}

        </div>
    )
};