'use client';

import useBackgroundColorStore from '@/store/useBackgroundColorStore';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import useFlow from '@/hooks/useFlow';
import Idle from '@/components/module/Ai/Idle';
import AcceptOffer from '@/components/module/Ai/AcceptOffer';
import SelectExamYear from '@/components/module/Ai/SelectExamYear';
import EnterSubjectInformation from '@/components/module/Ai/EnterSubjectInformation';
import EnterCurrentScore from '@/components/module/Ai/EnterCurrentScore';
import EnterTargetUniversity from '@/components/module/Ai/EnterTargetUniversity';
import ConsultingCompleted from '@/components/module/Ai/ConsultingCompleted';
import GeneratingResults from '@/components/module/Ai/GeneratingResults';
import { COLORS } from '@/styles/color';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/snap-swiper.css';
import useWarnOnUnload from '@/hooks/useWarnOnUnload';
import customAxios from '@/lib/axios';

const YEAR_LIST = [2024, 2025, 2026, 2027, 2028, 2029, 2030];

const AiPage = () => {
  const { changeBackgroundColor } = useBackgroundColorStore();
  const { flowState, ...flowProps } = useFlow();
  const [data, setData] = useState([]);
  const [generateLoading, setGenerateLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [examYear, setExamYear] = useState(2024);
  const swiperRef = useRef<SwiperRef | null>(null);

  useWarnOnUnload();

  const getResult = async () => {
    try {
      const { examYear, subject, currentScore, targetUniversity } =
        flowProps.flowContext;

      const pathname = `/sky/ai/${examYear}/${subject}/${currentScore}/${targetUniversity}`;
      const response = await customAxios.get(pathname).then((res) => res.data);
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

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
          handleOpen={handleOpen}
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
            await getResult();
            flowProps.next();
            setGenerateLoading(false);
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
    // es린트 무시
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (generateLoading) {
    return (
      <Main>
        <GeneratingResults
          state={flowState}
          context={flowProps.flowContext}
          loading={generateLoading}
        />
      </Main>
    );
  }

  return (
    <Main>
      {flowState !== 'idle' && (
        <BackButton
          onClick={() => {
            flowProps.back();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.998 19L7.99805 12L14.998 5"
              stroke="#6178C8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BackButton>
      )}

      {getComponent(flowState)}
      {/* 해당 모달은 년도 선택에 대한 모달입니다. */}
      <Modal open={open}>
        <BackgroundLayer />
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            position: 'absolute',
            padding: '0 16px 52px 16px',
            bottom: '0',
            left: '0',
          }}
        >
          <SnapBox>
            <Swiper
              ref={swiperRef}
              direction={'vertical'}
              slidesPerView={'auto'}
              className="snap-swiper"
              spaceBetween={9}
              centeredSlides={true}
              onSlideChange={(swiper) => {
                setExamYear(YEAR_LIST[swiper.activeIndex]);
              }}
              mousewheel={true}
            >
              {YEAR_LIST.map((year, index) => (
                <SnapSlideItem key={index}>
                  {year}
                  <Highlight selected={year === examYear} key={year}>
                    {year}
                  </Highlight>
                </SnapSlideItem>
              ))}
            </Swiper>
            {/* {[2024, 2025, 2026, 2027, 2028, 2029, 2030].map((year) => (
              <SnapItem
                className={year === examYear ? 'selected' : ''}
                key={year}
                onClick={() => {
                  setExamYear(year);
                }}
              >
                {year}
              </SnapItem>
            ))} */}
          </SnapBox>
          <ButtonWrapper>
            <Button
              backgroundColor={COLORS.primary[500]}
              hoverBackgroundColor={COLORS.primary[600]}
              color="white"
              onClick={() => {
                flowProps.setExamYear(examYear);
                handleClose();
              }}
            >
              확인
            </Button>
            <Button
              backgroundColor={COLORS.grayscale[700]}
              hoverBackgroundColor={COLORS.grayscale[800]}
              color="white"
              onClick={() => {
                setExamYear(2024);
                handleClose();
              }}
            >
              취소
            </Button>
          </ButtonWrapper>
        </div>
      </Modal>
    </Main>
  );
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

const Modal = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  padding: 0 16px;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const Button = styled.button<{
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  color?: string;
  hoverColor?: string;
}>`
  width: 100%;
  height: 44px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || COLORS.primary[500]};
  color: ${({ color }) => color || COLORS.primary[100]};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ hoverBackgroundColor }) =>
      hoverBackgroundColor || COLORS.primary[600]};
    color: ${({ hoverColor }) => hoverColor || COLORS.primary[100]};
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
  gap: 12px;
`;

const SnapBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 280px;
  overflow: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: white;
  border-radius: 8px;
  padding: 8px 11px;
  gap: 9px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const SnapItem = styled.div<{
  selected?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  flex-shrink: 0;
  scroll-snap-align: center;
  font-size: 24px;
  font-weight: bold;

  background-color: ${({ selected }) =>
    selected ? COLORS.primary[500] : COLORS.grayscale[100]};
  color: ${({ selected }) =>
    selected ? COLORS.primary[100] : COLORS.grayscale[500]};
`;

const SnapSlideItem = styled(SwiperSlide)`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  font-size: 20px;
  line-height: 30px;
  font-weight: 600;
  letter-spacing: -2%;
  color: ${COLORS.primary[200]};
  background-color: transparent;
  border-radius: 8px;
  overflow: visible;
  cursor: pointer;
`;

const Highlight = styled.div<{ selected?: boolean }>`
  position: absolute;
  width: 100%;
  height: 46px;
  background-color: ${COLORS.primary[100]};
  border-radius: 8px;
  display: ${({ selected }) => (selected ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -1%;
  color: ${COLORS.primary[600]};
  z-index: 10;
`;

const BackButton = styled.button`
  position: absolute;
  top: 58px;
  left: 16px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  mix-blend-mode: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: scale 0.2s ease-in-out;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    scale: 1.1;
  }
`;
