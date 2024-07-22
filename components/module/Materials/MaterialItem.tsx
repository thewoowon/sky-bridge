import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Document from './assets/Document';
import Strategy from './assets/Strategy';
import Discussion from './assets/Discussion';
import { forwardRef } from 'react';

const MaterialItem = forwardRef<HTMLDivElement, { material: Material }>(
  ({ material }, ref) => {
    return (
      <Container
        ref={ref}
        type={material.type}
        onClick={() => {
          window.open(material.link, '_blank');
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
          }}
        >
          <div>
            <div
              style={{
                ...TYPOGRAPHY.body['large1'],
                lineHeight: '22px',
              }}
            >
              {material.title}
            </div>
            <div
              style={{
                ...TYPOGRAPHY.body['large1'],
                lineHeight: '22px',
              }}
            >
              {material.subTitle}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                ...TYPOGRAPHY.caption['medium'],
                color: COLORS.grayscale[600],
              }}
            >
              <span
                style={{
                  ...TYPOGRAPHY.body['small2'],
                  color: COLORS.tertiary['red'],
                }}
              >
                {material.view.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              명의 친구들이 확인했어요!
            </div>
          </div>
        </div>
        <IconBox>
          {material.type === 'document' && <Document />}
          {material.type === 'strategy' && <Strategy />}
          {material.type === 'discussion' && <Discussion />}
        </IconBox>
      </Container>
    );
  },
);

export default MaterialItem;

MaterialItem.displayName = 'MaterialItem';

const Container = styled.div<{
  type: Material['type'];
}>`
  width: 100%;
  height: 108px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ type }) =>
    type === 'document'
      ? COLORS.secondary[400]
      : type === 'strategy'
        ? COLORS.tertiary['yellow']
        : COLORS.primary[100]};

  border-radius: 12px;
  border: 1px solid
    ${({ type }) =>
      type === 'document'
        ? COLORS.secondary[600]
        : type === 'strategy'
          ? '#FFE455'
          : '#D2DBF9'};
  box-shadow: 0px 3px 12px 0 rgba(0, 0, 0, 0.06);
  padding: 12px 18px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
  }
`;

const IconBox = styled.div`
  position: absolute;
  top: 59px;
  right: 16px;
`;
