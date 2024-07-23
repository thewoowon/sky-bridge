import Cloud from '@/components/svg/Cloud';
import FrontHand from '@/components/svg/FrontHand';
import Graduation from '@/components/svg/Graduation';
import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { usePathname, useRouter } from 'next/navigation';

const GNB = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <Container
      style={{
        ...TYPOGRAPHY.body['small2'],
      }}
    >
      <GNBItem
        selected={pathName === '/chat'}
        onClick={() => {
          router.push('/chat');
        }}
      >
        <FrontHand />
        질문하기
      </GNBItem>
      <GNBItem
        selected={pathName === '/'}
        onClick={() => {
          router.push('/');
        }}
      >
        <Graduation />
        입시 소식
      </GNBItem>
      <GNBItem
        selected={pathName === '/ai'}
        onClick={() => {
          router.push('/ai');
        }}
      >
        <Cloud />
        스카이 AI
      </GNBItem>
    </Container>
  );
};

export default GNB;

const Container = styled.div`
  width: 100%;
  height: 88px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background-color: white;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow: hidden;
`;

const GNBItem = styled.div<{
  selected?: boolean;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  color: ${COLORS.grayscale[400]};
  transition: all 0.2s ease-in-out;
  min-width: 50px;
  padding-top: 10px;
  cursor: pointer;

  &:hover {
    color: ${COLORS.primary[600]};
    letter-spacing: 0%;
    font-weight: 800;
    // background-color: ${COLORS.primary[50]};
  }

  ${({ selected }) =>
    selected &&
    `
    color: ${COLORS.primary[600]};
    font-weight: 800;
    letter-spacing: 0%;

    svg > path {
      fill: ${COLORS.primary[600]};
    }
  `}

  svg > path {
    width: 24px;
    height: 24px;
    transition: fill 0.2s ease-in-out;
  }

  &:hover svg > path {
    fill: ${COLORS.primary[600]};
  }
`;
