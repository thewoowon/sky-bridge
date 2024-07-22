import styled from '@emotion/styled';
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <Container
      onClick={() => {
        router.push('/');
      }}
    >
      <LogoIcon />
      <LogoText />
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;
