// eslint-disable-next-line react/prop-types,no-unused-vars
import {useState} from "react";
import '../components/CalculationLine.css';

function CalculationLine({visibleState}) {


    const dieOne = rollDie(20);
    const dieTwo = rollDie(10);
    const dieOperator = rollDie(2);


    function rollDie(sides = 6) {
        console.log('number sides', sides);
        return Math.ceil(Math.random() * sides);
    }

    const addNumbers = (numA, numB) => numA + numB;
    const subtractNumbers = (numA, numB) => numA - numB;
    const multiplyNumbers = (numA, numB) => numA * numB;
    const divideNumbers = (numA, numB) => numA / numB;
    const modulusNumbers = (numA, numB) => numA % numB;

    return (
        <li className="calculation-item">
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
        </li>
    );
}

export default CalculationLine;
 