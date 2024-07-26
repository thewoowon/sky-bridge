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
                width: '72px',
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
        <RefreshButton>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.90481 4.27953C11.4781 3.85236 13.1443 3.91602 14.6804 4.46201C16.2165 5.00799 17.5491 6.01023 18.4998 7.33453V5.74953C18.4998 5.55062 18.5788 5.35986 18.7195 5.2192C18.8601 5.07855 19.0509 4.99953 19.2498 4.99953C19.4487 4.99953 19.6395 5.07855 19.7801 5.2192C19.9208 5.35986 19.9998 5.55062 19.9998 5.74953V9.99953H15.7498C15.5509 9.99953 15.3601 9.92052 15.2195 9.77986C15.0788 9.63921 14.9998 9.44844 14.9998 9.24953C14.9998 9.05062 15.0788 8.85985 15.2195 8.7192C15.3601 8.57855 15.5509 8.49953 15.7498 8.49953H17.4768C16.6935 7.27402 15.5218 6.34665 14.1491 5.86576C12.7764 5.38488 11.2821 5.37829 9.90523 5.84703C8.52836 6.31577 7.34849 7.23276 6.55437 8.45131C5.76025 9.66986 5.39777 11.1195 5.52491 12.5684C5.65206 14.0173 6.26149 15.3817 7.25571 16.4434C8.24992 17.505 9.57147 18.2024 11.0089 18.4242C12.4464 18.646 13.9167 18.3792 15.1847 17.6666C16.4526 16.954 17.4449 15.8367 18.0028 14.4935C18.039 14.4004 18.0935 14.3155 18.163 14.2437C18.2325 14.1719 18.3156 14.1147 18.4075 14.0755C18.4995 14.0363 18.5983 14.0159 18.6982 14.0154C18.7981 14.0149 18.8971 14.0344 18.9894 14.0727C19.0817 14.111 19.1654 14.1674 19.2356 14.2385C19.3058 14.3096 19.361 14.394 19.3982 14.4868C19.4353 14.5795 19.4535 14.6788 19.4517 14.7787C19.4499 14.8786 19.4282 14.9771 19.3878 15.0685C18.8666 16.3231 18.0345 17.4242 16.97 18.2682C15.9055 19.1121 14.6436 19.6711 13.3032 19.8924C11.9629 20.1137 10.5883 19.9901 9.30894 19.5331C8.02962 19.0761 6.88773 18.3009 5.99092 17.2805C5.09412 16.2601 4.47193 15.0281 4.18302 13.7007C3.8941 12.3733 3.94797 10.9942 4.33955 9.69332C4.73113 8.39249 5.44752 7.2128 6.42119 6.26546C7.39486 5.31811 8.59374 4.63532 9.90481 4.27953Z"
              fill="white"
            />
          </svg>
        </RefreshButton>
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
