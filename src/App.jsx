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

    const [classNameDisplay, setClassNameDisplay] = useState("invisible-text");
    //
    const stopTime = new Date();


    useEffect(() => {
            if (count <= 1 && itemList.length < 101) {

                for (let i = 0; i < 100; i++) {
                    const operatorCalc = rollDie(4);
                    let numberOne = 1;
                    let numberTwo = 1;
                    switch (operatorCalc) {
                        // vermenigvuldigen, delen, optellen, aftrekken
                        case 1:
                            numberOne = rollDie(9);
                            numberTwo = rollDie(9);
                            break;
                        case 2:
                            //delen
                            numberOne = rollDie(20);
                            numberTwo = rollDie(9);
                            if (numberTwo > numberOne) {
                                numberTwo = rollDie(numberOne)
                            }
                            break;
                        case 3:
                            //optellen
                            numberOne = rollDie(9);
                            numberTwo = rollDie(9);
                            break;
                        case 4:
                            // aftrekken
                            numberOne = rollDie(20);
                            numberTwo = rollDie(9);
                            if (numberTwo > numberOne) {
                                numberTwo = rollDie(numberOne)
                            }
                            break;
                        default:
                        // na

                    }

                    itemList.push({
                        dieOne: numberOne,
                        dieTwo: numberTwo,
                        dieOperator: operatorCalc
                    });

                }


                itemList.shift(); // remove first element of array

                setResults(itemList);


            }


        }, []
    )
    ;

    function rollDie(sides = 6) {
        return Math.ceil(Math.random() * sides);
    }

    function calculateResultArray() {


        setCount(count + 1);


        if (count >= 2) {
            setClassNameDisplay("visible-text");

        }
    }


    return (
        <>
            <main className="outer-container">
                <div className="inner-container">


                    <h1>
                <span> <BrainLogo className="extra" alt="logo"/>
                </span> Brein Sommen
                    </h1>
                    <>  <span> Start tijd: {time.getHours()} {time.getMinutes()} {time.getSeconds()} </span>
                    </>

                    <div>
                        <a><CalcLogo className="logo extra" alt="logo"/> </a>
                        <a><DieLogo className="logo react extra" alt="logo"/></a>
                        <a><OperationsLogo className="logo extra" alt="logo"/></a>
                    </div>

                    <div className="card">

                        {(results.length > 0) && <>

                            {count % 2 > 0
                                ?
                                <ul className="calculation-list">
                                    {results.slice(0, 51).map((item) => {
                                        return <CalculationLine
                                            key={item.id}
                                            classNameDisplay={classNameDisplay}
                                            dieOne={item.dieOne}
                                            dieTwo={item.dieTwo}
                                            dieOperator={item.dieOperator}

                                        />;

                                    })} </ul>
                                :

                                <ol className="calculation-list" start="52">
                                    {results.slice(52, 101).map((item) => {
                                        return <CalculationLine
                                            key={item.id}
                                            classNameDisplay={classNameDisplay}
                                            dieOne={item.dieOne}
                                            dieTwo={item.dieTwo}
                                            dieOperator={item.dieOperator}

                                        />;

                                    })}
                                </ol>

                            }
                        </>
                        }


                    </div>
                    <button onClick={calculateResultArray}>
                        Teller: {count}
                    </button>

                    {count >= 1 &&
                        <div className="read-the-docs">


                            <p> stop:
                                <span className={classNameDisplay}>
                            {stopTime.getHours()} {stopTime.getMinutes()} {stopTime.getSeconds()}
                    </span></p>
                            <p> elapsed: <span
                                className={classNameDisplay}> {(stopTime.getTime() - time.getTime()) / 1000} </span>
                            </p>
                        </div>
                    }
                </div>

            </main>
        </>
    )
}

export default App
