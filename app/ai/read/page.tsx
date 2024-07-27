'use client';

import SessionResult from '@/components/module/Ai/SessionResult';
import useBackgroundColorStore from '@/store/useBackgroundColorStore';
import styled from '@emotion/styled';
import { Suspense, useEffect } from 'react';

const ReadPage = () => {
  const { changeBackgroundColor } = useBackgroundColorStore();
  useEffect(() => {
    changeBackgroundColor('transparent');
    // es린트 무시
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Main>
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
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 57px 16px 124px 16px;
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
  gap: 20px;
  position: relative;
`;
