const acceptOperand = (
        symbol: string,
        history: any[],
        numSoFar: string,
        finished: boolean,
        ans: number
) => {
    const tempHistory: string[] = finished ? [ ans, symbol ] : [ ...history, numSoFar, symbol ];
    
    return ({
        history: tempHistory,
        numSoFar: "",
        finished: false
    });
}

export default acceptOperand;