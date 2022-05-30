import React from 'react';
import CalcButton from './CalcButton';

const App: React.FC = () => {
    const BUTTONS: string[] = ["1", "4", "7", " ",
                               "2", "5", "8", "0",
                               "3", "6", "9", " ",
                               "+", "-", "*", "/",
                               "C", " ", " ", "="];

    return(
        <div className="App">
            <div className="keyboard">
                {BUTTONS.map((charKey, i) => (
                    <CalcButton key={i} charKey={charKey} />
                ))}
            </div>
        </div>
    );
}

export default App;