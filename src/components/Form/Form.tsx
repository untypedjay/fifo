import React, { ChangeEvent, useState } from 'react';
import { Transaction } from '../../types';

const INITIAL_INPUTS = {
    date: new Date().toDateString(),
    srcAsset: 'EUR',
    destAsset: 'BTC',
    amount: 0.01,
};

interface Props {
    onNewTransaction: (newTransaction: Transaction) => void;
}

export default function Form({ onNewTransaction }: Props): JSX.Element {
    const [inputs, setInputs] = useState<Transaction>(INITIAL_INPUTS);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs((state) => ({ ...state, [target.name]: target.value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onNewTransaction(inputs);

        setInputs(INITIAL_INPUTS);
    };

    const renderOptionList = () => (
        <>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="DFI">DFI</option>
        </>
    );

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Date:
                <input type="date" name="date" onChange={handleChange} value={inputs.date} />
            </label>

            <label>
                Source Asset:
                <select name="srcAsset" onChange={handleChange} value={inputs.srcAsset}>
                    {renderOptionList()}
                </select>
            </label>

            <label>
                Destination Asset:
                <select name="destAsset" onChange={handleChange} value={inputs.destAsset}>
                    {renderOptionList()}
                </select>
            </label>

            <label>
                Amount:
                <input
                    type="number"
                    name="amount"
                    step="0.00000001"
                    min={0}
                    onChange={handleChange}
                    value={inputs.amount}
                />
            </label>

            <input type="submit" value="Add" />
        </form>
    );
}
