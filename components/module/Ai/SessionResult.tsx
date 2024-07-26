import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

const PLAN_ARRAY: {
  from: string;
  to: string;
  content: string;
}[] = [
  {
    from: '7월',
    to: '12월',
    content: '개념 학습 및 기초 문제 풀이',
  },
  {
    from: '1월',
    to: '6월',
    content: '심화 학습 및 실전 모의고사',
  },
  {
    from: '7월',
    to: '12월',
    content: '개념 학습 및 기초 문제 풀이',
  },
  {
    from: '1월',
    to: '6월',
    content: '심화 학습 및 실전 모의고사',
  },
  {
    from: '7월',
    to: '12월',
    content: '개념 학습 및 기초 문제 풀이',
  },
  {
    from: '1월',
    to: '6월',
    content: '심화 학습 및 실전 모의고사',
  },
];

const SessionResult = () => {
  const params = useSearchParams();
  const router = useRouter();

  const shareContent = async () => {
    const shareData: ShareData = {
      title: '맞춤 학습 계획 결과 - 스카이브릿지',
      text: '맞춤 학습 계획 결과를 확인해보세요!',
      url: `${window.location.origin}/ai/read?session_id=${params.get('session_id')}`,
    };

    // 모바일 브라우저의 커버리지는 85% 정도,
    // 나머지 15%는 클립보드로 복사하는 방식으로 대응
    // TODO: 지원하지 않는 브라우저에 대한 fallback 처리
    // 지원하지 않는 브라우저 -> Android webview, Firefox for Android

    // navigator.share API를 지원하는 브라우저인지 확인
    // 현재 브라우저 정보를 확인하는 방법은?
    // https://developer.mozilla.org/en-US/docs/Web/API/Navigator

    // 현재 브라우저가 Android webview 또는 Firefox for Android인 경우
    if (
      navigator.userAgent.includes('wv') &&
      navigator.userAgent.includes('Android')
    ) {
      copyToClipboard(shareData.url || '');
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      copyToClipboard(shareData.url || '');
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('🦄 클립보드에 복사되었습니다!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };
  return (
    <>
      <NavBox
        style={{
          ...TYPOGRAPHY.body['large1'],
        }}
      >
        <svg
          onClick={() => {
            router.back();
          }}
          style={{
            cursor: 'pointer',
          }}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.998 19.5L7.99805 12.5L14.998 5.5"
            stroke="#1E1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        맞춤 학습 계획
        <svg
          onClick={() => {
            shareContent();
          }}
          style={{
            cursor: 'pointer',
          }}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="7.5"
            y="7.1084"
            width="10.5"
            height="13.3913"
            rx="0.75"
            stroke="#1E1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 18.0652V6.75C5 5.50736 6.00736 4.5 7.25 4.5H14.1667"
            stroke="#1E1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavBox>
      <Wrapper>
        <div
          style={{
            width: '200px',
            height: '224px',
            position: 'relative',
          }}
        >
          <Image
            src={
              'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/fe2d3c33-2d1f-4289-e5b4-acfc9ca71200/public'
            }
            alt="gurumi"
            fill
            priority
            sizes="410px"
          />
        </div>
      </Wrapper>
      <Description>
        2026년 수능을 준비하는 거네? 그럼 아직 시간이 충분하니까 너무 걱정하지
        말고 내가 설계해준 대로 잘 따라오면 돼! 수학 공부를 위한 학습 계획을
        다음과 같이 설계해봤어.
      </Description>
      <ScheduleBox>
        {PLAN_ARRAY.map((plan, index) => (
          <div
            key={index}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '7px',
            }}
          >
            <div
              style={{
                ...TYPOGRAPHY.body['medium1'],
                textAlign: 'center',
                backgroundColor: COLORS.primary[50],
                color: COLORS.primary[600],
                borderRadius: '10px',
                padding: '3px 9px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '45px',
                height: '52px',
              }}
            >
              <div>{plan.from}</div>
              <div
                style={{
                  padding: '1px 0',
                }}
              >
                <svg
                  width="5"
                  height="2"
                  viewBox="0 0 5 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.72852 0.282227V1.71777H0.271484V0.282227H4.72852Z"
                    fill="#6178C8"
                  />
                </svg>
              </div>

              <div>{plan.to}</div>
            </div>
            <div
              style={{
                ...TYPOGRAPHY.body['medium1'],
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                backgroundColor: COLORS.grayscale[50],
                height: '52px',
                borderRadius: '10px',
                padding: '0 10px',
              }}
            >
              {plan.content}
            </div>
          </div>
        ))}
      </ScheduleBox>
    </>
  );
};

export default SessionResult;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-top: 50px;
  gap: 10px;
`;

const NavBox = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const ScheduleBox = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
