"use client";

import React, { ChangeEvent, InputHTMLAttributes } from "react";

type DecimalPlacesInputProps = {
    decimalPlaces: number;
    setDecimalPlaces: React.Dispatch<React.SetStateAction<number>>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'type' | 'min' | 'max' | 'id'>; 

export default function DecimalPlacesInput({ decimalPlaces, setDecimalPlaces, ...rest }: DecimalPlacesInputProps) {

    const handleDecimalPlacesChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);

        if (!isNaN(value) && value >= 0 && value <= 99) {
            setDecimalPlaces(value);
        } else if (e.target.value === '') {
            setDecimalPlaces(0);
        }
    };

    return (
        <div className="mb-6 flex items-center">
            <label htmlFor="decimalPlaces" className="text-gray-300 text-lg font-medium mr-3">
                Casas Decimais:
            </label>
            <input
                id="decimalPlaces"
                type="number"
                min="0"
                max="99" 
                value={decimalPlaces}
                onChange={handleDecimalPlacesChange}
                className="
                    p-3 border border-gray-700 rounded-lg
                    bg-gray-800 text-white placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    transition-all duration-200
                    w-24 text-center
                    no-spinners
                "
                {...rest}
            />
        </div>
    );
}
