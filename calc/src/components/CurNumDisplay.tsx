import React from 'react';
import roundToFourDecimals from '../helpers/roundToFourDecimals';

import useInputs from '../store/InputsStore';

const CurNumDisplay: React.FC = () => {
    const num: string = useInputs((state) => state.numSoFar);
    const finished = useInputs((state) => state.finished);
    const ans = useInputs((state) => state.ans);
    const [numToDisplay, setNumToDisplay] = React.useState("0");

    React.useEffect(() => {
        setNumToDisplay(num === "" ? "0" : num);
    }, [num])

    return(
        <div className="numScreen">
            {finished ? `${roundToFourDecimals(ans)}` : numToDisplay}
        </div>
    );
}

export default CurNumDisplay;