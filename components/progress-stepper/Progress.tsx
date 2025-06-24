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
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto ">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <React.Fragment key={index}>
            {/* Circle inside relative container */}
            <div className="relative flex flex-col items-center">
              {/* Left line */}
              {index !== 0 && (
                <div className="absolute left-0 top-1/3  w-full h-0.5 bg-gray-300 z-0 transform -translate-x-full -translate-y-full">
                  {stepNumber <= currentStep && (
                    <div className="absolute left-0 top-0 h-full bg-green-600" style={{ width: '100%' }}></div>
                  )}
                </div>
              )}

              {/* Circle */}
              <div
                className={`flex items-center justify-center rounded-full border-2 w-10 h-10 text-sm font-semibold z-10 ${
                  isCompleted
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
                className={`text-xs mt-2 text-center w-full ${
                  isCompleted || isActive
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressStepper;