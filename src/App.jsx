import {useEffect, useState} from 'react';

import CalcLogo from './assets/calculator.svg?react';
import OperationsLogo from './assets/math-operations-fill.svg?react';
import DieLogo from "./assets/dice-six-fill.svg?react";
import BrainLogo from "./assets/brain-fill.svg?react";
import './App.css';
import CalculationLine from "./components/CalculationLine.jsx";
import roundTime from "./helpers/roundTime.js";


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

                for (let i = 0; i < 101; i++) {
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
                            // voorkom delen door groter getal
                            if (numberTwo > numberOne) {
                                const numberSaved = numberOne;
                                numberOne = numberTwo;
                                numberTwo = numberSaved;
                                // numberTwo = rollDie(numberOne)
                            }
                            break;
                        case 3:
                            //optellen
                            numberOne = rollDie(9);
                            numberTwo = rollDie(9);
                            break;
                        case 4:
                            // verschil
                            numberOne = rollDie(20);
                            numberTwo = rollDie(9);
                            if (numberTwo > numberOne) {
                                // voorkom negatief resultaat
                                const numberSaved = numberOne;
                                numberOne = numberTwo;
                                numberTwo = numberSaved;
                                // numberTwo = rollDie(numberOne)
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

    // set default value to six
    function rollDie(sides = 6) {
        return Math.ceil(Math.random() * sides);
    }

    function calculateResultArray() {


        setCount(count + 1);

        // make results visible, when clicked twide
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
                    <>  <span> Start tijd: {time.toLocaleTimeString('nl-NL')} </span>
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
                                // first page
                                <ul className="calculation-list">
                                    {results.slice(0, 51).map((item, index) => {
                                        return <CalculationLine
                                            key={index.toString().concat(count)}
                                            classNameDisplay={classNameDisplay}
                                            dieOne={item.dieOne}
                                            dieTwo={item.dieTwo}
                                            dieOperator={item.dieOperator}

                                        />;

                                    })} </ul>
                                :
                                // second page
                                <ol className="calculation-list" start="52">
                                    {results.slice(52, 101).map((item, index) => {
                                        const keyItem = index.toString().concat(count);
                                        return <CalculationLine
                                            key={keyItem}
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
                        // show time elapsed as soon as results will be visible
                        <div className="read-the-docs">
                            <p> stop tijd:
                                <span className={classNameDisplay}>
                                    {stopTime.toLocaleTimeString('nl-NL')}
                    </span></p>
                            <p> benodigde tijd:
                                {/*                       <span  className={classNameDisplay}> {(stopTime.getTime() - time.getTime()) / 1000} </span> */}

                                <span
                                    className={classNameDisplay}> {roundTime((stopTime.getTime() - time.getTime()) / 1000)} </span>
                            </p>
                        </div>
                    }
                </div>

            </main>
        </>
    )
}

export default App
