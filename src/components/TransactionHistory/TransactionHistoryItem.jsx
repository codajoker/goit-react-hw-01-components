import PropTypes from "prop-types";
import {
  Stroke,
  Cell,
} from "components/TransactionHistory/TransactionHistoryItem.styled";

const TransactionHistoryItem = ({ transactions }) => {
  return (
    <>
      {transactions.map((item) => {
        return (
          <Stroke key={item.id}>
            <Cell>{item.type}</Cell>
            <Cell>{item.amount}</Cell>
            <Cell>{item.currency}</Cell>
          </Stroke>
        );
      })}
    </>
  );
};
TransactionHistoryItem.protoTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
export default TransactionHistoryItem;
