import React from "react";

interface Step {
  label: string;
}

interface ProgressStepperProps {
  currentStep: number;
  steps: Step[];
}

const ProgressStepper: React.FC<ProgressStepperProps> = ({
  currentStep,
  steps,
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center w-full max-w-4xl mx-auto px-2 sm:px-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div key={index} className="relative flex flex-col items-center flex-1 min-w-[60px]">
            {/* Left line */}
            {index !== 0 && (
              <div className="absolute left-0 top-5 w-full h-0.5 bg-gray-300 z-0 -translate-x-1/2">
                {stepNumber <= currentStep && (
                  <div className="absolute left-0 top-0 h-full bg-green-600" style={{ width: '100%' }}></div>
                )}
              </div>
            )}

            {/* Step circle */}
            <div
              className={`flex items-center justify-center rounded-full border-2 
                text-xs sm:text-sm md:text-base font-semibold z-10
                w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
                ${isCompleted
                  ? "bg-green-600 border-green-600 text-white"
                  : isActive
                  ? "bg-white border-green-600 text-green-600"
                  : "bg-white border-green-600 text-gray-500"
                }`}
            >
              {stepNumber}
            </div>

            {/* Label */}
            <div
              className={`mt-2 text-center text-[10px] sm:text-xs md:text-sm w-full
                ${isCompleted || isActive ? "text-green-600" : "text-gray-500"}
              `}
            >
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressStepper;
