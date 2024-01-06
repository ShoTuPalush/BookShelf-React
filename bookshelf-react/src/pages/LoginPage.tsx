import { ThunkDispatch } from '@reduxjs/toolkit';
// import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/auth/operations';

export default function LoginPage() {
  const dispath = useDispatch<ThunkDispatch<any, any, any>>();

  const handleRegister = (evt: any) => {
    evt.preventDefault();
    const form = evt.target;
    dispath(
      createUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
  };
  return (
    <>
      <form action="" onSubmit={(evt) => handleRegister(evt)}>
        <label htmlFor="">
          name
          <input type="text" name="name" />
        </label>

        <label htmlFor="">
          email
          <input type="email" name="email" />
        </label>
        <label htmlFor="">
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">register</button>
      </form>
    </>
  );
}
