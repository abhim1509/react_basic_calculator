import { useState } from 'react'
import ChildComp from './ChildComp';
import InputText from './InputText';

function Calculator() {
    const [firstNumber, firstNumberSetter] = useState("");
    const [secondNumber, secondNumberSetter] = useState("");
    const [result, setResult] = useState(0);
    const [inlineError, setInlineError] = useState("");

    const calculate = (e) => {
        switch(e.target.value){
            case "+": setResult(parseInt(firstNumber) + parseInt(secondNumber)) ; return result;
            case "-": setResult(firstNumber - secondNumber); return result;
            case "*": setResult(firstNumber * secondNumber) ; return result;
            case "/": 
                if(Number(secondNumber) === 0)
                    return setInlineError("Cannot divide with zero.")
                else {
                    setResult(firstNumber / secondNumber); 
                    return result;
                }    
            default : console.log("Operator does not match."); return;
        }
    }

    /**
     * 
     * @param e 
     * Step 1 - Check if event & target actually exists
     * Step 2 - Destructure event element
     * Step 3 - Write a regex to check if it's a valid number
     * Step 3.1 - If regex failed, return the method
     * Step 4 - Check if name is a valid string or key
     * Step 4.1 - If failed, simply return
     */
    const _handleInputChange = (e) => {
        if (!e || !e.target) {
            console.log('Not a valid event')
            return;
        }

        const { name, value } = e.target;

        // Check name attribute
        if (!name) { // "", null, undefined & false, NaN
            console.log('Name attribute is missing.')
            return;
        }
        if(!Number(value)){
            setInlineError('Please type a valid number.')
            return;
            
        }

        switch (name) {
            case 'firstNumber': firstNumberSetter(value);return;
            case 'secondNumber':secondNumberSetter(value);return;
            default:console.log('The name property is not available.');return;
        }

    }

    return <>
        <p>My Simple Calculator</p>
        <div className="results">
            <ChildComp data={result} />
        </div>
        <div className="form row">
            <InputText label="First Number" type="number" identifier="firstNumber" onChange={_handleInputChange} placeholder="Enter First Number" />
            <InputText label="Second Number" type="number" identifier="secondNumber" onChange={_handleInputChange} placeholder="Enter Second Number" />
            <div style={{color:'red' }}>{inlineError}</div>

            <div className="form-group">
                <button onClick={calculate} value="+">Add Numbers</button>
                <button onClick={calculate} value="-">Subtract Numbers</button>
                <button onClick={calculate} value="*">Multiply Numbers</button>
                <button onClick={calculate} value="/">Divide Numbers</button>
            </div>

        </div>
    </>
}

export default Calculator