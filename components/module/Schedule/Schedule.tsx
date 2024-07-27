import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/schedule-swiper.css';
import styled from '@emotion/styled';
import { TYPOGRAPHY } from '@/styles/typography';
import ScheduleItem from './ScheduleItem';

const SCHEDULE_DATA: Schedule[] = [
  {
    type: '수시',
    date: '2024-07-30',
    title: '학생부 작성 기준일',
  },
  {
    type: '정시',
    date: '2024-08-12',
    title: '입학원서 접수 기간',
  },
  {
    type: '수시',
    date: '2024-09-10',
    title: '학생부 제출 마감일',
  },
  {
    type: '정시',
    date: '2024-11-18',
    title: '2024 정시 수능 시험',
  },
];

const Schedule = () => {
  return (
    <Container>
      <div
        style={{
          ...TYPOGRAPHY.title['medium'],
          padding: '0 16px',
        }}
      >
        다가오는 입시 일정
      </div>
      <Swiper
        className="schedule-swiper"
        slidesPerView={'auto'}
        spaceBetween={'12px'}
        style={{
          paddingLeft: '16px',
          overflow: 'visible',
        }}
        loop={true}
      >
        {SCHEDULE_DATA.map((schedule, index) => (
          <SwiperSlide key={index}>
            <ScheduleItem schedule={schedule} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Schedule;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: visible;
`;
