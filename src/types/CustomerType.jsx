import PropTypes from 'prop-types';

const CustomerType = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    // Add more fields as needed
});

export default CustomerType;
