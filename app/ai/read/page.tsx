'use client';

import Circle from '@/components/module/Ai/Circle';
import SessionResult from '@/components/module/Ai/SessionResult';
import Snow from '@/components/module/Ai/Snow';
import Twinkle from '@/components/module/Ai/Twinkle';
import useBackgroundColorStore from '@/store/useBackgroundColorStore';
import useHeaderStore from '@/store/useHeaderStore';
import styled from '@emotion/styled';
import { Suspense, useEffect } from 'react';

const ReadPage = () => {
  const { changeBackgroundColor } = useBackgroundColorStore();
  const { change } = useHeaderStore();
  useEffect(() => {
    changeBackgroundColor('transparent');
    change('none');
  }, [changeBackgroundColor, change]);
  return (
    <Main>
      <Background>
        <Circle
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '50%',
            zIndex: 0,
            transform: 'translate(-50%, 50%)',
          }}
        />
        <Twinkle
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 0,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <Snow
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            zIndex: 0,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Background>
      <Suspense fallback={<div>Loading...</div>}>
        <SessionResult />
      </Suspense>
    </Main>
  );
};

export default ReadPage;

const Main = styled.main`
  width: 100%;
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 124px 0;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
  position: relative;
  gap: 20px;
  position: relative;
  z-index: 0;
`;

const Background = styled.div`
  width: 100%;
  height: 420px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background: linear-gradient(
    180deg,
    rgba(109, 129, 200, 0.5) 0%,
    rgba(227, 253, 111, 0.3) 100%
  );
  overflow: hidden;
`;
