import css from './ErrorMessage.module.css';
import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className={css.error}>{message}</p>;
};

export default ErrorMessage;
