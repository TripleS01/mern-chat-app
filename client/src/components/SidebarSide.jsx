import React, { useState } from 'react';

import Search from './base/Search';
import Conversations from './base/Conversations';

import Logout from './base/Logout';

export default function Sidebar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className='border-r-2 flex-col flex border-slate-300'>

        <Search setSearchQuery={setSearchQuery} />

        <div className='divider ml-2 my-0 py-0 h-0.5 bg-gray-300'></div>

        <Conversations tions searchQuery={searchQuery} />

        <Logout />

      </div>
    </>
  )
};