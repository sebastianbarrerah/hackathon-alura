import PropTypes from "prop-types";

export const Nota = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
});

export const Notas = PropTypes.arrayOf(Nota).isRequired;

export const PaginationProps = {
  items: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  renderItems: PropTypes.func.isRequired,
};