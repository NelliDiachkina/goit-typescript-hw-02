import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button type="button" className={css.btn} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
