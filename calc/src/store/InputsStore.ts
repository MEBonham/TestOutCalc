import create from 'zustand';

const useInputs = create((set) => ({

    numSoFar: "",
    acceptInput: (charKey: string) => {
        switch(charKey) {
            case "C": // all clear
                set(() => ({
                    numSoFar: ""
                }));
                break;
            default: // key is a numerical digit
                console.log(charKey);
                set((state) => ({
                    numSoFar: `${state.numSoFar}${charKey}`
                }));
        }
    }

}));

export default useInputs;