// eslint-disable-next-line react/prop-types,no-unused-vars
import {useState} from "react";
import '../components/CalculationLine.css';

function CalculationLine({classNameDisplay, dieOne, dieTwo, dieOperator}) {


    const addNumbers = (numA, numB) => numA + numB;
    const subtractNumbers = (numA, numB) => numA - numB;
    const multiplyNumbers = (numA, numB) => numA * numB;
    const divideNumbers = (numA, numB) => numA / numB;
    const modulusNumbers = (numA, numB) => numA % numB;

    return (
        <li className="calculation-item">
            {dieOperator === 4 &&
                <> {
                    <h2> {dieOne} - {dieTwo} = <span
                        className={classNameDisplay}> {subtractNumbers(dieOne, dieTwo)}</span>
                    </h2>
                } </>
            }
            {dieOperator === 2 &&
                <> {
                    <h2> {dieOne} / {dieTwo} = <span
                        className={classNameDisplay}> {Math.floor(divideNumbers(dieOne, dieTwo))} </span> <span
                        className="sub-text">rest</span> <span
                        className={classNameDisplay}> {modulusNumbers(dieOne, dieTwo)} </span>
                    </h2>
                } </>
            }
            {dieOperator === 3 &&
                <> {
                    <h2> {dieOne} + {dieTwo} = <span
                        className={classNameDisplay}> {addNumbers(dieOne, dieTwo)} </span>
                    </h2>
                } </>
            }
            {dieOperator === 1 &&
                <> {
                    <h2> {dieOne} * {dieTwo} = <span
                        className={classNameDisplay}> {multiplyNumbers(dieOne, dieTwo)} </span></h2>
                } </>
            }
        </li>
    );
}

export default CalculationLine;
 