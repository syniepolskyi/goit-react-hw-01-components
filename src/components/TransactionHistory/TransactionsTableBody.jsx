import { default as PropTypes } from 'prop-types';
import TransactionItem from './TransactionItem';

export const TransactionsTableBody = ( {items} ) => {
  return <tbody>{items.map(TransactionItem)}</tbody>;
};

TransactionsTableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
};