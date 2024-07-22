import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

type UserChatProps = {
  chat: string;
};

const UserChat = forwardRef<HTMLDivElement, UserChatProps>(({ chat }, ref) => {
  return (
    <Container ref={ref}>
      <Wrapper
        style={{
          ...TYPOGRAPHY.body['large2'],
          fontWeight: 400,
          color: 'white',
        }}
      >
        {chat.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </Wrapper>
    </Container>
  );
});

export default UserChat;

UserChat.displayName = 'UserChat';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 389px;
  width: fit-content;
  background-color: ${COLORS.primary[500]};
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  border-radius: 12px 12px 0 12px;
  padding: 10px 15px 12px 14px;
`;
