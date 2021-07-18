import React, { ChangeEvent, useState } from 'react';
import { Transaction } from '../../types';

const getInitialValues = () => ({
    id: new Date().getTime(),
    date: new Date().toISOString().split('T')[0],
    srcAsset: 'EUR',
    destAsset: 'BTC',
    srcAmount: 0.01,
    destAmount: 0.01,
});

interface Props {
    onNewTransaction: (newTransaction: Transaction) => void;
}

export default function Form({ onNewTransaction }: Props): JSX.Element {
    const [inputs, setInputs] = useState<Transaction>(getInitialValues());

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setInputs((state) => ({ ...state, [target.name]: target.value }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onNewTransaction(inputs);

        setInputs(getInitialValues());
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
            <label htmlFor="date">
                Date:
                <input type="date" name="date" id="date" onChange={handleChange} value={inputs.date} />
            </label>

            <label htmlFor="srcAsset">
                Source Asset:
                <select name="srcAsset" id="srcAsset" onChange={handleChange} value={inputs.srcAsset}>
                    {renderOptionList()}
                </select>
            </label>

            <label htmlFor="srcAmount">
                Source Amount:
                <input
                    type="number"
                    name="srcAmount"
                    id="srcAmount"
                    step="0.00000001"
                    min={0}
                    onChange={handleChange}
                    value={inputs.srcAmount}
                />
            </label>

            <label htmlFor="destAsset">
                Destination Asset:
                <select name="destAsset" id="destAsset" onChange={handleChange} value={inputs.destAsset}>
                    {renderOptionList()}
                </select>
            </label>

            <label htmlFor="destAmount">
                Destination Amount:
                <input
                    type="number"
                    name="destAmount"
                    id="destAmount"
                    step="0.00000001"
                    min={0}
                    onChange={handleChange}
                    value={inputs.destAmount}
                />
            </label>

            <input type="submit" value="Add" />
        </form>
    );
}
