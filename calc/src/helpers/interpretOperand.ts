const interpretOperand = (s: string) => {
    switch (s) {
        case "-":
            return ( (a, b) => { return (a - b)} );
            break;
        case "*":
            return ( (a, b) => { return (a * b)} );
            break;
        case "/":
            return ( (a, b) => { return (a / b)} );
            break;
        default:
            return ( (a, b) => { return (a + b)} );
    }
}

export default interpretOperand;