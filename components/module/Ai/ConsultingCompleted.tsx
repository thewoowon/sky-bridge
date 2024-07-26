import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useRef, useState } from 'react';
import TeacherCard from '../Card/TeacherCard';
import PlanCard from '../Card/PlanCard';
import RadioToggle from '@/components/element/radio/RadioToggle';

type ConsultingCompletedProps = {
  state: FlowState;
  context: FlowContext;
  data: any[];
};

const ConsultingCompleted = ({
  state,
  context,
  data,
}: ConsultingCompletedProps) => {
  const ref = useRef<SwiperRef>(null);
  const [toggle, setToggle] = useState<'recommend' | 'plan'>('recommend');

  useEffect(() => {
    if (ref.current) {
      if (toggle === 'recommend') ref.current.swiper.slideTo(0);
      else ref.current.swiper.slideTo(1);
    }
  }, [toggle]);
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
        구르미가{' '}
        <span
          style={{
            color: COLORS.primary[700],
          }}
        >
          {context.subject} 1등급
        </span>
        을 위한
        <br />
        맞춤형 계획 설계를 모두 완료했어!
      </TitleBox>
      <div
        style={{
          width: '100%',
          height: 'fit-content',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        <RadioToggle
          selectedOption={toggle}
          setSelectedOption={(option) => {
            setToggle(option);
          }}
        />
        <Swiper
          ref={ref}
          style={{
            width: '100%',
            height: '328px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          slidesPerView={1}
          className="result-swiper"
          spaceBetween={20}
          centeredSlides={true}
          onSlideChange={(swiper) => {
            setToggle(swiper.activeIndex === 0 ? 'recommend' : 'plan');
          }}
          mousewheel={false}
        >
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TeacherCard />
          </SwiperSlide>
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PlanCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default ConsultingCompleted;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-top: 50px;
  gap: 35px;
`;

const TitleBox = styled(motion.div)`
  width: 100%;
  text-align: center;
`;
