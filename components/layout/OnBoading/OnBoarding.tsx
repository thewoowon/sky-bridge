'use client';

import { useState } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@/styles/color';
import Image from 'next/image';
import { TYPOGRAPHY } from '@/styles/typography';

const ON_BOARDING: {
  [key: string]: {
    type: 'first' | 'second' | 'final';
    src: string;
    comment: string;
  };
} = {
  first: {
    type: 'first',
    src: '/images/onboarding/first.png',
    comment: '입시와 관련된 모든 궁금증,\n질문하기를 통해 해소하세요.',
  },
  second: {
    type: 'second',
    src: '/images/onboarding/second.png',
    comment: '입시와 관련된 모든 소식,\n스카이 브릿지가 준비했어요.',
  },
  final: {
    type: 'final',
    src: '/images/onboarding/final.png',
    comment: 'AI 과외 선생님 구르미를 통해\n맞춤형 전략을 컨설팅 받아보세요.',
  },
};

const OnBoarding = () => {
  const [onBoarding, setOnBoarding] = useState(true);
  const [sequence, setSequence] = useState<'first' | 'second' | 'final'>(
    'first',
  );

  if (!onBoarding) {
    return null;
  }
  return (
    <Container>
      <Image
        src={ON_BOARDING[sequence].src}
        alt={ON_BOARDING[sequence].comment}
        width={277.88}
        height={601.7}
        priority
      />
      <BottomSheet
        style={{
          ...TYPOGRAPHY.display['large'],
          fontWeight: 600,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {ON_BOARDING[sequence].comment.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          <Pagination>
            {['first', 'second', 'final'].map((type) => (
              <div
                key={type}
                style={{
                  transition: 'all 0.2s ease-in-out',
                  width: type === sequence ? 14 : 8,
                  height: 8,
                  borderRadius: '10px',
                  backgroundColor:
                    type === sequence ? '#848C94' : COLORS.grayscale[200],
                }}
              />
            ))}
          </Pagination>
          <Button
            onClick={() => {
              if (sequence === 'first') {
                setSequence('second');
              } else if (sequence === 'second') {
                setSequence('final');
              } else {
                setOnBoarding(false);
              }
            }}
          >
            {sequence === 'final' ? '시작하기' : '다음'}
          </Button>
        </div>
      </BottomSheet>
    </Container>
  );
};

export default OnBoarding;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: ${COLORS.primary[50]};
  z-index: 100;
`;

const Pagination = styled.div`
  display: flex;
  gap: 8px;
`;

const BottomSheet = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 280px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 35px 16px 54px 16px;
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

  &:disabled {
    background-color: ${COLORS.grayscale[200]};
    color: ${COLORS.grayscale[500]};
    cursor: not-allowed;
  }
`;
