import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { Transaction } from './types';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

export default function App(): JSX.Element {
    const [transactions, setTransactions] = useLocalStorage('transactions', []);

    const handleNewTransaction = (newTransaction: Transaction) => {
        setTransactions(transactions.concat(newTransaction));
    };

    return (
        <div>
            <Form onNewTransaction={handleNewTransaction} />
            <Table>{transactions}</Table>

            <div>
                <h3>Total Assets</h3>
                <p>0 BTC</p>
                <p>0 ETH</p>
                <p>0 DFI</p>
            </div>
            <div>
                <h3>Tax Free Assets</h3>
                <p>0 BTC</p>
                <p>0 ETH</p>
                <p>0 DFI</p>
            </div>
            <div>
                <h3>Taxed Assets</h3>
                <p>0 BTC</p>
                <p>0 ETH</p>
                <p>0 DFI</p>
            </div>
        </div>
    );
}
