import DecoBlurCircle1 from '@/components/svg/DecoBlurCircle1';
import DecoBlurCircle2 from '@/components/svg/DecoBlurCircle2';
import DecoCloud1 from '@/components/svg/DecoCloud1';
import DecoCloud2 from '@/components/svg/DecoCloud2';
import DecoCloud3 from '@/components/svg/DecoCloud3';
import DecoStar1 from '@/components/svg/DecoStar1';
import DecoStar2 from '@/components/svg/DecoStar2';
import DecoStar3 from '@/components/svg/DecoStar3';
import DecoTwinkle1 from '@/components/svg/DecoTwinkle1';
import DecoTwinkle2 from '@/components/svg/DecoTwinkle2';
import DecoTwinkle3 from '@/components/svg/DecoTwinkle3';
import PwaCloud from '@/components/svg/PwaCloud';
import PwaGraduationCap from '@/components/svg/PwaGraduationCap';
import PwaHand from '@/components/svg/PwaHand';
import Subtitle from '@/components/svg/Subtitle';
import Title from '@/components/svg/Title';

const Background = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <div className="background-title">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Subtitle />
          <Title />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            color: 'white',
            fontSize: '18px',
            lineHeight: '200%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <PwaHand />
            <div>
              <div
                style={{
                  fontWeight: 'bold',
                }}
              >
                #1. 나한테 맞는 강사, 문제집을 ‘질문’해요.
              </div>
              <div>공식 교육 데이터를 학습한 AI가 답변해줄게요!</div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <PwaCloud />
            <div>
              <div
                style={{
                  fontWeight: 'bold',
                }}
              >
                #2. 목표한 대학에 가고 싶다면? 스카이 AI!
              </div>
              <div>성적에 맞는 학습 계획을 설계해드릴게요.</div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <PwaGraduationCap />
            <div>
              <div
                style={{
                  fontWeight: 'bold',
                }}
              >
                #3. ‘입시 소식’으로 필요한 정보를 찾아요.
              </div>
              <div>시간 내서 정보를 찾을 필요 없어요.</div>
            </div>
          </div>
        </div>
      </div>
      <DecoCloud1 />
      <DecoCloud2 />
      <DecoCloud3 />
      <DecoStar1 />
      <DecoStar2 />
      <DecoStar3 />
      <DecoBlurCircle1 />
      <DecoBlurCircle2 />
      <DecoTwinkle1 />
      <DecoTwinkle2 />
      <DecoTwinkle3 />
    </div>
  );
};

export default Background;
