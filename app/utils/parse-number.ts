export function parseNumber(input: string | number, decimal?: number) {
    // Return 0 if input is undefined or null
    if (input === undefined || input === null) {
        return 0;
    }

    // Convert input to string for string manipulation
    input = input.toString();

    // Set default decimal places to 2 if not provided
    decimal = decimal || 2;

    // Handle cases where input length is less than or equal to decimal places
    if (input.length <= decimal) {
        // Calculate how many leading zeros are needed
        const zeroMissing = decimal - input.length;

        // Create a decimal number with leading zeros (e.g., "123" with 2 decimals becomes "0.123")
        const number = `0.${"0".repeat(zeroMissing)}${input}`;

        // Convert the formatted string to a number
        return Number(number);
    }

    // For longer inputs, remove thousand separators (dots) and replace decimal comma with dot
    const value = input.replace(/\./g, "").replace(",", ".");

    // Convert the cleaned string to a float number
    return Number(value);
}