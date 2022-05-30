const acceptOperand = (
        symbol: string,
        history: any[],
        numSoFar: string
) => {
    const tempHistory: string[] = [ ...history, numSoFar, symbol ];
    
    return ({
        history: tempHistory,
        numSoFar: "",
        finished: false
    });
}

export default acceptOperand;