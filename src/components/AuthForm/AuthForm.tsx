import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createUser, loginUser } from '../../redux/auth/operations';
import { SvgIconEmail, SvgIconPassword } from '../SvgIcon/SvgIcon';

interface IFormInput {
  name: string;
  email: string;
  password: string;
}

interface IPropAuthForm {
  form: 'register' | 'login';
}

export const AuthForm = ({ form }: IPropAuthForm) => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (form === 'register') {
      dispatch(createUser(data));
      return reset();
    }
    dispatch(loginUser(data));
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {form === 'register' && (
          <label
            className="relative w-full h-50 mb-6 rounded-full border-2 border-black block 
            md:h-16 dark:border-[#F6F6F6] dark:text-[#F6F6F6]"
          >
            <input
              className="peer w-full h-full rounded-full focus:outline-none pl-6 pr-12 font-bold
                md:text-lg dark:bg-inherit"
              type="text"
              placeholder=" "
              {...register('name', { required: true, maxLength: 20 })}
            />
            <span
              className="w-18 px-2 absolute font-bold uppercase left-6 top-2.5 bg-white 
                peer-focus:-top-3.5 peer-hover:-top-3.5 peer-[:not(:placeholder-shown)]:-top-3.5
              md:top-4 md:text-lg dark:bg-[#202024] transition-all"
            >
              name
            </span>
          </label>
        )}
        <label
          className=" relative w-full h-50 mb-6 rounded-full border-2 border-black block 
            md:h-16 dark:border-[#F6F6F6] dark:text-[#F6F6F6]"
        >
          <input
            className="peer w-full h-full rounded-full focus:outline-none pl-6 pr-12 font-bold 
                md:text-lg dark:bg-inherit"
            type="email"
            placeholder=" "
            {...register('email', { required: true })}
          />
          <span
            className="w-18 px-2 absolute font-bold uppercase left-6 top-2.5 bg-white 
                peer-focus:-top-3.5 peer-hover:-top-3.5 peer-[:not(:placeholder-shown)]:-top-3.5
              md:top-4 md:text-lg dark:bg-[#202024]  transition-all"
          >
            email
          </span>
          <span className="absolute top-1.5 right-4 md:top-3">
            <SvgIconEmail />
          </span>
        </label>
        <label
          className="relative w-full h-50 mb-6 rounded-full border-2 border-black block 
            md:h-16 dark:border-[#F6F6F6] dark:text-[#F6F6F6]"
        >
          <input
            className="peer w-full h-full rounded-full focus:outline-none pl-6 pr-12 font-bold 
                md:text-lg dark:bg-inherit
                "
            type="password"
            placeholder=" "
            {...register('password', { required: true, min: 8, max: 30 })}
          />
          <span
            className="w-18 px-2 absolute font-bold uppercase left-6 top-2.5 bg-white 
                peer-focus:-top-3.5 peer-hover:-top-3.5 peer-[:not(:placeholder-shown)]:-top-3.5
              md:top-4 md:text-lg dark:bg-[#202024] transition-all"
          >
            password
          </span>
          <span className="absolute top-1 right-2.5 md:top-3">
            <SvgIconPassword />
          </span>
        </label>
        <button
          className="w-full h-50 mb-4 rounded-full bg-black text-white uppercase font-bold text-base 
              md:h-16 md:text-lg dark:bg-[#F6F6F6] dark:text-[#202024]"
          type="submit"
        >
          {form === 'register' ? 'sign up' : 'sign in'}
        </button>
      </form>
    </>
  );
};
