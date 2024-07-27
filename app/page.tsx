'use client';

import { Banner, Materials, News, Schedule } from '@/components/module';
import useBackgroundColorStore from '@/store/useBackgroundColorStore';
import useHeaderStore from '@/store/useHeaderStore';
import { COLORS } from '@/styles/color';
import styled from '@emotion/styled';
import { useEffect } from 'react';

export default function Home() {
  const { changeBackgroundColor } = useBackgroundColorStore();
  const { change } = useHeaderStore();

  useEffect(() => {
    changeBackgroundColor(COLORS.grayscale[50]);
    change('block');
  }, [changeBackgroundColor, change]);

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
  height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 63px;
  padding-bottom: 154px;
  background-color: ${COLORS.grayscale[50]};
  gap: 28px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
