// eslint-disable-next-line react/prop-types,no-unused-vars
import {useState} from "react";
import '../components/CalculationLine.css';

function CalculationLine({className, dieOne, dieTwo, dieOperator}) {
    // console.log('checked', props);


    // const [classText, setClassText] = useState("invisible-text");



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
                        className={className}> {subtractNumbers(dieOne, dieTwo)}</span>
                    </h2>
                } </>
            }
            {dieOne > 9 && dieOperator !== 1 &&
                <> {
                    <h2> {dieOne} / {dieTwo} = <span
                        className={className}> {Math.floor(divideNumbers(dieOne, dieTwo))} </span> <span
                        className="sub-text">rest</span> <span
                        className={className}> {modulusNumbers(dieOne, dieTwo)} </span>
                    </h2>
                } </>
            }
            {dieOne <= 9 && dieOperator === 1 &&
                <> {
                    <h2> {dieOne} + {dieTwo} = <span
                        className={className}> {addNumbers(dieOne, dieTwo)} </span>
                    </h2>
                } </>
            }
            {dieOne <= 9 && dieOperator !== 1 &&
                <> {
                    <h2> {dieOne} * {dieTwo} = <span
                        className={className}> {multiplyNumbers(dieOne, dieTwo)} </span></h2>
                } </>
            }
        </li>
    );
}

export default CalculationLine;
 