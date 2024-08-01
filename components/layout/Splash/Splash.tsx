'use client';

import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const Splash = () => {
  const [boarding, setBoarding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBoarding(false);
    }, 2000);
  }, []);

  if (!boarding) {
    return null;
  }

  return (
    <Container>
      <svg
        width="254"
        height="31"
        viewBox="0 0 254 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8156 13.9729C10.3709 13.9729 9.25977 17.6148 9.25977 19.4358V6.47217C9.25977 7.12975 9.95408 9.76006 14.8154 9.76006C19.6768 9.76006 20.3715 7.12975 20.3715 6.47217V19.4358C20.3715 17.6148 19.2603 13.9729 14.8156 13.9729Z"
          fill="#748FEE"
        />
        <path
          d="M14.8156 13.9729C10.3709 13.9729 9.25977 17.6148 9.25977 19.4358V6.47217C9.25977 7.12975 9.95408 9.76006 14.8154 9.76006C19.6768 9.76006 20.3715 7.12975 20.3715 6.47217V19.4358C20.3715 17.6148 19.2603 13.9729 14.8156 13.9729Z"
          fill="url(#paint0_linear_1035_15972)"
          fillOpacity="0.2"
        />
        <rect
          y="0.916382"
          width="9.25974"
          height="29.6312"
          rx="0.835533"
          fill="#748FEE"
        />
        <rect
          y="0.916382"
          width="9.25974"
          height="29.6312"
          rx="0.835533"
          fill="url(#paint1_linear_1035_15972)"
          fillOpacity="0.2"
        />
        <rect
          x="20.3711"
          y="0.916382"
          width="9.25974"
          height="29.6312"
          rx="0.835533"
          fill="#748FEE"
        />
        <rect
          x="20.3711"
          y="0.916382"
          width="9.25974"
          height="29.6312"
          rx="0.835533"
          fill="url(#paint2_linear_1035_15972)"
          fillOpacity="0.2"
        />
        <path
          d="M249.926 27.303V4.20178H254.001V27.303H249.926ZM220.836 23.3917C227.151 20.8249 230.248 16.1394 231.348 12.0652V8.56127H222.221V4.64995H244.467V8.56127H235.381V12.0244C236.522 15.732 239.618 20.01 245.934 22.5768L244.548 26.0807C239.089 23.8806 235.503 20.3767 233.466 16.9136C231.47 20.7434 227.844 24.6547 222.221 26.8956L220.836 23.3917Z"
          fill="white"
        />
        <path
          d="M186.357 23.5546C193.853 22.862 198.131 22.0472 200.209 21.3545V18.6655H204.284V21.3545C206.321 22.0472 210.599 22.862 218.095 23.5546L217.769 27.303C210.069 26.6104 205.302 25.6733 202.246 24.5325C199.191 25.6733 194.383 26.6104 186.683 27.303L186.357 23.5546ZM185.664 17.2395V9.17241H206.81V8.23532H185.99V4.64995H210.884V12.7578H189.738V13.6541H211.495V17.2395H185.664ZM214.021 21.0286V4.20178H218.095V21.0286H214.021Z"
          fill="white"
        />
        <path
          d="M149.252 26.4881V22.5768H182.498V26.4881H149.252ZM150.026 20.0507V4.16101H154.1V9.33536H177.568V4.16101H181.643V20.0507H150.026ZM154.1 16.1394H177.568V13.2467H154.1V16.1394Z"
          fill="white"
        />
        <path
          d="M142.022 27.303V4.20178H146.096V27.303H142.022ZM112.605 15.6505C112.605 9.57984 116.395 4.28327 125.725 4.28327C134.973 4.28327 138.844 9.57984 138.844 15.6505C138.844 21.7212 134.973 26.977 125.725 26.977C116.435 26.977 112.605 21.7212 112.605 15.6505ZM116.68 15.6505C116.68 20.2137 118.798 23.0657 125.725 23.0657C132.61 23.0657 134.77 20.2137 134.77 15.6505C134.77 11.0873 132.61 8.19458 125.725 8.19458C118.798 8.19458 116.68 11.0873 116.68 15.6505Z"
          fill="white"
        />
        <path
          d="M103.555 27.303V4.20178H107.63V5.01664H111.908V8.88721H107.63V27.303H103.555ZM75.9316 8.56127V4.64995H100.785V26.8956H96.7105V17.1173H76.3391V13.206H96.7105V8.56127H75.9316Z"
          fill="white"
        />
        <path
          d="M40.7422 26.4881V22.5768H73.9884V26.4881H40.7422ZM41.3126 16.2616C49.8278 14.3874 53.9429 11.2502 55.4911 8.6427V4.6499H59.5654L59.5247 8.6427C61.0729 11.2502 65.1879 14.3874 73.7032 16.2616L72.8883 20.0914C65.0249 18.3395 60.0951 15.3245 57.4875 12.3096C54.9207 15.3245 49.9908 18.3395 42.1274 20.0914L41.3126 16.2616Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1035_15972"
            x1="10.6994"
            y1="19.4359"
            x2="-8.00537"
            y2="-0.194842"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopOpacity="0" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1035_15972"
            x1="6.62508"
            y1="26.2882"
            x2="-3.00509"
            y2="-7.23222"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1035_15972"
            x1="31.6261"
            y1="30.5476"
            x2="7.92104"
            y2="10.7317"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </Container>
  );
};

export default Splash;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  z-index: 200;
  animation: fadeOut 1s ease-in-out 1s forwards;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
