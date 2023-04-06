import React, { useState } from 'react';
import { FaWindowClose, FaBars } from 'react-icons/fa';

export default function DrawerMenu() {
  const [hideDrawerMenu, setHideDrawerMenu] = useState(true);

  return (
    <>
      {!hideDrawerMenu ? (
        <FaWindowClose
          className="flex text-3xl text-white items-center cursor-pointer left-10 top-6 mr-6 z-50"
          onClick={() => setHideDrawerMenu(!hideDrawerMenu)}
        />
      ) : (
        <FaBars
          onClick={() => setHideDrawerMenu(!hideDrawerMenu)}
          className="text-3xl text-white z-30 flex items-center cursor-pointer left-10 top-6 mr-6"
        />
      )}

      <div
        className={`top-0 left-0 w-[75vw] bg-manaca pr-10 p-10 text-white fixed h-full z-40 shadow-2xl ease-in-out duration-300 ${
          hideDrawerMenu ? "translate-x-[-75vw]" : "translate-x-0"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white">Foo bar</h3>
      </div>
    </>
  )
}
