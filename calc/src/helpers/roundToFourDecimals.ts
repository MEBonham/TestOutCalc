const roundToFourDecimals = (num: number) => {
    return( Math.round(num * 10000) / 10000);
}

export default roundToFourDecimals;