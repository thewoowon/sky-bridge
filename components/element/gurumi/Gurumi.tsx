import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { forwardRef } from 'react';

const Gurumi = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  return (
    <Container
      style={{
        ...TYPOGRAPHY.body['small2'],
      }}
      ref={ref}
    >
      <AnimationContainer>
        <svg
          width="49"
          height="56"
          viewBox="0 0 49 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="49" height="56" fill="url(#pattern0_1270_23516)" />
          <defs>
            <pattern
              id="pattern0_1270_23516"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1270_23516"
                transform="matrix(0.00777454 0 0 0.00680272 -0.00923226 0)"
              />
            </pattern>
            <image
              id="image0_1270_23516"
              width="131"
              height="147"
              xlinkHref="/images/gurumi/gurumi-1.png"
            />
          </defs>
        </svg>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.51634 0.329413C7.4813 0.232887 7.4174 0.149489 7.33331 0.090553C7.24922 0.0316166 7.14902 0 7.04634 0C6.94365 0 6.84345 0.0316166 6.75937 0.090553C6.67528 0.149489 6.61137 0.232887 6.57634 0.329413L6.09834 1.63541C5.72346 2.65924 5.12986 3.58902 4.3589 4.35998C3.58794 5.13094 2.65816 5.72453 1.63434 6.09941L0.329337 6.57741C0.232812 6.61245 0.149413 6.67635 0.090477 6.76044C0.0315409 6.84453 -7.53403e-05 6.94473 -7.53403e-05 7.04741C-7.53403e-05 7.1501 0.0315409 7.2503 0.090477 7.33438C0.149413 7.41847 0.232812 7.48238 0.329337 7.51741L1.63434 7.99541C2.65816 8.37029 3.58794 8.96389 4.3589 9.73485C5.12986 10.5058 5.72346 11.4356 6.09834 12.4594L6.57634 13.7644C6.61137 13.8609 6.67528 13.9443 6.75937 14.0033C6.84345 14.0622 6.94365 14.0938 7.04634 14.0938C7.14902 14.0938 7.24922 14.0622 7.33331 14.0033C7.4174 13.9443 7.4813 13.8609 7.51634 13.7644L7.99434 12.4594C8.36922 11.4356 8.96281 10.5058 9.73377 9.73485C10.5047 8.96389 11.4345 8.37029 12.4583 7.99541L13.7643 7.51741C13.8609 7.48238 13.9443 7.41847 14.0032 7.33438C14.0621 7.2503 14.0938 7.1501 14.0938 7.04741C14.0938 6.94473 14.0621 6.84453 14.0032 6.76044C13.9443 6.67635 13.8609 6.61245 13.7643 6.57741L12.4583 6.09941C11.4345 5.72453 10.5047 5.13094 9.73377 4.35998C8.96281 3.58902 8.36922 2.65924 7.99434 1.63541L7.51634 0.329413Z"
            fill="#B7C5F6"
          />
        </svg>
        <svg
          width="49"
          height="56"
          viewBox="0 0 49 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="49" height="56" fill="url(#pattern0_1270_23516)" />
          <defs>
            <pattern
              id="pattern0_1270_23516"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1270_23516"
                transform="matrix(0.00777454 0 0 0.00680272 -0.00923226 0)"
              />
            </pattern>
            <image
              id="image0_1270_23516"
              width="131"
              height="147"
              xlinkHref="/images/gurumi/gurumi-1.png"
            />
          </defs>
        </svg>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.51634 0.329413C7.4813 0.232887 7.4174 0.149489 7.33331 0.090553C7.24922 0.0316166 7.14902 0 7.04634 0C6.94365 0 6.84345 0.0316166 6.75937 0.090553C6.67528 0.149489 6.61137 0.232887 6.57634 0.329413L6.09834 1.63541C5.72346 2.65924 5.12986 3.58902 4.3589 4.35998C3.58794 5.13094 2.65816 5.72453 1.63434 6.09941L0.329337 6.57741C0.232812 6.61245 0.149413 6.67635 0.090477 6.76044C0.0315409 6.84453 -7.53403e-05 6.94473 -7.53403e-05 7.04741C-7.53403e-05 7.1501 0.0315409 7.2503 0.090477 7.33438C0.149413 7.41847 0.232812 7.48238 0.329337 7.51741L1.63434 7.99541C2.65816 8.37029 3.58794 8.96389 4.3589 9.73485C5.12986 10.5058 5.72346 11.4356 6.09834 12.4594L6.57634 13.7644C6.61137 13.8609 6.67528 13.9443 6.75937 14.0033C6.84345 14.0622 6.94365 14.0938 7.04634 14.0938C7.14902 14.0938 7.24922 14.0622 7.33331 14.0033C7.4174 13.9443 7.4813 13.8609 7.51634 13.7644L7.99434 12.4594C8.36922 11.4356 8.96281 10.5058 9.73377 9.73485C10.5047 8.96389 11.4345 8.37029 12.4583 7.99541L13.7643 7.51741C13.8609 7.48238 13.9443 7.41847 14.0032 7.33438C14.0621 7.2503 14.0938 7.1501 14.0938 7.04741C14.0938 6.94473 14.0621 6.84453 14.0032 6.76044C13.9443 6.67635 13.8609 6.61245 13.7643 6.57741L12.4583 6.09941C11.4345 5.72453 10.5047 5.13094 9.73377 4.35998C8.96281 3.58902 8.36922 2.65924 7.99434 1.63541L7.51634 0.329413Z"
            fill="#B7C5F6"
          />
        </svg>
        <svg
          width="49"
          height="56"
          viewBox="0 0 49 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="49" height="56" fill="url(#pattern0_1270_23516)" />
          <defs>
            <pattern
              id="pattern0_1270_23516"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_1270_23516"
                transform="matrix(0.00777454 0 0 0.00680272 -0.00923226 0)"
              />
            </pattern>
            <image
              id="image0_1270_23516"
              width="131"
              height="147"
              xlinkHref="/images/gurumi/gurumi-1.png"
            />
          </defs>
        </svg>
      </AnimationContainer>
      답변하러 가는 중...
    </Container>
  );
});

Gurumi.displayName = 'Gurumi';

export default Gurumi;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: #adb5bd;
  padding: 16px 0;
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  svg:nth-of-type(1) {
    animation: ${bounce} 1s infinite;
    animation-delay: 0s;
  }

  svg:nth-of-type(2) {
    animation: ${bounce} 1s infinite;
    animation-delay: 0.1s;
  }

  svg:nth-of-type(3) {
    animation: ${bounce} 1s infinite;
    animation-delay: 0.2s;
  }

  svg:nth-of-type(4) {
    animation: ${bounce} 1s infinite;
    animation-delay: 0.3s;
  }

  svg:nth-of-type(5) {
    animation: ${bounce} 1s infinite;
    animation-delay: 0.4s;
  }
`;
