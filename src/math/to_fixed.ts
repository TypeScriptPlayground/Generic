/** */
export default function toFixed(
    value : number,
    precision : number,
    handleTrailingDecimalPlaces : (value : number) => number = Math.round
) {
    const decimalPlaces = Math.pow(10, precision)
    return (handleTrailingDecimalPlaces(value * decimalPlaces)) / decimalPlaces;
}
