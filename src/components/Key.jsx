import PropTypes from 'prop-types';

const Key = ({ clname, char }) => <div className={clname}>{char}</div>;

Key.propTypes = { clname: PropTypes.string.isRequired, char: PropTypes.string.isRequired };

export default Key;
