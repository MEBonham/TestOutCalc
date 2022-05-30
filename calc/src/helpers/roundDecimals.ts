export const NUM_DECIMALS = 4;

export const roundDecimals = (num: number, d: number) => {
    const factor = 10 ** d;
    return( Math.round(num * factor) / factor);
}