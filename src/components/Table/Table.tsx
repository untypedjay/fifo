import React from 'react';
import { Transaction } from '../../types';

interface Props {
    children: Transaction[];
    onTransactionDelete: (transactionId: number) => void;
}

export default function Table({ children, onTransactionDelete }: Props): JSX.Element {
    const renderTableRows = () => (
        <tbody>
            {children.map((transaction: Transaction) => (
                <tr key={transaction.id}>
                    <td>{transaction.date}</td>
                    <td>{transaction.srcAsset}</td>
                    <td>{transaction.srcAmount}</td>
                    <td>{transaction.destAsset}</td>
                    <td>{transaction.destAmount}</td>
                    <td>
                        <button type="button" onClick={() => onTransactionDelete(transaction.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Source Asset</th>
                    <th>Source Amount</th>
                    <th>Destination Asset</th>
                    <th>Destination Amount</th>
                </tr>
            </thead>

            {renderTableRows()}
        </table>
    );
}
