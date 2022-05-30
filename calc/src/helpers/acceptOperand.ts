const acceptOperand = (
        symbol: string,
        history: any[],
        numSoFar: string
) => {
    const tempHistory: string[] = [ ...history, numSoFar, symbol ];
    // const a: number = parseFloat(tempHistory[tempHistory.length - 2]);
    // const b: number = parseFloat(tempHistory[tempHistory.length - 1]);
    
    return ({
        history: tempHistory,
        numSoFar: ""
    });
}

export default acceptOperand;