import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';

type SelectExamYearProps = {
  state: FlowState;
  next: () => void;
  context: FlowContext;
  setContext: (examYear: number) => void;
  handleOpen: () => void;
};

const SelectExamYear = ({
  state,
  next,
  context,
  setContext,
  handleOpen,
}: SelectExamYearProps) => {
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
        <span
          style={{
            color: COLORS.primary[700],
          }}
        >
          몇 년도 수능에
        </span>
        <br />
        도전할 예정이야?
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
        <YearButton
          onClick={() => {
            handleOpen();
            setContext(2024);
          }}
          selected={!!context.examYear}
        >
          {context.examYear || 2024}
        </YearButton>
        <Button onClick={next} disabled={context.examYear ? false : true}>
          이때야
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SelectExamYear;

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
  position: relative;
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
    background-color: ${COLORS.grayscale[200]};
    color: ${COLORS.grayscale[500]};
    cursor: not-allowed;
  }
`;

const YearButton = styled.button<{
  selected: boolean;
}>`
  width: 100%;
  height: 44px;
  background-color: white;
  color: ${({ selected }) =>
    selected ? COLORS.primary[600] : COLORS.primary[100]};
  border-radius: 8px;
  border: 1px solid ${COLORS.grayscale[300]};
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${COLORS.grayscale[100]};
    color: ${COLORS.primary[500]};
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

const SnapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  --ms-overflow-style: none;
  scrollbar-width: none;
`;

const SnapItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  scroll-snap-align: center;
  font-size: 2rem;
  font-weight: bold;
`;
