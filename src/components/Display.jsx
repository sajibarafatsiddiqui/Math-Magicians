import PropTypes from 'prop-types';

const Display = ({ clname, char }) => <div data-testid="displayCalc" className={clname}>{char}</div>;

Display.propTypes = { clname: PropTypes.string.isRequired, char: PropTypes.string.isRequired };

export default Display;
