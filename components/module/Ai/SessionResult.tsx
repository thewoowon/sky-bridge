import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

const PLAN_ARRAY: {
  from: string;
  to: string;
  title?: string;
  content: string[];
}[] = [
  {
    from: '7월',
    to: '12월',
    title: '개념 학습 및 기초 문제 풀이',
    content: [
      '우선 고등학교 1학년, 2학년 과정의 수학 개념을 복습하면서 기초를 다져봐. 그리고 나서 수능 수학 공통과목인 수학I, 수학II의 개념을 학습하자.',
      '개념 학습 이후에는 쉬운 난이도의 문제집을 골라서 문제를 풀면서 개념을 적용하는 연습을 하면 돼. 틀린 문제는 반드시 다시 풀어보고 왜 틀렸는지 이유를 파악해야 해.',
    ],
  },
  {
    from: '1월',
    to: '6월',
    title: '심화 개념 학습 및 킬러 문항 대비',
    content: [
      '이제부터는 조금 더 어려운 문제집이나 모의고사를 풀면서 심화 개념을 학습하면 좋아. 특히 상위권 대학을 목표로 한다면 킬러 문항 대비도 필수야.',
      '인강이나 학원 수업을 활용해도 괜찮아. 자신에게 맞는 방법을 찾아서 꾸준히 공부하도록 하자.',
    ],
  },
  {
    from: '7월',
    to: '12월',
    title: '모의고사 연습 및 약점 보완',
    content: [
      '이 기간에는 매주 주말마다 모의고사를 풀면서 실전 감각을 익혀보자. 성적이 잘 나오지 않는 부분은 따로 체크해서 보완하는 게 중요해.',
      '틀린 문제나 어려웠던 문제는 오답노트를 만들어서 정리하면 나중에 도움이 될 거야.',
    ],
  },
  {
    from: '1월',
    to: '6월',
    title: '최종 마무리 및 컨디션 관리',
    content: [
      '마지막으로 지금까지 공부한 내용을 총정리하면서 부족한 부분을 채워나가면 돼. 새로운 내용을 공부하기보다는 기존에 학습한 내용을 복습하는 데 집중하는게 좋아.',
      '수능 당일에는 최상의 컨디션을 유지할 수 있도록 규칙적인 생활습관을 유지하고 건강관리에도 신경써야 한다는 걸 잊지 마.',
    ],
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
      <Description
        style={{
          ...TYPOGRAPHY.title['medium'],
          color: COLORS.primary[600],
          lineHeight: '29px',
        }}
      >
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
                padding: '14px 0',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column',
                width: '45px',
                height: '100%',
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
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                backgroundColor: COLORS.grayscale[50],
                minHeight: '52px',
                height: 'fit-content',
                borderRadius: '10px',
                padding: '14px 12px',
                color: '#1E1E1E',
              }}
            >
              <div>{plan.title}</div>
              {plan.content && (
                <div
                  style={{
                    ...TYPOGRAPHY.body['medium2'],
                    color: 'black',
                    padding: '5px 0',
                  }}
                >
                  {plan.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </ScheduleBox>
      <Description
        style={{
          ...TYPOGRAPHY.title['medium'],
          color: COLORS.primary[600],
          lineHeight: '29px',
        }}
      >
        연세대학교는 수학 성적이 매우 중요한 학교 중 하나야. 그러니까 이번에
        설계해준 학습 계획을 잘 따라서 열심히 공부한다면 분명 좋은 결과 있을
        거라고 믿어!
      </Description>
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
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Description = styled.div`
  width: 100%;
`;

const ScheduleBox = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
