'use client';
import { ChatBox, UserChat } from '@/components/module/ChatBox';
import SkyChat from '@/components/module/ChatBox/SkyChat';
import { SELECTION, THIS_YEAR_SCHEDULE, WORKBOOKS } from '@/constants/chat';
import { COLORS } from '@/styles/color';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
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
      type?: 'selection' | 'workbook' | 'schedule' | 'teacher' | 'guideline';
      loading?: boolean;
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

  const onSelectionSubmit = async (id: number) => {
    // 채팅 입력창 clear
    setValue('chat', '');
    // 선택지 제출
    setChatContext([
      ...chatContext,
      {
        chat: SELECTION[id].title,
        role: 'user',
      },
      {
        chat: '',
        role: 'sky',
        type: 'teacher',
        data: [
          {
            response:
              "2023년 기준으로 수리논술을 가장 잘 가르치는 강사는 '현우진' 이야.\n이는 메가스터디, 이투스, 대성마이맥의 리뷰를 참고했어.",
            link: 'https://www.naver.com',
          },
        ],
        loading: true,
      },
    ]);
    setIsLoading(true);

    await setTimeout(async () => {
      switch (id) {
        // 수리논술 젤 잘 가르치는 강사는 누구야?
        case 0:
          setChatContext([
            ...chatContext,
            {
              chat: SELECTION[id].title,
              role: 'user',
            },
            {
              chat: '',
              role: 'sky',
              type: 'teacher',
              data: [
                {
                  response:
                    "2023년 기준으로 수리논술을 가장 잘 가르치는 강사는 '현우진' 이야.\n이는 메가스터디, 이투스, 대성마이맥의 리뷰를 참고했어.",
                  link: 'https://www.naver.com',
                },
              ],
            },
          ]);
          break;
        // 현우진 vs 정승제, 누구 강의가 더 좋아?
        case 1:
          setChatContext([
            ...chatContext,
            {
              chat: SELECTION[id].title,
              role: 'user',
            },
            {
              chat: '',
              role: 'sky',
              type: 'teacher',
              data: [
                {
                  response:
                    "2023년 기준으로 '현우진' 강사의 강의가 더 좋아.\n이는 메가스터디, 이투스, 대성마이맥의 리뷰를 참고했어.",
                  link: 'https://www.naver.com',
                },
              ],
            },
          ]);
          break;
        // 올해 입시일정은 어떻게 돼?
        case 2:
          setChatContext([
            ...chatContext,
            {
              chat: SELECTION[id].title,
              role: 'user',
            },
            {
              chat: '올해 입시일정이야',
              role: 'sky',
            },
            {
              chat: '',
              role: 'sky',
              type: 'schedule',
              data: THIS_YEAR_SCHEDULE,
            },
          ]);
          break;
        // 고려대 중어중문과 입시요강을 알려줘
        case 3:
          setChatContext([
            ...chatContext,
            {
              chat: SELECTION[id].title,
              role: 'user',
            },
            {
              chat: '',
              role: 'sky',
              type: 'guideline',
              data: [],
            },
          ]);
          break;
        // 수1, 수2 1티어 문제집을 알려줘
        case 4:
          setChatContext([
            ...chatContext,
            {
              chat: SELECTION[id].title,
              role: 'user',
            },
            {
              chat: `2024년 1월 1일부터 ${new Date().getUTCDate()}일 기준 수능기출문제집 수학영역 종합베스트야.`,
              role: 'sky',
            },
            {
              chat: '',
              role: 'sky',
              type: 'workbook',
              data: WORKBOOKS,
            },
          ]);
          break;
        default:
          break;
      }
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setTimeout(async () => {
      setChatContext([
        ...chatContext,
        {
          chat: '이런 걸 물어볼 수 있어',
          role: 'sky',
        },
      ]);

      await setTimeout(async () => {
        setChatContext([
          ...chatContext,
          {
            chat: '이런 걸 물어볼 수 있어',
            role: 'sky',
          },
          {
            chat: '',
            role: 'sky',
            data: SELECTION,
            type: 'selection',
          },
        ]);
      }, 1200);
    }, 3500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [chatContext]);

  return (
    <Main>
      <ChatArea>
        <ChatContext>
          {chatContext.map((context, index) => {
            const { chat, role, data, type, loading } = context;
            if (role === 'user') {
              return <UserChat key={index} chat={chat} ref={scrollRef} />;
            }
            return (
              <SkyChat
                key={index}
                chat={chat}
                data={data}
                type={type}
                ref={scrollRef}
                onSelectionSubmit={onSelectionSubmit}
                isLoading={loading}
              />
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
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  gap: 12px;
  padding-bottom: 12px;
`;
