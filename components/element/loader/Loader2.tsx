import '@styles/loader2.css';
import { useState } from 'react';

type Loader2Props = {
  isLoading?: boolean;
};

const Loader2 = ({ isLoading }: Loader2Props) => {
  const [percentage, setPercentage] = useState(0);

  // 100ms마다 1%씩 증가
  if (isLoading && percentage < 100) {
    setTimeout(() => {
      setPercentage(percentage + 1);
    }, 100);
  }
  return (
    <div
      style={{
        width: '104px',
        height: '104px',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#748fee',
        }}
      >
        {percentage}%
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader2;
