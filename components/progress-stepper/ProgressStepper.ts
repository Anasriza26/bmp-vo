interface ProgressStepperProps {
  currentStep: number; // 1 to 5
  steps: { label: string }[]; // labels for each step
}