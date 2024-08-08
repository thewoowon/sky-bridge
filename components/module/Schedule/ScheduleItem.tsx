import Calendar from '@/components/svg/Calendar';
import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';

const ScheduleItem = ({ schedule }: { schedule: Schedule }) => {
  const dDay = new Date(schedule.scheduleDate).getTime() - new Date().getTime();
  const dateString = schedule.scheduleDate.split('-');
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Type
            type={schedule.scheduleType as '정시' | '수시'}
            style={{
              ...TYPOGRAPHY.body['medium1'],
            }}
          >
            {schedule.scheduleType}
          </Type>
          <DDay
            style={{
              ...TYPOGRAPHY.body['medium1'],
            }}
          >
            {dDay > 0
              ? `D-${Math.ceil(dDay / (1000 * 60 * 60 * 24))}`
              : 'D-Day '}
          </DDay>
        </div>
        <Title
          style={{
            ...TYPOGRAPHY.body['large1'],
          }}
        >
          {schedule.scheduleName}
        </Title>
      </div>
      <DateString
        style={{
          ...TYPOGRAPHY.body['medium2'],
        }}
      >
        <Calendar />
        {`${dateString[1]}월 ${dateString[2]}일`}
      </DateString>
    </Container>
  );
};

export default ScheduleItem;

const Container = styled.div`
  width: 143px;
  height: fit-content;
  padding: 13px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  gap: 21px;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
`;

const Type = styled.div<{
  type: '정시' | '수시';
}>`
  color: ${({ type }) => (type === '정시' ? '#F84B70' : '#7964F4')};
  background-color: ${({ type }) => (type === '정시' ? '#FDF0F3' : '#F3F1FD')};
  padding: 0 8px;
  border-radius: 23px;
`;

const DDay = styled.div`
  color: ${COLORS.grayscale[500]};
  background-color: ${COLORS.grayscale[70]};
  padding: 0 8px;
  border-radius: 23px;
`;

const DateString = styled.div`
  color: ${COLORS.grayscale[500]};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Title = styled.div`
  width: 100%;
  color: ${COLORS.grayscale[900]};
  white-space: pre-wrap;
  word-break: keep-all;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: left;
`;
