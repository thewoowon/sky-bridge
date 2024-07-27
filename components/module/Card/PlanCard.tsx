import { getTeacher } from '@/utils/getTeacher';
import Image from 'next/image';
import styled from '@emotion/styled';
import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import { useRouter } from 'next/navigation';

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

type PlanCardProps = {
  planList: {
    startDate: string;
    endDate: string;
    title: string;
  }[];
  sessionId: string;
};

const PlanCard = ({ planList, sessionId }: PlanCardProps) => {
  const router = useRouter();
  return (
    <Container>
      <ScheduleBox>
        {planList.map((plan, index) => (
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
                width: '82px',
                height: '52px',
              }}
            >
              <div>{plan.startDate}</div>
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

              <div>{plan.endDate}</div>
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
                // text overflow ellipsis
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {plan.title}
            </div>
          </div>
        ))}
      </ScheduleBox>
      <div
        style={{
          display: 'flex',
          gap: '8px',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button
          onClick={() => {
            router.push('/ai/read?session_id=' + sessionId);
          }}
        >
          자세히 보기
        </Button>
      </div>
    </Container>
  );
};

export default PlanCard;

const Container = styled.div`
  max-width: 387px;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 16px;
  gap: 16px;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  background-color: ${COLORS.primary[500]};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${COLORS.primary[600]};
  }

  &:disabled {
    background-color: ${COLORS.grayscale[300]};
    color: #666d75;
    cursor: not-allowed;
  }
`;

const RefreshButton = styled.button`
  min-width: 44px;
  width: 44px;
  height: 44px;
  background-color: ${COLORS.grayscale[500]};
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -2%;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${COLORS.grayscale[600]};
  }
`;

const ScheduleBox = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
