import React from 'react';
import CalcButton from './CalcButton';

import '../styling/App.css';
import CurNumDisplay from './CurNumDisplay';

const App: React.FC = () => {
    const BUTTONS: string[] = ["1", "4", "7", " ",
                               "2", "5", "8", "0",
                               "3", "6", "9", " ",
                               "+", "-", "*", "/",
                               "C", " ", " ", "="];

    return(
        <div className="App">
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