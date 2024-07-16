import PropTypes from "prop-types";

export const Nota = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
});

export const Notas = PropTypes.arrayOf(Nota).isRequired;
