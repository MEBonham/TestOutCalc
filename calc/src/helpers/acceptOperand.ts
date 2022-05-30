const acceptOperand = (
        symbol: string,
        history: any[],
        numSoFar: string
) => {
    const tempHistory: string[] = [ ...history, numSoFar, symbol ];
    
    return ({
        history: tempHistory,
        numSoFar: ""
    });
}

export default acceptOperand;