import { Link } from 'react-router-dom';
import { SvgIconLogo } from '../SvgIcon/SvgIcon';

export const Logo = () => {
  return (
    <>
      <Link to={'/'} className="flex gap-2 font-medium mr-20 dark:text-[#F3F3F3]">
        <SvgIconLogo />
        Bookshelf
      </Link>
    </>
  );
};
