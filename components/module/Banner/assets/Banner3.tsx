import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';

const Banner3 = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.42 7.12657V13.0999H8.44667V8.52657C8.49333 4.23323 10.7333 1.01323 14.42 0.313232V3.25323C12.9267 3.5799 11.7133 5.3999 11.7133 7.12657H14.42ZM5.92667 7.12657V13.0999H0V8.57324C0 4.2799 2.24 1.0599 5.92667 0.359899V3.2999C4.43333 3.62657 3.22 5.44657 3.17333 7.12657H5.92667Z"
            fill="white"
          />
        </svg>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              ...TYPOGRAPHY.display['large'],
              color: 'white',
              textAlign: 'left',
            }}
          >
            자기 자신을 이겨낼 수 있는 <br />
            힘을 가진 사람이 가장 강하다.
          </div>
          <div
            style={{
              ...TYPOGRAPHY.caption['medium'],
              lineHeight: '16px',
              letterSpacing: '-1%',
              color: 'white',
            }}
          >
            루시우스 아나에우스 세네카
          </div>
        </div>
      </div>
      <svg
        style={{ position: 'absolute', right: 24, bottom: 0 }}
        width="196"
        height="155"
        viewBox="0 0 196 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7" filter="url(#filter0_f_327_3396)">
          <circle cx="98" cy="80" r="94" fill="url(#paint0_linear_327_3396)" />
        </g>
        <defs>
          <filter
            id="filter0_f_327_3396"
            x="0"
            y="-18"
            width="196"
            height="196"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_327_3396"
            />
          </filter>
          <linearGradient
            id="paint0_linear_327_3396"
            x1="286.5"
            y1="-52"
            x2="174.841"
            y2="93.6323"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#748FEE" />
            <stop offset="1" stopColor="#748FEE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </Container>
  );
};

export default Banner3;

const Container = styled.div`
  width: 100%;
  height: 155px;
  overflow: hidden;
  background: linear-gradient(45deg, #343a40 10%, #212529 100%);
  position: relative;
  border-radius: 12px;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  padding: 23px 25px;
`;
