import React from 'react';

import { roundDecimals, NUM_DECIMALS } from '../helpers/roundDecimals';
import useInputs from '../store/InputsStore';

const CurNumDisplay: React.FC = () => {
    const num: string = useInputs((state) => state.numSoFar);
    const history: string[] = useInputs((state) => state.history);
    const finished = useInputs((state) => state.finished);
    const ans = useInputs((state) => state.ans);
    const [numToDisplay, setNumToDisplay] = React.useState("0");

    React.useEffect(() => {
        setNumToDisplay(num === "" && history.length === 0 ? "0" : num);
    }, [num])

    return(
        <div className="numScreen">
            {finished ? `${roundDecimals(ans, NUM_DECIMALS)}` : numToDisplay}
        </div>
    );
}

export default CurNumDisplay;