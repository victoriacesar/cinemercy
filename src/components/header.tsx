'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import UserMenu from './user-menu';

export default function Header() {
  return (
    <div className="w-full h-16 bg-white px-14 py-3 flex-shrink-0 border-[3px] border-gray-200">
      <div className="h-full flex items-center justify-between">
        <h1 className="font-[Poppins] font-bold text-sm text-purple-500 uppercase w-1/3">
          Cine Mercy
        </h1>
        <div className="bg-gray-100 w-1/3 px-3 py-2 rounded-md flex items-center gap-2 border border-transparent hover:border-purple-200">
          <MagnifyingGlassIcon className="size-4 text-gray-400" />
          <input
            placeholder="Search..."
            className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm focus:outline-none w-full"
          />
        </div>
        <div className="w-1/3 flex justify-end">
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
