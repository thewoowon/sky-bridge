import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import '@styles/sequence-loader.css';
import { motion } from 'framer-motion';

const texts = [
  '기다리는 동안 퀴즈 하나 맞혀볼래?\n일희일비(一喜一悲)"의 뜻은 무엇일까?',
  '정답은 한 번 기뻐하고 한 번 슬퍼한다는 뜻으로,\n상황에 따라 감정이 자주 변함을 의미해.',
  '어땠어? 이미 알고 있었지?\n다음에 더 재밌는 퀴즈로 찾아올게!',
];

type SequenceProps = {
  isLoading?: boolean;
};

const Sequence = ({ isLoading }: SequenceProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // 5초마다 index 변경

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);
  if (!isLoading) return null;

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '45px',
      }}
    >
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
        style={{
          ...TYPOGRAPHY.body['large1'],
          color: '#666D75',
          textAlign: 'center',
          padding: '11px 0',
        }}
      >
        {texts[index].split('\n').map((text, i) => (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              ...TYPOGRAPHY.title['large'],
            }}
            key={i}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sequence;
