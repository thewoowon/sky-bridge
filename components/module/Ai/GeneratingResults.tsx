import Loader2 from '@/components/element/loader/Loader2';
import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';

type GeneratingResultsProps = {
  state: FlowState;
  context: FlowContext;
  loading: boolean;
};

const GeneratingResults = ({
  state,
  context,
  loading,
}: GeneratingResultsProps) => {
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
        고마워, 이제 모든 정보가 확인되었어.
        <br />
        이제부터 이 내용을 바탕으로,
        <br />
        <span
          style={{
            color: COLORS.primary[700],
          }}
        >
          앞으로 {context.examYear}년 까지의
        </span>
        <br />
        맞춤형 학습 계획을 설계 해줄게.
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: 'fit-content',
          paddingTop: '59px',
        }}
      >
        <Loader2 isLoading={loading} />
      </div>
    </Wrapper>
  );
};

export default GeneratingResults;

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
