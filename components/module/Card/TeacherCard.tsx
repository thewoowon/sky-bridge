import { getTeacher } from '@/utils/getTeacher';
import Image from 'next/image';
import styled from '@emotion/styled';
import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';

const TeacherCard = () => {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 0 0 0',
        }}
      >
        <div
          style={{
            ...TYPOGRAPHY.display['large'],
            textAlign: 'center',
          }}
        >
          현우진 강사님
        </div>
        <div
          style={{
            textAlign: 'center',
            ...TYPOGRAPHY.body['medium2'],
          }}
        >
          “시작부터 끝까지!
          <br />
          수학은 누구나 현우진”
        </div>
      </div>
      <div
        style={{
          width: '240px',
          height: '220px',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <Image
          src={getTeacher('현우진')}
          alt="현우진"
          fill
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <svg
        style={{
          position: 'absolute',
          top: '180px',
          left: '-50px',
          zIndex: 0,
        }}
        width="360"
        height="360"
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7" filter="url(#filter0_f_690_9163)">
          <circle
            cx="180"
            cy="180"
            r="176"
            fill="url(#paint0_radial_690_9163)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_690_9163"
            x="0"
            y="0"
            width="360"
            height="360"
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
              result="effect1_foregroundBlur_690_9163"
            />
          </filter>
          <radialGradient
            id="paint0_radial_690_9163"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(183.503 3.99996) rotate(113.288) scale(366.54 1001.51)"
          >
            <stop stopColor="#748FEE" />
            <stop offset="0.491828" stopColor="#A0B3F3" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        style={{
          position: 'absolute',
          top: '110px',
          right: '60px',
          zIndex: 0,
        }}
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.7" filter="url(#filter0_f_684_3150)">
          <circle cx="28" cy="28" r="24" fill="url(#paint0_radial_684_3150)" />
        </g>
        <defs>
          <filter
            id="filter0_f_684_3150"
            x="0"
            y="0"
            width="56"
            height="56"
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
              result="effect1_foregroundBlur_684_3150"
            />
          </filter>
          <radialGradient
            id="paint0_radial_684_3150"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(28.4776 3.99999) rotate(106.616) scale(159.936 436.999)"
          >
            <stop stopColor="#748FEE" />
            <stop offset="0.491828" stopColor="#A0B3F3" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <RefreshButton>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.90481 4.27953C11.4781 3.85236 13.1443 3.91602 14.6804 4.46201C16.2165 5.00799 17.5491 6.01023 18.4998 7.33453V5.74953C18.4998 5.55062 18.5788 5.35986 18.7195 5.2192C18.8601 5.07855 19.0509 4.99953 19.2498 4.99953C19.4487 4.99953 19.6395 5.07855 19.7801 5.2192C19.9208 5.35986 19.9998 5.55062 19.9998 5.74953V9.99953H15.7498C15.5509 9.99953 15.3601 9.92052 15.2195 9.77986C15.0788 9.63921 14.9998 9.44844 14.9998 9.24953C14.9998 9.05062 15.0788 8.85985 15.2195 8.7192C15.3601 8.57855 15.5509 8.49953 15.7498 8.49953H17.4768C16.6935 7.27402 15.5218 6.34665 14.1491 5.86576C12.7764 5.38488 11.2821 5.37829 9.90523 5.84703C8.52836 6.31577 7.34849 7.23276 6.55437 8.45131C5.76025 9.66986 5.39777 11.1195 5.52491 12.5684C5.65206 14.0173 6.26149 15.3817 7.25571 16.4434C8.24992 17.505 9.57147 18.2024 11.0089 18.4242C12.4464 18.646 13.9167 18.3792 15.1847 17.6666C16.4526 16.954 17.4449 15.8367 18.0028 14.4935C18.039 14.4004 18.0935 14.3155 18.163 14.2437C18.2325 14.1719 18.3156 14.1147 18.4075 14.0755C18.4995 14.0363 18.5983 14.0159 18.6982 14.0154C18.7981 14.0149 18.8971 14.0344 18.9894 14.0727C19.0817 14.111 19.1654 14.1674 19.2356 14.2385C19.3058 14.3096 19.361 14.394 19.3982 14.4868C19.4353 14.5795 19.4535 14.6788 19.4517 14.7787C19.4499 14.8786 19.4282 14.9771 19.3878 15.0685C18.8666 16.3231 18.0345 17.4242 16.97 18.2682C15.9055 19.1121 14.6436 19.6711 13.3032 19.8924C11.9629 20.1137 10.5883 19.9901 9.30894 19.5331C8.02962 19.0761 6.88773 18.3009 5.99092 17.2805C5.09412 16.2601 4.47193 15.0281 4.18302 13.7007C3.8941 12.3733 3.94797 10.9942 4.33955 9.69332C4.73113 8.39249 5.44752 7.2128 6.42119 6.26546C7.39486 5.31811 8.59374 4.63532 9.90481 4.27953Z"
            fill="white"
          />
        </svg>
      </RefreshButton>
    </Container>
  );
};

export default TeacherCard;

const Container = styled.div`
  max-width: 387px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: ${COLORS.secondary[600]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const RefreshButton = styled.button`
  position: absolute;
  bottom: 14px;
  right: 14px;
  width: 44px;
  height: 44px;
  background-color: ${COLORS.grayscale[500]};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${COLORS.primary[600]};
  }
`;
