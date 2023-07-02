import css from './Home.module.css';
const Home = () => {
  return (
    <main>
      <section className={css.section}>
        <div className={css.containerhome}>
          <h1 className={css.home__title}>Welcome to your phonebook!</h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
