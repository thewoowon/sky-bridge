'use client';

import useBackgroundColorStore from '@/store/useBackgroundColorStore';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Image from 'next/image';

const AiPage = () => {
  const { changeBackgroundColor } = useBackgroundColorStore();

  useEffect(() => {
    changeBackgroundColor('transparent');
  }, []);
  return (
    <Main>
      <h1>AI Page</h1>
      <div
        style={{
          width: '180px',
          height: '202px',
          position: 'relative',
        }}
      >
        <Image
          src={
            'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/fe2d3c33-2d1f-4289-e5b4-acfc9ca71200/public'
          }
          alt="gurumi"
          fill
          priority
          sizes="410px"
        />
      </div>
    </Main>
  );
};
export default AiPage;

const Main = styled.main`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 57px;
  padding-bottom: 88px;
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
`;
