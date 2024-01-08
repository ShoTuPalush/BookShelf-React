import { useDispatch } from 'react-redux';
import { logOut, loginUser, refreshUser } from '../redux/auth/operations';
import { AppDispatch } from '../redux/store';

export default function LoginPage() {
  const dispath = useDispatch<AppDispatch>();

  const handleLogin = (evt: any) => {
    evt.preventDefault();
    const form = evt.target;
    dispath(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      }),
    );
  };
  return (
    <>
      <form action="" onSubmit={(evt) => handleLogin(evt)}>
        <label htmlFor="">
          email
          <input type="email" name="email" />
        </label>
        <label htmlFor="">
          password
          <input type="password" name="password" />
        </label>
        <button type="submit">log in</button>
      </form>

      <button onClick={() => dispath(refreshUser())}>check</button>

      <button onClick={() => dispath(logOut())}>logOut</button>
    </>
  );
}
