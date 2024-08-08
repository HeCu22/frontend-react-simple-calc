import {useEffect, useState} from 'react';

import CalcLogo from './assets/calculator.svg?react';
import OperationsLogo from './assets/math-operations-fill.svg?react';
import DieLogo from "./assets/dice-six-fill.svg?react";
import BrainLogo from "./assets/brain-fill.svg?react";
import './App.css';
import CalculationLine from "./components/CalculationLine.jsx";


function App() {
    const [count, setCount] = useState(1);
    const [time, setTime] = useState(new Date());
    const [results, setResults] = useState([{
        dieOne: 0,
        dieTwo: 0,
        dieOperator: 0

    }]);
    const itemList = [{
        dieOne: 0,
        dieTwo: 0,
        dieOperator: 0
    }];
    console.log('itemlist', itemList);
    const [className, setClassName] = useState("invisible-text");
    //
    const stopTime = new Date();


    useEffect(() => {
        if (count <= 1 && itemList.length < 100) {

            for (let i = 0; i < 100; i++) {
                itemList.push({

                dieOne: rollDie(20),
                    dieTwo: rollDie(10),
                    dieOperator: rollDie(2)});
            }
            itemList.shift(); // remove first element of array

            setResults(itemList);


        }

    }, []);

    function rollDie(sides = 6) {
        return Math.ceil(Math.random() * sides);
    }
    function calculateResultArray() {


        setCount(count + 1);


        if (count <= 1) {
            setClassName("visible-text");
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

                {(results.length > 0) && <>
                    <ul className="calculation-list">
                        {results.map((item) => {
                            return <CalculationLine
                                key={item.id}
                                className={className}
                                dieOne={item.dieOne}
                                dieTwo={item.dieTwo}
                                dieOperator={item.dieOperator}

                                />;

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
