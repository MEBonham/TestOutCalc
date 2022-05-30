import React from 'react';

import useInputs from '../store/InputsStore';

const CalcButton: React.FC = ({ charKey }: string) => {
    const acceptInput = useInputs((state) => state.acceptInput);

    return(
        <button onClick={() => acceptInput(charKey)} disabled={charKey === " "}>
            {charKey}
        </button>
    );
}

export default CalcButton;