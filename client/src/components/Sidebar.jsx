import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";

import SearchSidebar from './Sidebar/SearchSidebar'
import ConversationsSidebar from './Sidebar/ConversationsSidebar'

export default function Sidebar() {
  return (
    <>
      <div className='border-r-2 flex-col flex border-slate-300'>
        <SearchSidebar />

        <div className='divider mx-1 my-0 py-0 h-0.5 bg-gray-300'></div>

        <ConversationsSidebar />

        <div className='mt-auto m-1'>
          <BiLogOutCircle className='w-7 h-7 text-white cursor-pointer' />
        </div>

      </div>
    </>
  )
};