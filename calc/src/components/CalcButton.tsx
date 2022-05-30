import React from 'react';

const CalcButton: React.FC = ({ charKey }: string) => {
    return(
        <button>
            {charKey}
        </button>
    );
}

export default CalcButton;