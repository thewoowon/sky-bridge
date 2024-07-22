import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import '@styles/banner-swiper.css';
import styled from '@emotion/styled';
import { PaginationOptions } from 'swiper/types';
import { Banner1, Banner2, Banner3 } from './assets';

const Banner = () => {
  const pagination: PaginationOptions = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<div class="' + className + '"></div>';
    },
  };
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="banner-swiper"
        spaceBetween={20}
      >
        <SwiperSlide>
          <Banner1 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner2 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner3 />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0 16px;
`;
