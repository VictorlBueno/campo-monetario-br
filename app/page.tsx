"use client"

import {formatToBrl} from "@/app/utils/format-currency-to-brazilian";
import {useRef, useState} from "react";
import CurrencyInput from "@/app/components/currency-input";
import {parseNumber} from "@/app/utils/parse-number";
import DecimalPlacesInput from "@/app/components/input";

export default function Home() {
    const [resultState, setResultState] = useState<number>(0);
    const [decimalPlaces, setDecimalPlaces] = useState<number>(2);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInput = () => {
        if (inputRef.current) {
            inputRef.current.value = formatToBrl(inputRef.current.value, decimalPlaces);
            setResultState(parseNumber(inputRef.current.value, decimalPlaces))
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-950 flex-col">
            <DecimalPlacesInput
                decimalPlaces={decimalPlaces}
                setDecimalPlaces={setDecimalPlaces}
            />
            <CurrencyInput handleInput={handleInput} inputRef={inputRef} decimalPlaces={decimalPlaces}/>
            <p className="text-gray-300 mt-4 text-lg">Resultado numérico: <span
                className="font-bold">{resultState}</span></p>
        </div>
    );
}