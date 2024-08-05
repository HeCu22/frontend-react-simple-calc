import {useState} from 'react';

import CalcLogo from './assets/calculator.svg?react';
import OperationsLogo from './assets/math-operations-fill.svg?react';
import DieLogo from "./assets/dice-six-fill.svg?react";
import BrainLogo from "./assets/brain-fill.svg?react";
import './App.css';


function App() {
    const [count, setCount] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState([]);
    const [addRest, setAddRest] = useState('');
    const [time, setTime] = useState(new Date());

    const stopTime = new Date();
    const addNumbers = (numA, numB) => numA + numB;
    const subtractNumbers = (numA, numB) => numA - numB;
    const multiplyNumbers = (numA, numB) => numA * numB;
    const divideNumbers = (numA, numB) => numA / numB;
    const modulusNumbers = (numA, numB) => numA % numB;


    function rollDie(sides = 6) {
        console.log('number sides', sides);
        return Math.ceil(Math.random() * sides);
    }

    function calculateResultArray() {
        for (let i = 0; i < 17; i++) {
            calculateResult(i);

        }

    }

    function calculateResult() {

        setCount(count + 1);
        if (count <= 0) {
            setTime(new Date());
        }
        setAddRest('');
        if (dieOne > 9) {
            if (dieOperator === 1) {
                setOperator(dieOne.toString() + ' - ' + dieTwo.toString());
                setResult(subtractNumbers(dieOne, dieTwo));
            } else {
                setOperator(dieOne.toString() + ' / ' + dieTwo.toString());
                setResult(Math.floor(divideNumbers(dieOne, dieTwo)));
                setAddRest(' rest ' + modulusNumbers(dieOne, dieTwo).toString());
            }


        } else {
            if (dieOperator === 1) {
                setOperator(dieOne.toString() + ' + ' + dieTwo.toString());
                setResult(addNumbers(dieOne, dieTwo));
            } else {
                setOperator(dieOne.toString() + ' * ' + dieTwo.toString());
                setResult(multiplyNumbers(dieOne, dieTwo));
            }

        }
    }

    const dieOne = rollDie(20);
    const dieTwo = rollDie(10);
    const dieOperator = rollDie(2);
    console.log(dieOne, dieTwo, dieOperator);

    return (
        <>
            <h1>
                {/*<svg xmlns="http://www.w3.org/2000/svg" className="extra" width="32" height="32" viewBox="0 0 256 256">*/}
                {/*    <path fill=""*/}
                {/*          d="M212,76V72a44,44,0,0,0-74.86-31.31,3.93,3.93,0,0,0-1.14,2.8v88.72a4,4,0,0,0,6.2,3.33A47.67,47.67,0,0,1,167.68,128a8.18,8.18,0,0,1,8.31,7.58,8,8,0,0,1-8,8.42,32,32,0,0,0-32,32v33.88a4,4,0,0,0,1.49,3.12,47.92,47.92,0,0,0,74.21-17.16,4,4,0,0,0-4.49-5.56A68.06,68.06,0,0,1,192,192h-7.73a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8a51.6,51.6,0,0,0,24-5.88v0A52,52,0,0,0,212,76Zm-12,36h-4a36,36,0,0,1-36-36V72a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4a8,8,0,0,1,0,16ZM88,28A44.05,44.05,0,0,0,44,72v4a52,52,0,0,0-4,94.12h0A51.6,51.6,0,0,0,64,176h7.73A8.18,8.18,0,0,1,80,183.47,8,8,0,0,1,72,192H64a67.48,67.48,0,0,1-15.21-1.73,4,4,0,0,0-4.5,5.55A47.93,47.93,0,0,0,118.51,213a4,4,0,0,0,1.49-3.12V176a32,32,0,0,0-32-32,8,8,0,0,1-8-8.42A8.18,8.18,0,0,1,88.32,128a47.67,47.67,0,0,1,25.48,7.54,4,4,0,0,0,6.2-3.33V43.49a4,4,0,0,0-1.14-2.81A43.85,43.85,0,0,0,88,28Zm8,48a36,36,0,0,1-36,36H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,76V72a8,8,0,0,1,16,0Z"></path>*/}
                {/*</svg>*/}
                <span> <BrainLogo className="extra" alt="logo"/>

                </span> Brein Sommen
            </h1>


            <>
                <span> Start tijd: {time.getHours()} {time.getMinutes()} {time.getSeconds()} </span>
                {console.log('array', result)}

            </>


            <div>
                <a><CalcLogo className="logo extra" alt="logo"/> </a>
                <a><DieLogo className="logo react extra" alt="logo"/></a>
                <a><OperationsLogo className="logo extra" alt="logo"/></a>
            </div>


            <div className="card">


                {dieOne > 9 && dieOperator === 1 &&
                    <> {
                        <h2> {dieOne} - {dieTwo} = <span
                            className="invisible-text"> {subtractNumbers(dieOne, dieTwo)}</span>
                        </h2>
                    } </>
                }
                {dieOne > 9 && dieOperator !== 1 &&
                    <> {
                        <h2> {dieOne} / {dieTwo} = <span
                            className="invisible-text"> {Math.floor(divideNumbers(dieOne, dieTwo))} </span> <span
                            className="sub-text">rest</span> <span
                            className="invisible-text"> {modulusNumbers(dieOne, dieTwo)} </span>
                        </h2>
                    } </>
                }
                {dieOne <= 9 && dieOperator === 1 &&
                    <> {
                        <h2> {dieOne} + {dieTwo} = <span
                            className="invisible-text"> {addNumbers(dieOne, dieTwo)} </span>
                        </h2>
                    } </>
                }
                {dieOne <= 9 && dieOperator !== 1 &&
                    <> {
                        <h2> {dieOne} * {dieTwo} = <span
                            className="invisible-text"> {multiplyNumbers(dieOne, dieTwo)} </span></h2>
                    } </>
                }

                <button onClick={calculateResultArray}>
                    Teller: {count}
                </button>
                <p>

                    Vorige som: {operator} = {result} {addRest}
                </p>
            </div>

            {count > 10 &&
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
