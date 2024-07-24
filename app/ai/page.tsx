'use client';

import useBackgroundColorStore from '@/store/useBackgroundColorStore';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import useFlow from '@/hooks/useFlow';
import Idle from '@/components/module/Ai/Idle';
import AcceptOffer from '@/components/module/Ai/AcceptOffer';
import SelectExamYear from '@/components/module/Ai/SelectExamYear';
import EnterSubjectInformation from '@/components/module/Ai/EnterSubjectInformation';
import EnterCurrentScore from '@/components/module/Ai/EnterCurrentScore';
import EnterTargetUniversity from '@/components/module/Ai/EnterTargetUniversity';
import ConsultingCompleted from '@/components/module/Ai/ConsultingCompleted';
import GeneratingResults from '@/components/module/Ai/GeneratingResults';

const AiPage = () => {
  const { changeBackgroundColor } = useBackgroundColorStore();
  const { flowState, ...flowProps } = useFlow();
  const [data, setData] = useState([]);
  const [generateLoading, setGenerateLoading] = useState(false);

  const getComponent = (flowState: FlowState) => {
    const components: {
      [key: string]: JSX.Element | null;
    } = {
      idle: <Idle state={flowState} next={flowProps.next} />,
      accept_offer: <AcceptOffer state={flowState} next={flowProps.next} />,
      select_exam_year: (
        <SelectExamYear
          state={flowState}
          next={flowProps.next}
          context={flowProps.flowContext}
          setContext={flowProps.setExamYear}
        />
      ),
      enter_subject_information: (
        <EnterSubjectInformation
          state={flowState}
          next={flowProps.next}
          context={flowProps.flowContext}
          setContext={flowProps.setSubject}
        />
      ),
      enter_current_score: (
        <EnterCurrentScore
          state={flowState}
          next={flowProps.next}
          context={flowProps.flowContext}
          setContext={flowProps.setCurrentScore}
        />
      ),
      enter_target_university: (
        <EnterTargetUniversity
          state={flowState}
          next={flowProps.next}
          context={flowProps.flowContext}
          setContext={flowProps.setTargetUniversity}
          generatePlan={async () => {
            setGenerateLoading(true);
            await setTimeout(() => {
              setGenerateLoading(false);
              flowProps.next();
            }, 10000);
          }}
        />
      ),
      consulting_completed: (
        <ConsultingCompleted
          state={flowState}
          context={flowProps.flowContext}
          data={data}
        />
      ),
    };

    return components[flowState] || null;
  };

  useEffect(() => {
    changeBackgroundColor('transparent');
  }, []);

  if (generateLoading) {
    return (
      <Main>
        <GeneratingResults state={flowState} context={flowProps.flowContext} />
      </Main>
    );
  }

  return <Main>{getComponent(flowState)}</Main>;
};
export default AiPage;

const Main = styled.main`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 57px 16px 88px 16px;
  background: linear-gradient(
    180deg,
    rgba(109, 129, 200, 0.5) 0%,
    rgba(227, 253, 111, 0.3) 100%
  );
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
`;
