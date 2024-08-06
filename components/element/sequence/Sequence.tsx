import { TYPOGRAPHY } from '@/styles/typography';
import { useEffect, useState } from 'react';
import '@styles/sequence-loader.css';
import { motion } from 'framer-motion';

const texts = [
  '서울대 합격자를 가장 많이 배출한\n학교는 어디일까?',
  '정답은 외대부고야. 외대부고는\n서울대 합격자를 가장 많이 배출한 학교로 유명해.',
  '정시최초까지 58명(수시 28명+정시 30명)의 실적을\n내며 지난해에 이어 정상의 자리를 굳혔어.',
  '일타강사 연봉 TOP 3는 누구일까?',
  'TOP 3부터 순서대로 이투스 정승제\n 이투스 이지영, 메가 스터디 현우진이야.',
  '이들은 하나같이 연 100억 이상의 수익을 올리며\n강사로서의 명성을 떨친 인물들이야.',
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
    }, 4000); // 5초마다 index 변경

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
