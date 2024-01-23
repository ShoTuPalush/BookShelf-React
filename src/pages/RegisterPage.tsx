import { useDispatch } from 'react-redux';
import { createUser } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SvgIconCross, SvgIconEmail, SvgIconPassword } from '../components/SvgIcon/SvgIcon';
import { Link, NavLink } from 'react-router-dom';

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(createUser(data));
    reset();
  };

  return (
    <>
      <div className="h-lvh w-lvw bg-blue-600 bg-gradient-to-b from-indigo-600 to-indigo-300 absolute top-0 left-0 z-50 flex justify-center items-center">
        <div
          className="w-335 bg-white relative py-10 px-5 border-2 border-black rounded-2xl 
        md:w-579 md:px-10 md:pt-20"
        >
          <Link
            className="absolute right-1.5 top-3 w-6 h-6 flex items-center justify-center
              md:right-2 md:top-5 md:w-8 md:h-8"
            to={'/'}
          >
            <SvgIconCross />
          </Link>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              className="relative w-full h-50 mb-6 rounded-full border-2 border-black block 
            md:h-16"
            >
              <input
                className="peer w-full h-full rounded-full focus:outline-none pl-6 pr-12 font-bold
                md:text-lg"
                type="text"
                placeholder=" "
                {...register('name', { required: true, maxLength: 20 })}
              />
              <span
                className="w-18 px-2 absolute font-bold uppercase left-6 top-2.5 bg-white 
                peer-focus:-top-3.5 peer-hover:-top-3.5 peer-[:not(:placeholder-shown)]:-top-3.5
              md:top-4 md:text-lg"
              >
                name
              </span>
            </label>
            <label
              className=" relative w-full h-50 mb-6 rounded-full border-2 border-black block 
            md:h-16"
            >
              <input
                className="peer w-full h-full rounded-full focus:outline-none pl-6 pr-12 font-bold 
                md:text-lg"
                type="email"
                placeholder=" "
                {...register('email', { required: true })}
              />
              <span
                className="w-18 px-2 absolute font-bold uppercase left-6 top-2.5 bg-white 
                peer-focus:-top-3.5 peer-hover:-top-3.5 peer-[:not(:placeholder-shown)]:-top-3.5
              md:top-4 md:text-lg"
              >
                email
              </span>
              <span className="absolute top-1.5 right-4 md:top-3">
                <SvgIconEmail />
              </span>
            </label>
            <label
              className="relative w-full h-50 mb-6 rounded-full border-2 border-black block 
            md:h-16"
            >
              <input
                className="peer w-full h-full rounded-full focus:outline-none pl-6 pr-12 font-bold 
                md:text-lg"
                type="password"
                placeholder=" "
                {...register('password', { required: true, min: 8, max: 30 })}
              />
              <span
                className="w-18 px-2 absolute font-bold uppercase left-6 top-2.5 bg-white 
                peer-focus:-top-3.5 peer-hover:-top-3.5 peer-[:not(:placeholder-shown)]:-top-3.5
              md:top-4 md:text-lg"
              >
                password
              </span>
              <span className="absolute top-1 right-2.5 md:top-3">
                <SvgIconPassword />
              </span>
            </label>
            <button
              className="w-full h-50 mb-4 rounded-full bg-black text-white uppercase font-bold text-base 
              md:h-16 md:text-lg"
              type="submit"
            >
              sign up
            </button>
          </form>
          <div className="text-center">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'mr-5 font-bold text-sm uppercase text-blue-600 underline md:text-lg '
                  : 'mr-5 font-bold text-sm uppercase text-gray-400 md:text-lg'
              }
              to={'/register'}
            >
              sign up
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'font-bold text-sm uppercase text-blue-600 underline md:text-lg '
                  : 'font-bold text-sm uppercase text-gray-400 md:text-lg'
              }
              to={'/login'}
            >
              sign in
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
