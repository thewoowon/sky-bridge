import { useState } from 'react';
import { FLOW_STATES } from '../constants/sky';

const useFlow = (): {
  flowState: FlowState;
  flowStates: string[];
  next: () => void;
  back: () => void;
  flowContext: FlowContext;
  setExamYear: (examYear: number) => void;
  setSubject: (subject: string) => void;
  setCurrentScore: (currentScore: number) => void;
  setTargetUniversity: (targetUniversity: string) => void;
} => {
  const [flowState, setFlowState] = useState<FlowState>(FLOW_STATES[0]);
  const [flowContext, setFlowContext] = useState<FlowContext>({
    examYear: undefined,
    subject: undefined,
    currentScore: undefined,
    targetUniversity: undefined,
  });
  const next = () => {
    // overflow check
    if (FLOW_STATES.indexOf(flowState) === FLOW_STATES.length - 1) {
      return;
    }
    setFlowState(FLOW_STATES[FLOW_STATES.indexOf(flowState) + 1]);
  };

  const back = () => {
    // underflow check
    if (FLOW_STATES.indexOf(flowState) === 0) {
      return;
    }
    setFlowState(FLOW_STATES[FLOW_STATES.indexOf(flowState) - 1]);
  };

  const setExamYear = (examYear: number) => {
    setFlowContext({ ...flowContext, examYear });
  };

  const setSubject = (subject: string) => {
    setFlowContext({ ...flowContext, subject });
  };

  const setCurrentScore = (currentScore: number) => {
    setFlowContext({ ...flowContext, currentScore });
  };

  const setTargetUniversity = (targetUniversity: string) => {
    setFlowContext({ ...flowContext, targetUniversity });
  };

  return {
    flowState,
    flowStates: FLOW_STATES,
    next,
    back,
    flowContext,
    setExamYear,
    setSubject,
    setCurrentScore,
    setTargetUniversity,
  };
};

export default useFlow;
