import React, { useState } from 'react'

export const MultistepFrom = () => {
    const Step1 = ({next}) => (
        <div>
             <h3>Step 1</h3>
            <button type='button' onClick={next} >Next</button>
        </div>
    )

    const Step2 = ({prev, next}) => (
        <div>
             <h3>Step 2</h3>
             <button type='button' onClick={prev} >Previous</button>
            <button type='button' onClick={next} >Next</button>
        </div>
    )

    const Step3 = ({prev}) => (
        <div>
             <h3>Step 3</h3>
             <button type='button' onClick={prev} >Previous</button>
             <button type='submit' >Submit</button>
        </div>
    )
        
    const [step, setStep] = useState(1);
    const nextStep = () => {
        setStep(step + 1);
    }
    const prevStep = () => {
        setStep(step - 1);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
    }
  return (
    <form onSubmit={handleSubmit}>
        {step === 1 && <Step1 next={nextStep} />}
        {step === 2 && <Step2 next={nextStep} prev={prevStep} />}
        {step === 3 && <Step3 prev={prevStep} />}
    </form>
  )
}
