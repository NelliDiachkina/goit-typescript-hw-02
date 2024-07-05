import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';
import { SearchBarProps, FormElements } from './SearchBar.types';
import { FormEvent } from 'react';
import css from './SearchBar.module.css';

const notify = () => toast('Please enter a search term!');
const toastOptions = {
  duration: 2500,
  style: {
    background: '#ffc12f',
    color: 'black',
  },
};

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const elements = target.elements as unknown as FormElements;
    const newQuery = elements.query.value.trim();
    newQuery === '' ? notify() : onSubmit(newQuery);
    target.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.btn}>
          <FaSearch size="23" />
        </button>
      </form>
      <Toaster toastOptions={toastOptions} position="top-left" />
    </header>
  );
};

export default SearchBar;
