import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { Transaction } from './types';
import Form from './components/Form/Form';
import Table from './components/Table/Table';

export default function App(): JSX.Element {
    const [transactions, setTransactions] = useLocalStorage<Transaction[]>('transactions', []);

    const handleNewTransaction = (newTransaction: Transaction) => {
        setTransactions(transactions.concat(newTransaction));
    };

    const handleTransactionDelete = (transactionId: number) => {
        const transactionIndex = transactions.findIndex((transaction: Transaction) => transaction.id === transactionId);
        if (transactionIndex !== -1) {
            const newTransactions = [...transactions];
            newTransactions.splice(transactionIndex, 1);
            setTransactions(newTransactions);
        } else {
            throw Error(`Transaction ${transactionId} could not be found!`);
        }
    };

    return (
        <div>
            <Form onNewTransaction={handleNewTransaction} />
            <Table onTransactionDelete={handleTransactionDelete}>{transactions}</Table>

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
