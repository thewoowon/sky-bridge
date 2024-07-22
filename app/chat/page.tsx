'use client';

import { ChatBox, UserChat } from '@/components/module/ChatBox';
import SkyChat from '@/components/module/ChatBox/SkyChat';
import { COLORS } from '@/styles/color';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormType = {
  chat: string;
};

const ChatPage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatContext, setChatContext] = useState<
    {
      chat: string;
      role: 'user' | 'sky';
      data?: any[];
    }[]
  >([
    {
      chat: '안녕! 입시정보가 궁금하니?\n구체적으로 물어볼 수록 너가 원하는 정보를\n더 잘 알려줄 수 있어!',
      role: 'sky',
    },
  ]);

  const { getValues, watch, setValue, handleSubmit, control } =
    useForm<FormType>({
      defaultValues: {
        chat: '',
      },
    });

  const onSubmit = async (data: { chat: string }) => {
    const { chat } = data;
    setValue('chat', '');
    setIsLoading(true);
    setChatContext([
      ...chatContext,
      {
        chat,
        role: 'user',
      },
    ]);
    setIsLoading(false);
  };

  return (
    <Main>
      <ChatArea>
        <ChatContext>
          {chatContext.map((context, index) => {
            const { chat, role, data } = context;
            if (role === 'user') {
              return <UserChat key={index} chat={chat} ref={scrollRef} />;
            }
            return (
              <SkyChat key={index} chat={chat} data={data} ref={scrollRef} />
            );
          })}
        </ChatContext>
        <ChatBox
          onSubmit={handleSubmit(onSubmit)}
          control={control}
          isLoading={isLoading}
        />
      </ChatArea>
    </Main>
  );
};

export default ChatPage;

const Main = styled.main`
  width: 100%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 57px;
  padding-bottom: 88px;
  background-color: ${COLORS.grayscale[50]};
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const ChatArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 12px 18px;
  flex-direction: column;
  justify-content: space-between;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatContext = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding 45px 50px 36px 50px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
