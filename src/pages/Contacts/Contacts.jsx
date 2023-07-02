import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList';
import { Filter } from '../../components/Filter/Filter';
import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <>
      <main>
        <section className={css.section}>
          <div className={css.containerphonebook}>
            <h1 className={css.hidden}>Phonebook</h1>
            <ContactForm />
            <Filter />
            <ContactList />
          </div>
        </section>
      </main>
    </>
  );
};

export default Contacts;
