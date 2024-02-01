import { SvgIconCross } from '../components/SvgIcon/SvgIcon';
import { Link } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm/AuthForm';
import { AuthLink } from '../components/AuthLink/AuthLink';

export default function RegisterPage() {
  return (
    <>
      <div
        className="h-lvh w-lvw bg-blue-600 bg-gradient-to-b from-indigo-600 to-indigo-300 
      absolute top-0 left-0 z-50 flex justify-center items-center"
      >
        <div
          className="w-335 bg-white relative py-10 px-5 border-2 border-black rounded-2xl 
        md:w-579 md:px-10 md:pt-20 dark:bg-[#202024] dark:border-[#F6F6F6]"
        >
          <Link
            className="absolute right-1.5 top-3 w-6 h-6 flex items-center justify-center
              md:right-2 md:top-5 md:w-8 md:h-8"
            to={'/'}
          >
            <SvgIconCross />
          </Link>
          <AuthForm form="register" />
          <AuthLink />
        </div>
      </div>
    </>
  );
}
