import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Navigation.module.css';

import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink className={css.navlink} to="/">
        Phonebook
      </NavLink>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
