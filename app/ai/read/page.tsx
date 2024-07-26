'use client';

import SessionResult from '@/components/module/Ai/SessionResult';
import styled from '@emotion/styled';
import { Suspense } from 'react';

const ReadPage = () => {
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
  gap: 20px;
  position: relative;
`;
