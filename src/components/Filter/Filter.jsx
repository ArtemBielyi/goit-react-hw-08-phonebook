import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/filterSlice';
import { getContacts } from '../../redux/contacts/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);

  function onFilterChange(event) {
    const name = event.currentTarget.value;
    dispatch(filterContacts(name));
  }

  return (
    <div className={css.filter}>
      <h2 className={css.filter__title}>Filter contacts</h2>
      <div className={css.filter__bcg}></div>
      <div className={css.filter__form}>
        <label className={css.filter__label}>
          Find contacts by name
          <input
            className={css.filter__input}
            name="filter"
            onChange={onFilterChange}
          ></input>
        </label>
        <p className={css.filter__descr}>
          Total contacts: {contactList.length}
        </p>
      </div>
    </div>
  );
};
