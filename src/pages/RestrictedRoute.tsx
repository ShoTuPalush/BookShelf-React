import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLeggenIn } from '../redux/auth/selector';
import { ReactElement } from 'react';

interface IPropsResticted {
  redirectTo: string;
  component: ReactElement;
}

export const RestrictedRoute = ({ component, redirectTo = '/' }: IPropsResticted) => {
  const isLoggen = useSelector(selectIsLeggenIn);
  return isLoggen ? <Navigate to={redirectTo} /> : component;
};
