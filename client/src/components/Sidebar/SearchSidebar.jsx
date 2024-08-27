import React from 'react'

export default function SearchSidebar() {
    return (
        <>
            <form className='flex items-center gap-2 p-4'>
                <input
                    className='input input-bordered rounded-full bg-gray-200 text-gray-800'
                    type="text"
                    placeholder='Search...'
                />

            </form>
        </>
    )
};