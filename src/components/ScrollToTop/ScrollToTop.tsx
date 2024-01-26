import { useEffect, useState } from 'react';

export const ScrollToTop = () => {
  const [first, setfirst] = useState(false);
  useEffect(() => {
    if (window.scrollY > window.innerHeight) {
      setfirst(true);
    } else setfirst(false);
  }, []);

  return (
    <>
      {first && (
        <button
          className="flex w-10 h-10 bg-blue-600 rounded-full fixed bottom-5 right-5"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        ></button>
      )}
    </>
  );
};
