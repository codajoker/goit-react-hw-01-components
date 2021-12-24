import PropTypes from "prop-types";
import TransactionHistoryItem from "components/TransactionHistory/TransactionHistoryItem";
import {
  Table,
  Thead,
} from "components/TransactionHistory/TransactionHistory.styled";
const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <tbody>
        <TransactionHistoryItem transactions={items}></TransactionHistoryItem>
      </tbody>
    </Table>
  );
};
TransactionHistory.protoTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object.isRequired),
};
export default TransactionHistory;
