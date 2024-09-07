import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styled from '@emotion/styled';
import BridgerItem from './BridgerItem';
import { TYPOGRAPHY } from '@/styles/typography';
import { COLORS } from '@/styles/color';

const BRIDGER_LIST: Bridger[] = [
  {
    id: 1,
    name: '김예지',
    imageSrc: '/images/bridger/bridger1.png',
    university: '숙명여대',
    major: '국어국문학과',
    studentId: '18학번',
    intro:
      '국어 실력의 극대화\n확실한 성적 상승을 시켜 드릴 최고의 전략가입니다.',
    tags: ['친절한', '꼼꼼한'],
    subject: ['국어', '사회문화'],
  },
  {
    id: 2,
    name: '이종빈',
    imageSrc: '/images/bridger/bridger2.png',
    university: '서울대학교',
    major: '생명과학과',
    studentId: '19학번',
    intro:
      '생명과학 분야의 정석.\n입시 성공을 위한 완벽한 학습 플랜을 제시합니다.',
    tags: ['준비된', '꿀팁 가득'],
    subject: ['물리', '화학'],
  },
  {
    id: 3,
    name: '이현지',
    imageSrc: '/images/bridger/bridger3.png',
    university: '연세대학교',
    major: '동양사학과',
    studentId: '17학번',
    intro:
      '고수를 만나면 성적은 올라갑니다.\n사탐 과목에서 독보적인 성과를 만들어 드립니다.',
    tags: ['솔직함', '꿀팁 가득'],
    subject: ['한국사', '사회문화'],
  },
  {
    id: 4,
    name: '김종범',
    imageSrc: '/images/bridger/bridger4.png',
    university: '고려대학교',
    major: '경영학과',
    studentId: '20학번',
    intro:
      '최고의 경영학 입시 전문가.\n빠르고 효율적인 입시 전략으로 목표 대학을 현실로 만듭니다.',
    tags: ['정확한', '신속한'],
    subject: ['수학', '물리'],
  },
];

const Bridger = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          padding: '0 16px',
        }}
      >
        <div
          style={{
            ...TYPOGRAPHY.title['medium'],
            fontWeight: 700,
            display: 'flex',
            color: 'white',
          }}
        >
          스카이브릿지가&nbsp;
          <span
            style={{
              color: COLORS.secondary[500],
              display: 'flex',
              alignItems: 'center',
            }}
          >
            PICK
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8506 8.15147L14.8685 7.16957C14.6354 6.93647 14.4444 6.47585 14.4444 6.14555V4.75685C14.4444 4.09625 13.9048 3.55661 13.2444 3.55625H11.8551C11.5252 3.55625 11.064 3.36491 10.8309 3.13199L9.84903 2.15009C9.38247 1.68353 8.61855 1.68353 8.15199 2.15009L7.17009 3.13271C6.93681 3.36581 6.47511 3.55661 6.14589 3.55661H4.75719C4.09749 3.55661 3.55713 4.09625 3.55713 4.75685V6.14555C3.55713 6.47459 3.36615 6.93665 3.13305 7.16957L2.15097 8.15147C1.68405 8.61803 1.68405 9.38195 2.15097 9.84923L3.13305 10.8311C3.36633 11.0642 3.55713 11.5261 3.55713 11.8552V13.2439C3.55713 13.9037 4.09749 14.4441 4.75719 14.4441H6.14589C6.47583 14.4441 6.93699 14.6351 7.17009 14.868L8.15199 15.8503C8.61855 16.3165 9.38247 16.3165 9.84903 15.8503L10.8309 14.868C11.0642 14.6349 11.5252 14.4441 11.8551 14.4441H13.2444C13.9048 14.4441 14.4444 13.9037 14.4444 13.2439V11.8552C14.4444 11.5247 14.6356 11.0641 14.8685 10.8311L15.8506 9.84923C16.3168 9.38195 16.3168 8.61803 15.8506 8.15147ZM8.04795 11.7002L5.40033 9.05219L6.24885 8.20385L8.04813 10.0031L11.752 6.30017L12.6003 7.14851L8.04795 11.7002Z"
                fill={COLORS.secondary[500]}
              />
            </svg>
          </span>
          한 브릿저
        </div>
        <div
          style={{
            ...TYPOGRAPHY.caption['medium'],
            color: COLORS.primary[100],
          }}
        >
          입시 플랜을 함께 계획해 줄 자원봉사 브릿저 선생님들을 소개합니다
        </div>
      </div>
      <Swiper
        className="bridger-swiper"
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
        {BRIDGER_LIST.map((item) => (
          <StyledSwiperSlide key={item.id}>
            <BridgerItem bridger={item} />
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Bridger;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow: visible;
  background: linear-gradient(135deg, #4b70f4 0%, #4b70f4 70%, #2c418e 100%);
  padding: 26px 0 34px 0;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;
