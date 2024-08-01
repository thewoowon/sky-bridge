import { COLORS } from '@/styles/color';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const UNIVERSITY_LIST: string[] = [
  '서울대학교',
  '연세대학교',
  '고려대학교',
  '한양대학교',
  '성균관대학교',
  '중앙대학교',
  '경희대학교',
  '서강대학교',
  '한국외국어대학교',
  '동국대학교',
  '이화여자대학교',
  '서울시립대학교',
  '건국대학교',
  '숙명여자대학교',
  '한국성서대학교',
  '서울여자대학교',
  '성신여자대학교',
  '홍익대학교',
  '중앙승가대학교',
  '상명대학교',
  '한국방송통신대학교',
  '서울디지털대학교',
  '한국체육대학교',
  '한국예술종합학교',
  '한국농수산대학교',
  '한국교원대학교',
  '한국교육대학교',
];

type UniversitySearchProps = {
  open: boolean;
  onClose: () => void;
  setContext: (targetUniversity: string) => void;
};

const UniversitySearch = ({
  open,
  onClose,
  setContext,
}: UniversitySearchProps) => {
  const [data, setData] = useState<string[]>([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    setData(UNIVERSITY_LIST);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Container>
      <Wrapper open={open}>
        <InputWrapper>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9998 19.9979L15.6367 15.6348"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="10.2859"
              cy="10.2859"
              r="7.03588"
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>

          <TargetInput
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
          />
        </InputWrapper>
        <ResultList>
          {data
            .filter((item) => item.includes(searchString))
            .map((item, index) => (
              <ResultItem
                key={index}
                onClick={() => {
                  setContext(item);
                  onClose();
                }}
              >
                <div
                  style={{
                    backgroundColor: COLORS.primary[50],
                    padding: '4px',
                    borderRadius: '7.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="#F0F3FD" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 10.9355V17.0901C6 19.3384 9.1101 20.3621 12 20.3621C14.8899 20.3621 18 19.3384 18 17.0901V11.0476L12.9633 13.1081C12.3433 13.3617 11.6475 13.3559 11.0319 13.0921L6 10.9355Z"
                      fill="#748FEE"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1977 3.03915L21.573 6.84869C21.6973 6.89932 21.8055 6.99635 21.8821 7.12605C21.9588 7.25574 22 7.41153 22 7.57136C22 7.7312 21.9588 7.88699 21.8821 8.01668C21.8055 8.14637 21.6973 8.2434 21.573 8.29403L12.1977 12.1036C12.0696 12.1561 11.9309 12.1561 11.8027 12.1036L2.42751 8.29403C2.30313 8.24344 2.19496 8.14645 2.1183 8.01678C2.04163 7.88711 2.00036 7.73134 2.00033 7.5715C2.00029 7.41166 2.0415 7.25586 2.1181 7.12614C2.19471 6.99643 2.30284 6.89936 2.4272 6.84869L11.8024 3.03915C11.9307 2.98695 12.0695 2.98695 12.1977 3.03915ZM4.50006 14.4285V15.9524C4.66582 15.9524 4.8248 16.0326 4.94201 16.1755C5.05923 16.3184 5.12508 16.5122 5.12508 16.7143C5.12508 16.9163 5.05923 17.1101 4.94201 17.253C4.8248 17.3959 4.66582 17.4762 4.50006 17.4762V18.2381C4.50006 18.4402 4.43421 18.634 4.317 18.7768C4.19978 18.9197 4.04081 19 3.87505 19C3.70928 19 3.55031 18.9197 3.43309 18.7768C3.31588 18.634 3.25003 18.4402 3.25003 18.2381V17.4762C3.08427 17.4762 2.92529 17.3959 2.80808 17.253C2.69086 17.1101 2.62502 16.9163 2.62502 16.7143C2.62502 16.5122 2.69086 16.3184 2.80808 16.1755C2.92529 16.0326 3.08427 15.9524 3.25003 15.9524V14.6084L2.06594 11.7219C2.02253 11.616 1.99996 11.4993 2 11.3809V9.22126L3.25003 9.75698V11.2011L4.43412 14.0876C4.47753 14.1935 4.5001 14.3102 4.50006 14.4285Z"
                      fill="#748FEE"
                    />
                  </svg>
                </div>

                {item}
              </ResultItem>
            ))}
        </ResultList>
      </Wrapper>
    </Container>
  );
};

export default UniversitySearch;

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const Wrapper = styled.div<{
  open: boolean;
}>`
  width: 100%;
  transition: height 0.2s ease-in-out;
  height: ${(props) => (props.open ? '90%' : '0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 31px 24px;
  gap: 21px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 11px;
  background-color: ${COLORS.grayscale[70]};
  border-radius: 14px;
`;

const TargetInput = styled.input`
  width: 100%;
  background-color: transparent;
  color: black;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  outline: none;
`;

const ResultList = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const ResultItem = styled.div`
  width: 100%;
  height: 44px;
  padding: 8px 6px;
  border-bottom: 1px solid ${COLORS.grayscale[100]};
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.grayscale[70]};
  }
`;
