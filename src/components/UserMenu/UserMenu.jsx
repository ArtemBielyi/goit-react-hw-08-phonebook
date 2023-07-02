import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <div className={css.userMenu}>
      <NavLink className={css.navlink} to="contacts">
        Contacts
      </NavLink>
      <div className={css.login}>
        <p className={css.login__user}>{user.name}</p>
        <button type="button" className={css.login__button} onClick={onLogOut}>
          Logout
        </button>
      </div>
    </div>
  );
};
