C
// eslint-disable-next-line react/prop-types
function CalculationLine({ dieOne, dieTwo, dieOperator }) {
    const addNumbers = (numA, numB) => numA + numB;
    const subtractNumbers = (numA, numB) => numA - numB;
    const multiplyNumbers = (numA, numB) => numA * numB;
    const divideNumbers = (numA, numB) => numA / numB;
    const modulusNumbers = (numA, numB) => numA % numB;

    return (
        <>
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
        </>
    );
}

export default CalculationLine;
 