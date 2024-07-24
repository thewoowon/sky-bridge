import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import { motion } from 'framer-motion';

type EnterSubjectInformationProps = {
  state: FlowState;
  next: () => void;
  context: FlowContext;
  setContext: (subject: string) => void;
};

const EnterSubjectInformation = ({
  state,
  next,
  context,
  setContext,
}: EnterSubjectInformationProps) => {
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
        {context.examYear}년, 그때도 구르미는 살아있겠지?
        <br />
        다음으로, 남은 기간 동안
        <br />
        <span
          style={{
            color: COLORS.primary[700],
          }}
        >
          어떤 과목에 집중할 거야?
        </span>
        <br />
        <span
          style={{
            color: COLORS.primary[700],
          }}
        >
          1가지만 선택해 줘.
        </span>
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
        <SubjectBox>
          {['국어', '수학', '영어'].map((subject) => (
            <SubjectItem
              key={subject}
              onClick={() => setContext(subject)}
              selected={context.subject === subject}
            >
              {context.subject === subject && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_645_5514)">
                    <path
                      d="M19.5 6.5L9.75 17.25L4.5 12.0005"
                      stroke="#6178C8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_645_5514">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              )}
              {subject}
            </SubjectItem>
          ))}
        </SubjectBox>
        <Button onClick={next} disabled={context.subject ? false : true}>
          이거야
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default EnterSubjectInformation;

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

const SubjectBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const SubjectItem = styled.div<{
  selected: boolean;
}>`
  width: 100%;
  height: 44px;
  background-color: white;
  color: ${({ selected }) => (selected ? COLORS.primary[600] : '#343a40')};
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;
