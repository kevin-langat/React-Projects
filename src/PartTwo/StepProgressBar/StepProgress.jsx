function StepProgress({ steps, activeStep, setActiveStep }) {
  function handlePrevStep() {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  function handleNextStep() {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  }

  return (
    <div className='flex flex-col items-center gap-5 w-full'>
      <div className=' flex w-full flex-row'>
        {steps && steps.length > 0
          ? steps.map((step, index) => (
              <div
                className={` w-full rounded-full ${
                  activeStep === index || activeStep > index
                    ? 'bg-green-400'
                    : 'bg-blue-500'
                }  flex flex-col items-center justify-center`}
                key={index}
              >
                {step}
              </div>
            ))
          : null}
      </div>
      {/* 110 */}
      <div className='flex flex-row gap-4'>
        <button
          disabled={activeStep === 0}
          className='bg-blue-500 px-6 py-1 rounded-[0.2em] disabled:bg-gray-400'
          onClick={handlePrevStep}
        >
          Previous
        </button>
        <button
          className='bg-blue-500  px-6 py-1 rounded-[0.2em]         disabled:bg-gray-400'
          disabled={activeStep === steps.length - 1}
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default StepProgress;
