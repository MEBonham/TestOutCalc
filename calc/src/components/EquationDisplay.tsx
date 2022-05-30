import React from 'react';

import searchHistory from '../helpers/searchHistory';
import useInputs from '../store/InputsStore';
import isNum from '../helpers/isNum';
import roundToFourDecimals from '../helpers/roundToFourDecimals';

const EquationDisplay: React.FC = () => {
    const history = useInputs((state) => state.history);
    const [pieces, setPieces] = React.useState([]);

    React.useEffect(() => {
        const searchObj = searchHistory(history);
        setPieces([searchObj.num1, searchObj.op, searchObj.num2]
            .filter((el) => el !== undefined)
            .map((el) => ( isNum(el) ? `${roundToFourDecimals(parseFloat(el))}` : el ))
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