type SkyAI = {
  startAt?: FlowState;
};

const useSkyAI = ({ startAt }: SkyAI) => {
  return {
    startAt,
  };
};

export default useSkyAI;
