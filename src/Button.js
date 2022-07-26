import PropTypes from 'prop-types';
import style from './Button.module.css';
const Button = ({ text, onClick }) => (
  <button className={style.title} onClick={onClick}>
    {text}
  </button>
);

Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button;
