import React, { useState } from 'react'
import Buttton from './Buttton'
import CalculatorTitle from './CalculatorTitle'
import OutputScreen from './OutputScreen'

const Calculator = () => {

    let [question, setQuestion] = useState("");
    let [answer, setAnswer] = useState("");

    const handleClick = (event) => {
        const value = event.target.value;
        switch (value) {
            case '=': {
                if (question !== "") {
                    let ans = ""
                    try {
                        ans = eval(question)
                    }
                    catch (err) {
                        setAnswer("Error")
                    }
                    if (ans === undefined) {
                        setAnswer("Error")
                    }
                    else {
                        setAnswer(ans);
                        setQuestion("");
                        console.log(ans)
                    }
                }
                break
            }
            case "C": {
                setQuestion("");
                setAnswer("");
                break;
            }
            default: {
                setQuestion(question += value);
                break;
            }
        }
        console.log(value)
    }
    return (
        <div className='frame'>
            <CalculatorTitle title="React-Calculator" />
            <div className='mainCalculator'>
                <OutputScreen  question={question} answer={answer} />
            </div>
            <div className='btn-row'>
                <Buttton label={"1"} handleClick={handleClick} />
                <Buttton label={"2"} handleClick={handleClick} />
                <Buttton label={"3"} handleClick={handleClick} />
                <Buttton label={"+"} handleClick={handleClick} />
            </div>
            <div className='btn-row'>
                <Buttton label={"4"} handleClick={handleClick} />
                <Buttton label={"5"} handleClick={handleClick} />
                <Buttton label={"6"} handleClick={handleClick} />
                <Buttton label={"-"} handleClick={handleClick} />
            </div>
            <div className='btn-row'>
                <Buttton label={"7"} handleClick={handleClick} />
                <Buttton label={"8"} handleClick={handleClick} />
                <Buttton label={"9"} handleClick={handleClick} />
                <Buttton label={"*"} handleClick={handleClick} />
            </div>
            <div className='btn-row'>
                <Buttton label={"="} handleClick={handleClick} />
                <Buttton label={"0"} handleClick={handleClick} />
                <Buttton label={"C"} handleClick={handleClick} />
                <Buttton label={"/"} handleClick={handleClick} />
            </div>
        </div>
    )
}

export default Calculator