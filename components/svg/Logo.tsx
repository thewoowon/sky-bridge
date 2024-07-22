import styled from '@emotion/styled';
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';

const Logo = () => {
  return (
    <Container>
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
`;
