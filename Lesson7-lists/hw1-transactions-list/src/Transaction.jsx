import React from 'react';
import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const dateOfTrans = moment(time).format('DD MMM');
  const timeOfTrans = moment(time).format('hh:mm');
  const amountFormated = new Intl.NumberFormat('en-GB').format(amount);
  return (
    <li className="transaction">
      <span className="transaction__date">{dateOfTrans}</span>
      <span className="transaction__time">{timeOfTrans}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{amountFormated}</span>
    </li>
  );
};

export default Transaction;
