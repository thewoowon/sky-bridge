'use client';

import useBackgroundColorStore from '@/store/useBackgroundColorStore';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import Image from 'next/image';
import { TYPOGRAPHY } from '@/styles/typography';
import { COLORS } from '@/styles/color';

const AiPage = () => {
  const { changeBackgroundColor } = useBackgroundColorStore();

  useEffect(() => {
    changeBackgroundColor('transparent');
  }, []);
  return (
    <Main>
      <Wrapper>
        <TitleBox
          style={{
            ...TYPOGRAPHY.title['large'],
          }}
        >
          안녕하세요? <br />
          저는 제공해주신 정보를 바탕으로
          <br />
          맞춤형 학습을 계획해드리는
          <br />
          <span
            style={{
              color: COLORS.primary[700],
            }}
          >
            AI 과외 선생님, 구르미에요.
          </span>
        </TitleBox>
        <div
          style={{
            width: '200px',
            height: '224px',
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
        <ButtonWrapper>
          <Button>안녕</Button>
        </ButtonWrapper>
      </Wrapper>
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
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-top: 50px;
  gap: 10px;
`;

const TitleBox = styled.div`
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  background-color: ${COLORS.primary[500]};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${COLORS.primary[600]};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;
