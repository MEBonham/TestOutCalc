// Returns the most recent three inputs that follow the order number-operand-number.
// If such a pattern is not found in the input history, can return "undefined" values.

const searchHistory = (history: any[]) => {

    // The best way I've researched to detect if an input string is numerical is the !isNaN() expression. From what I've read,
    // it works on strings that represent numerical values.
    const isNum = (s: string) => { return !isNaN(s) && s !== ""; };

    let
        num1: string = undefined,
        op: string = undefined,
        num2: string = undefined,
        i = history.length - 1;

    while (i >= 0) {
        if (isNum(history[i])) {
            num2 = history[i];
            i--;
            break;
        }
        i--;
    }
    while (i >= 0) {
        if (!isNum(history[i])) {
            op = history[i];
            i--;
            break;
        }
        i--;
    }
    while (i >= 0) {
        if (isNum(history[i])) {
            num1 = history[i];
            i--;
            break;
        }
        i--;
    }

    return ({ num1, op, num2 });
}

export default searchHistory;