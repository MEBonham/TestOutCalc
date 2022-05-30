// Returns the most recent three inputs that follow the order number-operand-number.
// If such a pattern is not found in the input history, can return "undefined" values.

import isNum from "./isNum";

const searchHistory = (history: any[]) => {
    let
        num1: string = undefined,
        op: string = undefined,
        num2: string = undefined;

    for (let i = 0; i < history.length; i++) {
        if (!isNum(history[i])) {
            op = history[i];
        } else if (isNum(history[i]) && op === undefined) {
            num1 = history[i];
        } else if (isNum(history[i])) {
            num2 = history[i];
        }
    }

    return ({ num1, op, num2 });
}

export default searchHistory;