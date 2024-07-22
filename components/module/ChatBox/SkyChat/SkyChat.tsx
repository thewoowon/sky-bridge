import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

type SkyChatProps = {
  chat: string;
  data?: any[];
};

const SkyChat = forwardRef<HTMLDivElement, SkyChatProps>(
  ({ chat, data }, ref) => {
    return (
      <Container
        style={{
          ...TYPOGRAPHY.body['large2'],
          fontWeight: 400,
          color: 'black',
        }}
        ref={ref}
      >
        {chat.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </Container>
    );
  },
);

export default SkyChat;

SkyChat.displayName = 'SkyChat';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 389px;
  width: fit-content;
  background-color: white;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  border-radius: 12px 12px 12px 0;
  padding: 10px 15px 12px 14px;
`;
