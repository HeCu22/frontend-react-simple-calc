import {useEffect, useState} from 'react';

import CalcLogo from './assets/calculator.svg?react';
import OperationsLogo from './assets/math-operations-fill.svg?react';
import DieLogo from "./assets/dice-six-fill.svg?react";
import BrainLogo from "./assets/brain-fill.svg?react";
import './App.css';
import CalculationLine from "./components/CalculationLine.jsx";


function App() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date());
    const [results, setResults] = useState([]);
    const itemList = [0];
    const [checked, toggleChecked] = useState(false);
    //
    const stopTime = new Date();


    useEffect(() => {
        if (checked) {

            for (let i = 0; i < 99; i++) {
                itemList.push(0);
            }

            setResults(itemList);
        }

    }, [checked]);

    function calculateResultArray() {

        toggleChecked(!checked);
        setCount(count + 1);


        if (count <= 0) {
            setTime(new Date());
        }
    }


    return (
        <>
            <h1>
                <span> <BrainLogo className="extra" alt="logo"/>
                </span> Brein Sommen
            </h1>


            <>
                <span> Start tijd: {time.getHours()} {time.getMinutes()} {time.getSeconds()} </span>

            </>


            <div>
                <a><CalcLogo className="logo extra" alt="logo"/> </a>
                <a><DieLogo className="logo react extra" alt="logo"/></a>
                <a><OperationsLogo className="logo extra" alt="logo"/></a>
            </div>


            <div className="card">

                {(results.length > 0 && !checked) && <>
                    <ul className="calculation-list">
                        {results.map((item) => {
                            return <CalculationLine
                                visibleState={checked}
                                key={item.id

                                }/>;

                        })}


                    </ul>


                </>
                }


                <button onClick={calculateResultArray}>
                    Teller: {count}
                </button>

            </div>

            {count > 1 &&
                <div className="read-the-docs">


                    <p> stop: {stopTime.getHours()} {stopTime.getMinutes()} {stopTime.getSeconds()}</p>
                    <p> elapsed: {(stopTime.getTime() - time.getTime()) / 1000}
                    </p>
                </div>
            }
        </>
    )
}

export default App
