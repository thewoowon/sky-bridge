'use client';

import { Banner, Materials, News, Schedule } from '@/components/module';
import useBackgroundColorStore from '@/store/useBackgroundColorStore';
import { COLORS } from '@/styles/color';
import styled from '@emotion/styled';
import { useEffect } from 'react';

export default function Home() {
  const { changeBackgroundColor } = useBackgroundColorStore();

  useEffect(() => {
    changeBackgroundColor(COLORS.grayscale[50]);
  }, []);

  return (
    <Main>
      <Banner />
      <Schedule />
      <Materials />
      <News />
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 70px;
  padding-bottom: 154px;
  background-color: ${COLORS.grayscale[50]};
  gap: 28px;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
