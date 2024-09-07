import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import toast from 'react-hot-toast';

const BridgerItem = ({ bridger }: { bridger: Bridger }) => {
  return (
    <Container
      onClick={() => {
        toast.success('😚 선생님이 강의를 준비 중이에요. 조금만 기다려주세요.');
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '55px',
          gap: '9px',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '51px',
            height: '51px',
            borderRadius: '50%',
          }}
        >
          <Image src={bridger.imageSrc} alt={bridger.name} fill priority />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
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
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '15px',
              letterSpacing: '-1%',
              color: COLORS.grayscale[500],
            }}
          >
            {bridger.university}
          </div>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '15px',
              letterSpacing: '-1%',
              color: COLORS.grayscale[500],
            }}
          >
            {bridger.major} {bridger.studentId}
          </div>
        </div>
      </div>
      <Divider />
      <div
        style={{
          padding: '0 2px',
        }}
      >
        <div>
          {bridger.subject.map((subject, index) => {
            return (
              <span
                key={index}
                style={{
                  ...TYPOGRAPHY.body['small2'],
                  color: COLORS.primary[500],
                }}
              >
                {subject}
                {index !== bridger.subject.length - 1 ? ', ' : ''}
              </span>
            );
          })}
        </div>
        <div
          style={{
            fontSize: '12px',
            fontWeight: 300,
            lineHeight: '17px',
            letterSpacing: '-2%',
            height: '55px',
            color: '#343A40',
          }}
        >
          {bridger.intro.split('\n').map((intro, index) => {
            return <div key={index}>{intro}</div>;
          })}
        </div>
      </div>
      <Tags>
        {bridger.tags.slice(0, 2).map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
      <svg
        width="34"
        height="26"
        viewBox="0 0 34 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          right: '13px',
        }}
      >
        <path
          d="M2.74023 25.9424L0.000976562 23.5254C1.75553 21.9857 3.18783 20.4997 4.29785 19.0674C5.37207 17.6709 6.05241 16.6146 6.33887 15.8984C6.62533 15.1823 6.89388 14.3229 7.14453 13.3203L6.92969 12.998C4.5306 12.998 2.77604 12.4788 1.66602 11.4404C0.555988 10.402 0.000976562 8.79069 0.000976562 6.60645C0.000976562 4.9235 0.609699 3.40169 1.82715 2.04102C3.00879 0.680338 4.49479 0 6.28516 0C8.32617 0 10.027 0.572916 11.3877 1.71875C12.7484 2.86458 13.4287 4.70866 13.4287 7.25098C13.4287 10.6169 12.3903 14.0902 10.3135 17.6709C8.20085 21.2874 5.67643 24.0446 2.74023 25.9424ZM22.667 25.9424L19.9277 23.5254C21.6823 21.9857 23.0967 20.5176 24.1709 19.1211C25.2451 17.7246 25.9434 16.6504 26.2656 15.8984C26.5521 15.1465 26.8206 14.2871 27.0713 13.3203L26.8564 12.998C24.4574 12.998 22.7028 12.4788 21.5928 11.4404C20.4827 10.402 19.9277 8.79069 19.9277 6.60645C19.9277 4.9235 20.5365 3.40169 21.7539 2.04102C22.9355 0.680338 24.4215 0 26.2119 0C28.2529 0 29.9538 0.572916 31.3145 1.71875C32.6751 2.86458 33.3555 4.70866 33.3555 7.25098C33.3555 10.6169 32.3171 14.0902 30.2402 17.6709C28.1276 21.2874 25.6032 24.0446 22.667 25.9424Z"
          fill="#F0F3FD"
        />
      </svg>
    </Container>
  );
};

export default BridgerItem;

const Container = styled.div`
  width: 195px;
  min-width: 195px;
  height: fit-content;
  padding: 14px 13px 12px 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  gap: 13px;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  position: relative;
  &:hover {
    box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.1);
  }
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

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${COLORS.grayscale[100]};
`;
