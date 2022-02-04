import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionsList = props => (
  <ul className="transactions">
    {props.transactions.map(trans => (
      <Transaction key={trans.id} {...trans} />
    ))}
  </ul>
);

export default TransactionsList;
