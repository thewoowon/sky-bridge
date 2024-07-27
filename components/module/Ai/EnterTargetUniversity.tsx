import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';

type EnterTargetUniversityProps = {
  state: FlowState;
  next: () => void;
  context: FlowContext;
  setContext: (targetUniversity: string) => void;
  generatePlan: () => void;
};

const EnterTargetUniversity = ({
  state,
  next,
  context,
  setContext,
  generatePlan,
}: EnterTargetUniversityProps) => {
  return (
    <Wrapper>
      <TitleBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{
          ...TYPOGRAPHY.title['large'],
        }}
      >
        {context.currentScore ? (
          <>
            <span
              style={{
                color: COLORS.primary[700],
              }}
            >
              마지막으로,
            </span>
            <br />
            <span
              style={{
                color: COLORS.primary[700],
              }}
            >
              어떤 어떤 대학교를 목표하고 있어?
            </span>
            <br />
          </>
        ) : (
          <>
            대답하기 싫구나,
            <br />
            <span
              style={{
                color: COLORS.primary[700],
              }}
            >
              그렇다면 어떤 대학교를 목표하고 있어?
            </span>
            <br />
          </>
        )}
        해당 학교의 입시 요강에 맞춰
        <br />
        계획을 설계해 줄게.
      </TitleBox>
      <div
        style={{
          width: '200px',
          height: '224px',
          position: 'relative',
        }}
      >
        <Image
          src={
            'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/fe2d3c33-2d1f-4289-e5b4-acfc9ca71200/public'
          }
          alt="gurumi"
          fill
          priority
          sizes="410px"
        />
      </div>
      <ButtonWrapper>
        <TargetInput
          placeholder="대학교 이름을 입력해주세요."
          value={context.targetUniversity || ''}
          onChange={(e) => {
            setContext(e.target.value);
          }}
          onKeyDown={async (e) => {
            if (e.key === 'Enter') {
              await generatePlan();
            }
          }}
        />
        <Button
          onClick={async () => {
            await generatePlan();
          }}
          disabled={context.targetUniversity ? false : true}
        >
          이거야
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default EnterTargetUniversity;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-top: 50px;
  gap: 10px;
`;

const TitleBox = styled(motion.div)`
  width: 100%;
  text-align: center;
  height: 116px;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  background-color: ${COLORS.primary[500]};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${COLORS.primary[600]};
  }

  &:disabled {
    background-color: ${COLORS.grayscale[300]};
    color: #666d75;
    cursor: not-allowed;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  gap: 12px;
`;

const TargetInput = styled.input`
  width: 100%;
  height: 44px;
  background-color: white;
  color: ${COLORS.primary[600]};
  border-radius: 8px;
  border: 1px solid ${COLORS.grayscale[300]};
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: all 0.2s ease-in-out;
  text-align: center;
  outline: none;
  &:hover {
    color: ${COLORS.primary[500]};
  }
`;
