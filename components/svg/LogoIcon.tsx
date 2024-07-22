const LogoIcon = ({
  width = 18,
  height = 19,
  fill = '#ADB5BD',
}: SvgIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.07715 8.55016C6.67715 8.55016 6.07715 10.5167 6.07715 11.5V4.5C6.07715 4.85507 6.45206 6.27537 9.07706 6.27537C11.7021 6.27537 12.0771 4.85507 12.0771 4.5V11.5C12.0771 10.5167 11.4771 8.55016 9.07715 8.55016Z"
        fill="#748FEE"
      />
      <path
        d="M9.07715 8.55016C6.67715 8.55016 6.07715 10.5167 6.07715 11.5V4.5C6.07715 4.85507 6.45206 6.27537 9.07706 6.27537C11.7021 6.27537 12.0771 4.85507 12.0771 4.5V11.5C12.0771 10.5167 11.4771 8.55016 9.07715 8.55016Z"
        fill="url(#paint0_linear_314_675)"
        fillOpacity="0.2"
      />
      <rect x="1.07715" y="1.5" width="5" height="16" rx="1" fill="#748FEE" />
      <rect
        x="1.07715"
        y="1.5"
        width="5"
        height="16"
        rx="1"
        fill="url(#paint1_linear_314_675)"
        fillOpacity="0.2"
      />
      <rect x="12.0771" y="1.5" width="5" height="16" rx="1" fill="#748FEE" />
      <rect
        x="12.0771"
        y="1.5"
        width="5"
        height="16"
        rx="1"
        fill="url(#paint2_linear_314_675)"
        fillOpacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_314_675"
          x1="6.85449"
          y1="11.5"
          x2="-3.24554"
          y2="0.900002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_314_675"
          x1="4.6545"
          y1="15.2"
          x2="-0.545514"
          y2="-2.90001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_314_675"
          x1="18.1545"
          y1="17.5"
          x2="5.35447"
          y2="6.80002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LogoIcon;
