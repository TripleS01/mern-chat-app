import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";


export default function SearchSidebar({
    setSearchQuery
}) {
    const [query, setQuery] = useState('');

    async function onSearch(event) {
        event.preventDefault();
        setSearchQuery(query.trim());

    };

    return (
        <>
            <form
                onSubmit={onSearch}
                className='flex items-center gap-2 p-4'
            >

                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}

                    className='input input-bordered rounded-full bg-gray-200 text-gray-800'
                    type="text"
                    placeholder='Search...'
                />

                <button className='btn btn-circle bg-gray-200 hover:bg-gray-500 hover:text-gray-800 border-0'>
                    <IoSearchSharp className='w-6 h-6 outline-none' />
                </button>

            </form>
        </>
    )
};