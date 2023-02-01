import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './GoBackButton.module.css';

export default function GoBackButton({ location }) {
  return (
    <>
      <NavLink className={style.goBackButton} to={location}>
       Go Back 
      </NavLink>
    </>
  );
}

GoBackButton.propTypes = {
  location: PropTypes.any,
};