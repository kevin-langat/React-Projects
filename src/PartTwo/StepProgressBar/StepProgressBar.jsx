import { useState } from 'react';
import StepProgress from './StepProgress';

function StepProgressBar() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];
  return (
    <div className='w-3/4'>
      <StepProgress
        steps={steps}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
      />
    </div>
  );
}
export default StepProgressBar;
