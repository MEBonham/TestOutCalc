import interpretOperand from "./interpretOperand";
import searchHistory from "./searchHistory";

const calculate = (
    history: any[],
    numSoFar: string
) => {
    const tempHistory: string[] = [ ...history, numSoFar ];
    const { num1, op, num2 } = searchHistory(tempHistory);

    return ({
        history: tempHistory,
        numSoFar: "",
        ans: interpretOperand(op)(parseFloat(num1), parseFloat(num2)),
        finished: true
    });
}

export default calculate;