import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import MaterialItem from './MaterialItem';
import DownChevron16x16 from '@/components/svg/DownChevron16x16';
import { useEffect, useRef, useState } from 'react';

const MATERIALS_DATA: Material[] = [
  {
    title: '2025학년도 대학수학능력시험',
    subTitle: '6월 모의평가 채점 결과',
    link: 'https://www.google.com',
    view: 21455,
    type: 'document',
  },
  {
    title: '주요 상위권 대학 입시결과 발표!',
    subTitle: '2025학년도 교과 전형 대비 전략은?',
    link: 'https://www.google.com',
    view: 8182,
    type: 'strategy',
  },
  {
    title: '사탐으로 메디컬 합격',
    subTitle: '할 수 있을까?',
    link: 'https://www.google.com',
    view: 29700,
    type: 'discussion',
  },
  {
    title: '입학=취업+α ',
    subTitle: '2025학년도 계약학과 알아보기',
    link: 'https://www.google.com',
    view: 21188,
    type: 'document',
  },
  {
    title: '[속보] 의대 2천명 증원',
    subTitle: '전국 32개 대학 정원 배분 완료',
    link: 'https://www.google.com',
    view: 24888,
    type: 'strategy',
  },
];

const Materials = () => {
  const [more, setMore] = useState<number>(3);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [more]);
  return (
    <Container>
      <div
        style={{
          ...TYPOGRAPHY.title['medium'],
        }}
      >
        🔥{' '}
        <span
          style={{
            color: COLORS.tertiary['red'],
          }}
        >
          HOT
        </span>{' '}
        입시 자료
      </div>
      {MATERIALS_DATA.slice(0, more).map((material, index) => {
        if (more === 5 && index === 2) {
          return (
            <MaterialItem ref={scrollRef} key={index} material={material} />
          );
        }
        return <MaterialItem key={index} material={material} />;
      })}
      {MATERIALS_DATA.length > 3 && (
        <Button
          onClick={() => {
            setMore((prev) => (prev === 3 ? 5 : 3));
          }}
        >
          <div
            style={{
              ...TYPOGRAPHY.caption['medium'],
              lineHeight: '21px',
            }}
          >
            {more === 3 ? '더보기' : '접기'}
          </div>
          {more === 3 ? (
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7625 1.8871L6.44327 7.32258C6.37995 7.3871 6.31135 7.43269 6.23747 7.45935C6.16359 7.48645 6.08443 7.5 6 7.5C5.91557 7.5 5.83641 7.48645 5.76253 7.45935C5.68865 7.43269 5.62005 7.3871 5.55673 7.32258L0.221636 1.8871C0.0738783 1.73656 -2.60153e-07 1.54839 -2.70024e-07 1.32258C-2.79894e-07 1.09677 0.0791554 0.903226 0.237467 0.741936C0.395778 0.580646 0.580475 0.500001 0.791556 0.500001C1.00264 0.500001 1.18733 0.580646 1.34565 0.741936L6 5.48387L10.6544 0.741936C10.8021 0.591398 10.9841 0.516129 11.2002 0.516129C11.4168 0.516129 11.6042 0.596774 11.7625 0.758064C11.9208 0.919355 12 1.10753 12 1.32258C12 1.53763 11.9208 1.72581 11.7625 1.8871Z"
                fill="#666D75"
              />
            </svg>
          ) : (
            <svg
              style={{
                transform: 'rotate(180deg)',
              }}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7625 1.8871L6.44327 7.32258C6.37995 7.3871 6.31135 7.43269 6.23747 7.45935C6.16359 7.48645 6.08443 7.5 6 7.5C5.91557 7.5 5.83641 7.48645 5.76253 7.45935C5.68865 7.43269 5.62005 7.3871 5.55673 7.32258L0.221636 1.8871C0.0738783 1.73656 -2.60153e-07 1.54839 -2.70024e-07 1.32258C-2.79894e-07 1.09677 0.0791554 0.903226 0.237467 0.741936C0.395778 0.580646 0.580475 0.500001 0.791556 0.500001C1.00264 0.500001 1.18733 0.580646 1.34565 0.741936L6 5.48387L10.6544 0.741936C10.8021 0.591398 10.9841 0.516129 11.2002 0.516129C11.4168 0.516129 11.6042 0.596774 11.7625 0.758064C11.9208 0.919355 12 1.10753 12 1.32258C12 1.53763 11.9208 1.72581 11.7625 1.8871Z"
                fill="#666D75"
              />
            </svg>
          )}
        </Button>
      )}
    </Container>
  );
};

export default Materials;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 16px;
  transition: all 0.2s ease-in-out;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  background-color: white;
  padding: 13px 0;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  svg {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    svg {
      transform: translateX(2px);
    }

    background-color: ${COLORS.grayscale[100]};
  }
`;
