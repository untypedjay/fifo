import React from 'react';
import { Transaction } from '../../types';

interface Props {
    children: Transaction[];
}

export default function Table({ children }: Props): JSX.Element {
    const renderTableRows = () => (
        <tbody>
            {children.map((transaction: Transaction) => (
                    <tr>
                        <td>{transaction.date}</td>
                        <td>{transaction.srcAsset}</td>
                        <td>{transaction.destAsset}</td>
                        <td>{transaction.amount}</td>
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
                    <th>Destination Asset</th>
                    <th>Amount</th>
                </tr>
            </thead>

            {renderTableRows()}
        </table>
    );
}
