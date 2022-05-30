import create from 'zustand';

import acceptOperand from '../helpers/acceptOperand';
import calculate from '../helpers/calculate';

const useInputs = create((set) => ({

    numSoFar: "",
    history: [],
    ans: 0,
    finished: false,
    acceptInput: (charKey: string) => {
        switch(charKey) {
            case "C": // all clear
                set(() => ({
                    ans: 0,
                    numSoFar: "",
                    history: [],
                    finished: false
                }));
                break;
            case "=": // perform the calculation stored!
                set((state) => ( calculate( state.history, state.numSoFar ) ));
                break;
            case "+":
                set((state) => ( acceptOperand( charKey, state.history, state.numSoFar ) ));
                break;
            case "-":
                set((state) => ( acceptOperand( charKey, state.history, state.numSoFar ) ));
                break;
            case "*":
                set((state) => ( acceptOperand( charKey, state.history, state.numSoFar ) ));
                break;
            case "/":
                set((state) => ( acceptOperand( charKey, state.history, state.numSoFar ) ));
                break;
            default: // key is a numerical digit
                set((state) => ({
                    numSoFar: ( state.numSoFar === "0" ? charKey : `${state.numSoFar}${charKey}`),
                    finished: false
                }));
        }
    }

}));

export default useInputs;