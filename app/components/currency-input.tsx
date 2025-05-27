import React, {InputHTMLAttributes, Ref} from "react";

type CurrencyInputProps = {
    decimalPlaces: number;
    inputRef: Ref<HTMLInputElement>;
    handleInput: (event: React.FormEvent<HTMLInputElement>) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'ref' | 'onInput' | 'name' | 'id' | 'type'>;

export default function CurrencyInput({inputRef, handleInput, decimalPlaces, ...rest}: CurrencyInputProps) {
    return (
        <div
            className={"flex items-center rounded-2xl bg-gray-800 border border-gray-700 shadow-lg"}> 
            <p className={"text-2xl p-2 text-gray-400 font-medium"}>R$</p>
            <input
                ref={inputRef}
                type="text"
                name="currency"
                id="currency"
                placeholder={`0,${"0".repeat(decimalPlaces)}`}
                className="
                    text-xl text-right px-4 py-3 h-16 w-96
                    rounded-r-2xl
                    bg-gray-900
                    text-white
                    placeholder-gray-500
                    outline-none
                    focus:ring-1 focus:ring-blue-500
                    border border-gray-700
                    transition-all duration-200
                    no-spinners
                "
                onInput={handleInput}
                {...rest}
            />
        </div>
    );
}
