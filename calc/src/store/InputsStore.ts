import create from 'zustand';

const useInputs = create((set) => ({

    numSoFar: "",
    acceptInput: (charKey: string) => {
        switch(charKey) {
            default: // key is a numerical digit
                set((state) => ({
                    numSoFar: `${state.numSoFar}${charKey}`
                }));
        }
    }

}));

export default useInputs;