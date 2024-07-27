import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Sequence from '@/components/element/sequence/Sequence';

type IdleProps = {
  state: FlowState;
  next: () => void;
};

const Idle = ({ state, next }: IdleProps) => {
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
        안녕? <br />
        나는 제공해 준 정보를 바탕으로
        <br />
        맞춤형 학습을 계획해 주는
        <br />
        <span
          style={{
            color: COLORS.primary[700],
          }}
        >
          AI 과외 선생님, 구르미야.
        </span>
      </TitleBox>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
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
      </motion.div>
      <ButtonWrapper>
        <Button onClick={next}>안녕</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Idle;

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
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;
