import { useState } from 'react';

export const SwitchTheme = () => {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <div>
        <span className="inline-block relative w-10 h-6">
          <label htmlFor="them-switch">
            <input className="opacity-0" id="them-switch" type="checkbox" />
            <span
              className="absolute inset-x-0 inset-y-0 bg-gradient-to-b from-indigo-800 to-blue-500 rounded-3xl cursor-pointer"
              onClick={() => setTheme(!theme)}
            >
              <span
                className={
                  theme
                    ? 'absolute h-5 w-5 left-4 bottom-0.5 bg-white rounded-3xl'
                    : 'absolute h-5 w-5 left-0.5 bottom-0.5 bg-white rounded-3xl'
                }
              ></span>
            </span>
          </label>
        </span>
      </div>
    </>
  );
};
