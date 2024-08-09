import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
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

  const highlight = (text: string, highlightText: string) => {
    const index = text.indexOf(highlightText);
    if (index === -1) {
      return text;
    }
    return (
      <>
        {text.substring(0, index)}
        <span style={{ color: COLORS.primary[700] }}>
          {text.substring(index, index + highlightText.length)}
        </span>
        {text.substring(index + highlightText.length)}
      </>
    );
  };

  useEffect(() => {
    setData(UNIVERSITY_LIST);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Container onClick={onClose}>
      <Wrapper open={open}>
        <div
          style={{
            width: '100%',
            padding: '12px 0 13px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          <svg
            width="54"
            height="5"
            viewBox="0 0 54 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="54" height="5" rx="2" fill="#E9ECEF" />
          </svg>
        </div>
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
            placeholder="대학교 이름을 입력해주세요."
          />
        </InputWrapper>
        <ResultList>
          {data.filter((item) => item.includes(searchString)).length > 0 ? (
            data
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
                  <div
                    style={{
                      ...TYPOGRAPHY.body['small'],
                      color: COLORS.grayscale[900],
                      fontWeight: 400,
                    }}
                  >
                    {highlight(item, searchString)}
                  </div>
                </ResultItem>
              ))
          ) : (
            <div
              style={{
                ...TYPOGRAPHY.body['large2'],
                color: '#666D75',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                justifyContent: 'center',
                height: '100%',
                flexDirection: 'column',
              }}
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 25.5176V39.8769C15 45.1229 22.2569 47.5116 29 47.5116C35.7431 47.5116 43 45.1229 43 39.8769V25.7777L31.246 30.5861C29.7995 31.1779 28.176 31.1644 26.7394 30.5488L15 25.5176Z"
                  fill="#F6F7F9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.4627 7.09134L51.3382 15.9803C51.6284 16.0984 51.8808 16.3248 52.0596 16.6274C52.2384 16.9301 52.3346 17.2936 52.3346 17.6665C52.3346 18.0395 52.2384 18.403 52.0596 18.7056C51.8808 19.0082 51.6284 19.2346 51.3382 19.3527L29.4627 28.2417C29.1637 28.3642 28.84 28.3642 28.541 28.2417L6.66549 19.3527C6.37528 19.2347 6.12287 19.0084 5.94399 18.7058C5.76511 18.4033 5.66882 18.0398 5.66874 17.6668C5.66866 17.2939 5.76479 16.9303 5.94354 16.6277C6.12229 16.325 6.3746 16.0985 6.66476 15.9803L28.5403 7.09134C28.8397 6.96955 29.1634 6.96955 29.4627 7.09134ZM11.5014 33.6666V37.2222C11.8882 37.2222 12.2592 37.4095 12.5327 37.7429C12.8062 38.0763 12.9598 38.5285 12.9598 39C12.9598 39.4715 12.8062 39.9237 12.5327 40.2571C12.2592 40.5905 11.8882 40.7778 11.5014 40.7778V42.5555C11.5014 43.027 11.3478 43.4792 11.0743 43.8126C10.8008 44.146 10.4299 44.3333 10.0431 44.3333C9.65629 44.3333 9.28535 44.146 9.01185 43.8126C8.73836 43.4792 8.58471 43.027 8.58471 42.5555V40.7778C8.19792 40.7778 7.82698 40.5905 7.55348 40.2571C7.27999 39.9237 7.12634 39.4715 7.12634 39C7.12634 38.5285 7.27999 38.0763 7.55348 37.7429C7.82698 37.4095 8.19792 37.2222 8.58471 37.2222V34.0862L5.82183 27.351C5.72055 27.104 5.66787 26.8316 5.66797 26.5555V21.5151L8.58471 22.7651V26.1359L11.3476 32.871C11.4489 33.1181 11.5015 33.3905 11.5014 33.6666Z"
                  fill="#F6F7F9"
                />
              </svg>
              아쉽게도 일치하는 내용이 없습니다
            </div>
          )}
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
  padding: 0 24px 31px 24px;
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

  // placeholder
  &::placeholder {
    color: ${COLORS.grayscale[300]};
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -2%;
  }
`;

const ResultList = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  /* 웹킷 기반 브라우저용 스크롤바 */
  &::-webkit-scrollbar {
    width: 5px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-track {
    background-color: ${COLORS
      .primary[100]} !important; /* 스크롤바의 트랙 색상 */
    border-radius: 17px; /* 스크롤바의 모서리 둥글게 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.primary[300]}; /* 스크롤바의 색상 */
    border-radius: 17px; /* 스크롤바 모서리 둥글게 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${COLORS.primary[400]}; /* 스크롤바를 호버할 때의 색상 */
  }

  scrollbar-width: thin; /* 스크롤바의 너비: auto, thin, none 중 선택 */
  scrollbar-color: ${COLORS.primary[300]} ${COLORS.primary[100]}; /* 스크롤바 색상과 트랙 색상 */
  -ms-overflow-style: -ms-autohiding-scrollbar; /* 자동 숨김 스크롤바 */
  margin-top: 21px;
`;

const ResultItem = styled.div`
  width: 100%;
  height: 44px;
  padding: 8px 6px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary[50]};
    border-radius: 8px;
  }
`;
