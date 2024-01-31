import { useEffect, useState } from 'react';
import { SvgIconAngleTop2 } from '../SvgIcon/SvgIcon';

export const ScrollToTop = () => {
  const [first, setfirst] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setfirst(true);
    } else setfirst(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {first && (
        <button
          className="flex items-center justify-center w-14 h-14 bg-blue-600 
          rounded-full fixed bottom-10 right-10 fill-white animate-bounce"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          <SvgIconAngleTop2 />
        </button>
      )}
    </>
  );
};
