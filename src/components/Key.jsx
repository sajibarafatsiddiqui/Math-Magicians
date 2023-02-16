import PropTypes from 'prop-types';

const Key = ({ clname, char, handleClick }) => <button type="button" className={clname} onClick={handleClick}>{char}</button>;

Key.propTypes = {
  clname: PropTypes.string.isRequired,
  char: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

Key.defaultProps = { handleClick: () => console.log('hello') };

export default Key;
