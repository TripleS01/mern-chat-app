import { BiLogOutCircle } from "react-icons/bi";

import Search from './base/Search';
import Conversations from './base/Conversations';

import useLogout from '../hooks/useLogout';

export default function Sidebar() {
  const { loading, logout } = useLogout();

  return (
    <>
      <div className='border-r-2 flex-col flex border-slate-300'>

        <Search />

        <div className='divider ml-2 my-0 py-0 h-0.5 bg-gray-300'></div>

        <Conversations />

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

      </div>
    </>
  )
};