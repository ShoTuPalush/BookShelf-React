import { SvgIconAngleDown, SvgIconAngleTop, SvgIconIconTrident } from '../SvgIcon/SvgIcon';
import { useState } from 'react';
import json from './SupportUkraine.json';
import { nanoid } from '@reduxjs/toolkit';
import { SupportUkraineImage } from '../SupportUkraineImage/SupportUkraineImage';

export const SupportUkraine = () => {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <>
      <div className="mb-10 ml-auto mr-auto md:mx-0 lg:ml-5 bg-[#4F2EE8] bg-gradient-to-b from-indigo-600 to-indigo-300 rounded-2xl py-6 px-10 h-472 w-337">
        <div className="flex items-center gap-3 mb-10">
          <h2 className=" text-white font-bold text-2xl ">Support Ukraine</h2>
          <SvgIconIconTrident />
        </div>
        <div className="mb-6 overflow-hidden h-[292px]">
          <ul className={dropMenu ? 'transition-all duration-700 -translate-y-[156px]' : 'transition-all duration-700'}>
            {json.map((item) => (
              <li key={nanoid()}>
                <a
                  className="flex items-center gap-4 mb-5 text-white h-8"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url}
                >
                  <p>{item.index}</p>
                  <SupportUkraineImage name={item.title} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setDropMenu(!dropMenu)}
            className="h-10 w-10 bg-white rounded-full flex items-center justify-center cursor-pointer"
          >
            {dropMenu ? <SvgIconAngleTop /> : <SvgIconAngleDown />}
          </button>
        </div>
      </div>
    </>
  );
};
