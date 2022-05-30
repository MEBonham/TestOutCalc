import React from 'react';

import useInputs from '../store/InputsStore';

const CurNumDisplay: React.FC = () => {
    const num: string = useInputs((state) => state.numSoFar);
    const [numToDisplay, setNumToDisplay] = React.useState("0");
    React.useEffect(() => {
        setNumToDisplay(num === "" ? "0" : num);
    }, [num])

    return(
        <div className="numScreen">
            {numToDisplay}
        </div>
    );
}

export default CurNumDisplay;