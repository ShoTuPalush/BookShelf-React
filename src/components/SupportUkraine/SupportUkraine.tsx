import { SvgIconAngleDown, SvgIconAngleTop, SvgIconIconTrident } from '../SvgIcon/SvgIcon';
import save from './save.png';
import hope from './hope.png';
import madicans from './medecins.png';
import razom from './razom.png';
import action from './action.png';
import sergey from './sergey.png';
import international from './international.png';
import world from './world.png';
import united from './united.png';
import { useState } from 'react';

export const SupportUkraine = () => {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <>
      <div className=" mb-10 ml-auto mr-auto md:mx-0 lg:ml-5 bg-[#4F2EE8] bg-gradient-to-b from-indigo-600 to-indigo-300 rounded-2xl py-6 px-10 h-472 w-337">
        <div className="flex items-center gap-3 mb-10">
          <h2 className=" text-white font-bold text-2xl ">Support Ukraine</h2>
          <SvgIconIconTrident />
        </div>
        <div>
          <ul className="mb-6">
            <li className={dropMenu ? 'hidden' : 'block'}>
              <a
                className="flex items-center gap-4 mb-5 text-white h-8"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis"
              >
                <span>01</span>
                <img className=" brightness-0 invert h-8" src={save} alt="" />
              </a>
            </li>
            <li className={dropMenu ? 'hidden' : 'block'}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-5 text-white h-8"
                href="https://www.projecthope.org/country/ukraine"
              >
                <span>02</span>
                <img className=" brightness-0 invert h-8" src={hope} alt="" />
              </a>
            </li>
            <li className={dropMenu ? 'hidden' : 'block'}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-5 text-white h-8"
                href="https://www.msf.org/ukraine"
              >
                <span>03</span>
                <img className=" brightness-0 invert h-8" src={madicans} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-5 text-white h-8"
                href="https://www.razomforukraine.org/"
              >
                <span>04</span>
                <img className=" brightness-0 invert h-8" src={razom} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-5 text-white h-8"
                href="https://www.actionagainsthunger.org/location/europe/ukraine"
              >
                <span>05</span>
                <img className=" brightness-0 invert h-8" src={action} alt="" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-5 text-white h-8"
                href="https://prytulafoundation.org/en"
              >
                <span>06</span>
                <img className=" brightness-0 invert h-8" src={sergey} alt="" />
              </a>
            </li>
            <li className={dropMenu ? 'block' : 'hidden'}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-5 text-white h-8"
                href="https://internationalmedicalcorps.org/country/ukraine/"
              >
                <span>07</span>
                <img className=" brightness-0 invert h-8" src={international} alt="" />
              </a>
            </li>
            <li className={dropMenu ? 'block' : 'hidden'}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 mb-5 text-white h-8"
                href="https://www.wvi.org/emergencies/ukraine"
              >
                <span>08</span>
                <img className=" brightness-0 invert h-8" src={world} alt="" />
              </a>
            </li>
            <li className={dropMenu ? 'block' : 'hidden'}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white h-8"
                href="https://u24.gov.ua/uk"
              >
                <span>09</span>
                <img className=" brightness-0 invert h-8" src={united} alt="" />
              </a>
            </li>
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
