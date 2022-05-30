import React from 'react';

import useInputs from '../store/InputsStore';

const CurNumDisplay: React.FC = () => {
    const num = useInputs((state) => state.numSoFar);

    return(
        <div className="numScreen">
            {num}
        </div>
    );
}

export default CurNumDisplay;