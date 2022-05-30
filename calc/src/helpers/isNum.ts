// The best way I've researched to detect if an input string is numerical is the !isNaN() expression. From what I've read,
// it works on strings that represent numerical values. The only problem is that it returns false for the empty string,
// so I've added an exception for that value.
const isNum = (s: string) => { return !isNaN(s) && s !== ""; };
export default isNum;