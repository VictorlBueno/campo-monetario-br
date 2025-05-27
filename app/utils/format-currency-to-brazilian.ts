export function formatToBrl(input: string | number | undefined, decimal?: number): string {
    // Set default decimal places to 2 if not provided
    const decimalNums = decimal || 2;

    // Initialize negative sign variable
    let negativeSignal = "";

    if (typeof input === "number") {
        // Check if number is negative and store the sign
        if (input < 0) negativeSignal = "-";

        // Add decimal places if it's an integer (no decimal point)
        if (!String(input).includes(".")) input = input + `.${"0".repeat(decimalNums)}`;
        else input = input.toFixed(decimalNums);
    } else if (input?.startsWith("0,")) {
        // Remove leading zeros from a string that starts with "0,"
        input = +(String(input).replace(/,/g, ''));
    }

    // Check if the value is zero (0, 0.00, "0,00", etc)
    const numericValue = Number(String(input).replace(/\./g, "").replace(",", "."));
    if (!numericValue) return "";

    if (input) {
        // Remove commas from the input string
        const noCommas = String(input).replace(",", "");

        if (noCommas.length > decimalNums) {
            // Extract only numeric characters
            const numbers = String(input).replace(/[^0-9]/g, "");

            // Get the decimal part (last 'decimalNums' digits)
            const decimal = numbers.slice(-decimalNums);

            // Get the integer part (everything except the last 'decimalNums' digits)
            let value = numbers.substring(0, numbers.length - decimalNums);

            // Add thousand separators (dots) to the integer part
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

            // Return formatted Brazilian currency string
            return negativeSignal + (value) + "," + decimal;
        } else {
            // Handle cases where input length is less than or equal to decimal places
            const zerosToIncrement = decimalNums - noCommas.length
            return `${negativeSignal}0,${"0".repeat(zerosToIncrement)}${noCommas}`
        }
    }

    // Return empty string if input is falsy
    return "";
}