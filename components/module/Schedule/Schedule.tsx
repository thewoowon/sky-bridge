import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/pagination';
// import '@styles/schedule-swiper.css';
import styled from '@emotion/styled';
import { TYPOGRAPHY } from '@/styles/typography';
import ScheduleItem from './ScheduleItem';
import { useQuery } from '@tanstack/react-query';
import customAxios from '@/lib/axios';
import { useEffect, useState } from 'react';
import Bounce from '@/components/element/bounce';

const Schedule = () => {
  const [scheduleList, setScheduleList] = useState<Schedule[]>([]);
  // Queries
  const { isLoading, data } = useQuery({
    queryKey: ['schedule'],
    queryFn: () => {
      return customAxios({
        method: 'GET',
        url: `/schedule/schedule`,
      }).then((res) => res.data);
    },
  });

  useEffect(() => {
    if (!data || data.length === 0) return;

    const parseDate = (dateString: string) => {
      return new Date(dateString).getTime();
    };

    const sortedSchedule: Schedule[] = [...data].sort(
      (a: Schedule, b: Schedule) => {
        return parseDate(a.scheduleDate) - parseDate(b.scheduleDate);
      },
    );

    setScheduleList(sortedSchedule);
  }, [data]);

  if (isLoading) {
    return (
      <Container>
        <Bounce />
      </Container>
    );
  }
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
        style={{
          paddingLeft: '16px',
          overflow: 'visible',
          width: '100%',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
        }}
        loop={true}
      >
        {scheduleList.map((schedule, index) => (
          <StyledSwiperSlide key={index}>
            <ScheduleItem schedule={schedule} />
          </StyledSwiperSlide>
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

const StyledSwiperSlide = styled(SwiperSlide)`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
