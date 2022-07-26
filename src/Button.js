import PropTypes from 'prop-types';
import style from './Button.module.css';
const Button = ({ text }) => <button className={style.title}>{text}</button>;

Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button;
