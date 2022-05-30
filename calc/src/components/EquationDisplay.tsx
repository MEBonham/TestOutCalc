import React from 'react';

import searchHistory from '../helpers/searchHistory';
import useInputs from '../store/InputsStore';
import isNum from '../helpers/isNum';
import { roundDecimals, NUM_DECIMALS } from '../helpers/roundDecimals';

const EquationDisplay: React.FC = () => {
    const history = useInputs((state) => state.history);
    const [pieces, setPieces] = React.useState([]);

    React.useEffect(() => {
        const searchObj = searchHistory(history);
        setPieces([searchObj.num1, searchObj.op, searchObj.num2]
            .filter((el) => el !== undefined)
            .map((el) => ( isNum(el) ? `${roundDecimals(parseFloat(el), NUM_DECIMALS)}` : el ))
        );
    }, [history]);

    return(
        <div className="eqScreen">
            <p>
                {pieces.map((pieceStr: string, i: number) => (
                    <span className="eqDispPiece" key={i}>{pieceStr}</span>
                ))}
            </p>
        </div>
    );
}

export default EquationDisplay;