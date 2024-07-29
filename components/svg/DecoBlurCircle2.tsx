const DecoBlurCircle2 = () => {
  return (
    <svg
      className="deco-blur-circle-2"
      width="630"
      height="630"
      viewBox="0 0 630 630"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1" filter="url(#filter0_if_2678_474)">
        <circle
          cx="314.978"
          cy="314.979"
          r="303.786"
          transform="rotate(30 314.978 314.979)"
          fill="url(#paint0_linear_2678_474)"
        />
        <circle
          cx="314.978"
          cy="314.979"
          r="303.786"
          transform="rotate(30 314.978 314.979)"
          fill="white"
          fillOpacity="0.2"
        />
      </g>
      <defs>
        <filter
          id="filter0_if_2678_474"
          x="0.140625"
          y="0.142578"
          width="629.676"
          height="629.673"
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
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="3"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_2678_474"
          />
          <feOffset dx="2" dy="0.5" />
          <feGaussianBlur stdDeviation="0.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_2678_474"
          />
          <feGaussianBlur
            stdDeviation="5.5"
            result="effect2_foregroundBlur_2678_474"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2678_474"
          x1="609.839"
          y1="-134.917"
          x2="516.935"
          y2="174.942"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.9" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DecoBlurCircle2;
