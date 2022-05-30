import React from 'react';

import '../styling/App.css';
import CalcButton from './CalcButton';
import CurNumDisplay from './CurNumDisplay';
import EquationDisplay from './EquationDisplay';

const App: React.FC = () => {
    const BUTTONS: string[] = ["1", "4", "7", " ",
                               "2", "5", "8", "0",
                               "3", "6", "9", " ",
                               "+", "-", "*", "/",
                               "C", " ", " ", "="];

    return(
        <div className="App">
            <EquationDisplay />
            <CurNumDisplay />
            <div className="keyboard">
                {BUTTONS.map((charKey: string, i: number) => (
                    <CalcButton key={i} charKey={charKey} />
                ))}
            </div>
        </div>
    );
}

export default App;