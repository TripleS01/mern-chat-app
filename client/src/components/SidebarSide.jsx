import React from 'react';

import Search from './base/Search';
import Conversations from './base/Conversations';

import Logout from './base/Logout';

export default function Sidebar() {

  return (
    <>
      <div className='border-r-2 flex-col flex border-slate-300'>

        <Search />

        <div className='divider ml-2 my-0 py-0 h-0.5 bg-gray-300'></div>

        <Conversations />

        <Logout />

      </div>
    </>
  )
};