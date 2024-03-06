import PropTypes from "prop-types";
import styles from "./Button.module.css" //create-react-app converts css into javascript object(styles)

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>; // create-react-app create random className
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
