import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';

const BridgerItem = ({ bridger }: { bridger: Bridger }) => {
  return (
    <Container>
      <div
        style={{
          ...TYPOGRAPHY.body['large1'],
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {bridger.name}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '70px',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '70px',
            height: '70px',
            borderRadius: '50%',
          }}
        >
          <Image src={bridger.imageSrc} alt={bridger.name} fill priority />
        </div>
      </div>
      <div
        style={{
          ...TYPOGRAPHY.caption['medium'],
        }}
      >
        {bridger.intro.slice(0, 26)}...
      </div>
      <Tags>
        {bridger.tags.slice(0, 2).map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
    </Container>
  );
};

export default BridgerItem;

const Container = styled.div`
  width: 156px;
  min-width: 156px;
  height: fit-content;
  padding: 14px 13px 18px 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  gap: 13px;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
`;

const Tags = styled.div`
  display: flex;
  gap: 6px;
`;

const Tag = styled.div`
  padding: 3px 9px;
  background-color: ${COLORS.primary[50]};
  color: ${COLORS.primary[600]};
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -2%;
`;
