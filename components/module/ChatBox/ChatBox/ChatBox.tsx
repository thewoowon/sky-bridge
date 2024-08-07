import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { Controller, Control, useWatch } from 'react-hook-form';
import { debounce } from 'lodash';
import { forwardRef } from 'react';
import { TYPOGRAPHY } from '@/styles/typography';
import { COLORS } from '@/styles/color';

type ChatBoxProps = {
  onSubmit: () => void;
  control: Control<{
    chat: string;
  }>;
  isLoading?: boolean;
};

const ChatBox = forwardRef<HTMLDivElement, ChatBoxProps>(
  ({ onSubmit, control, isLoading }, ref) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const chatValue = useWatch({
      control,
      name: 'chat',
    });

    const adjustHeight = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = '20px';
        textareaRef.current.style.height = `${Math.min(
          textareaRef.current.scrollHeight,
          96,
        )}px`;
      }
    };

    const handleSubmitDebounced = debounce((onSubmit: () => void) => {
      onSubmit();
    }, 300);

    const addNewLineDebounced = debounce(
      (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!event?.currentTarget?.value) return;
        event.preventDefault();
        event.currentTarget.value += '\n';
        adjustHeight();
      },
      300,
    );

    const onkeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // 디바운싱 처리
      if (isLoading) {
        return;
      }
      if (e.key === 'Enter' && !e.currentTarget.value) {
        e.preventDefault();
        return;
      }
      // shift + enter는 줄바꿈
      if (e.shiftKey && e.key === 'Enter') {
        //줄바꿈
        addNewLineDebounced(e);
        return;
      }
      if (e.key === 'Enter' && e.currentTarget.value.includes('\n')) {
        // submit이 아닌 줄바꿈
        adjustHeight();
        return;
      }
      // 현재 value에 \n이 없으면 submit
      if (e.key === 'Enter' && !e.currentTarget.value.includes('\n')) {
        e.preventDefault();
        handleSubmitDebounced(onSubmit);
      }
    };

    useEffect(() => {
      adjustHeight();
    }, [isLoading]);

    return (
      <Form isLoading={isLoading || false} isEmpty={!chatValue}>
        <Controller
          name="chat"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Textarea
              style={{
                ...TYPOGRAPHY.body['large2'],
                color: COLORS.grayscale[900],
                fontWeight: 400,
              }}
              {...field}
              ref={textareaRef}
              onInput={adjustHeight}
              onKeyDown={onkeyDown}
              className="resize-none"
              placeholder="궁금한 점을 물어보세요."
            />
          )}
        />
        <button
          onClick={onSubmit}
          type="submit"
          disabled={isLoading || !chatValue}
        >
          {isLoading ? (
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="10" height="10" fill="white" />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.2955 9.74871C17.8944 9.74816 17.4983 9.83499 17.1364 10.0028V7.12347C17.1362 6.66853 17.0143 6.22143 16.7826 5.82601C16.5508 5.43058 16.2172 5.1004 15.8144 4.86784C15.4115 4.63528 14.9534 4.50832 14.4848 4.49941C14.0162 4.4905 13.5533 4.59994 13.1414 4.81701C12.9431 4.2222 12.5326 3.71559 11.9838 3.38835C11.435 3.06111 10.7839 2.93473 10.1477 3.03193C9.51144 3.12913 8.93182 3.44355 8.51312 3.9186C8.09441 4.39365 7.8641 4.99815 7.86364 5.62334V6.25246C7.50172 6.08465 7.10563 5.99782 6.70455 5.99837C5.98726 5.99837 5.29934 6.27496 4.79214 6.76729C4.28494 7.25961 4 7.92735 4 8.62361V15.7493C4 17.9375 4.89553 20.0361 6.48959 21.5834C8.08365 23.1307 10.2457 24 12.5 24C14.7543 24 16.9163 23.1307 18.5104 21.5834C20.1045 20.0361 21 17.9375 21 15.7493V12.3739C21 11.6777 20.7151 11.01 20.2079 10.5176C19.7007 10.0253 19.0127 9.74871 18.2955 9.74871ZM19.4545 15.7493C19.4545 17.5396 18.7218 19.2567 17.4176 20.5227C16.1134 21.7886 14.3445 22.4999 12.5 22.4999C10.6555 22.4999 8.88662 21.7886 7.58239 20.5227C6.27816 19.2567 5.54545 17.5396 5.54545 15.7493V8.62361C5.54545 8.32521 5.66757 8.03904 5.88494 7.82804C6.10232 7.61704 6.39714 7.49851 6.70455 7.49851C7.01196 7.49851 7.30677 7.61704 7.52415 7.82804C7.74152 8.03904 7.86364 8.32521 7.86364 8.62361V12.749C7.86364 12.9479 7.94505 13.1387 8.08996 13.2794C8.23488 13.42 8.43142 13.4991 8.63636 13.4991C8.8413 13.4991 9.03785 13.42 9.18276 13.2794C9.32768 13.1387 9.40909 12.9479 9.40909 12.749V5.62334C9.40909 5.32494 9.53121 5.03877 9.74858 4.82777C9.96595 4.61677 10.2608 4.49824 10.5682 4.49824C10.8756 4.49824 11.1704 4.61677 11.3878 4.82777C11.6052 5.03877 11.7273 5.32494 11.7273 5.62334V11.9989C11.7273 12.1978 11.8087 12.3886 11.9536 12.5293C12.0985 12.67 12.2951 12.749 12.5 12.749C12.7049 12.749 12.9015 12.67 13.0464 12.5293C13.1913 12.3886 13.2727 12.1978 13.2727 11.9989V7.12347C13.2727 6.82508 13.3948 6.5389 13.6122 6.32791C13.8296 6.11691 14.1244 5.99837 14.4318 5.99837C14.7392 5.99837 15.034 6.11691 15.2514 6.32791C15.4688 6.5389 15.5909 6.82508 15.5909 7.12347V13.5619C14.5112 13.7405 13.5313 14.2839 12.8243 15.0959C12.1173 15.9079 11.7288 16.9363 11.7273 17.9995C11.7273 18.1984 11.8087 18.3892 11.9536 18.5298C12.0985 18.6705 12.2951 18.7495 12.5 18.7495C12.7049 18.7495 12.9015 18.6705 13.0464 18.5298C13.1913 18.3892 13.2727 18.1984 13.2727 17.9995C13.2727 17.2037 13.5984 16.4406 14.178 15.8779C14.7577 15.3153 15.5439 14.9992 16.3636 14.9992C16.5686 14.9992 16.7651 14.9202 16.91 14.7795C17.055 14.6388 17.1364 14.448 17.1364 14.2491V12.3739C17.1364 12.0756 17.2585 11.7894 17.4759 11.5784C17.6932 11.3674 17.988 11.2488 18.2955 11.2488C18.6029 11.2488 18.8977 11.3674 19.1151 11.5784C19.3324 11.7894 19.4545 12.0756 19.4545 12.3739V15.7493Z"
                fill="white"
              />
              <circle
                cx="20"
                cy="22"
                r="6"
                fill="url(#paint0_linear_426_2579)"
              />
              <path
                d="M20.3227 18.2394C20.2441 18.3152 20.1818 18.4052 20.1392 18.5043C20.0966 18.6033 20.0747 18.7095 20.0747 18.8168C20.0747 18.924 20.0966 19.0302 20.1392 19.1293C20.1818 19.2284 20.2441 19.3184 20.3227 19.3942L22.2622 21.2668L16.8458 21.2668C16.6215 21.2668 16.4064 21.3528 16.2477 21.506C16.0891 21.6591 16 21.8668 16 22.0834C16 22.3 16.0891 22.5077 16.2477 22.6609C16.4064 22.8141 16.6215 22.9001 16.8458 22.9001L22.2622 22.9001L20.3227 24.7727C20.1641 24.9258 20.075 25.1335 20.075 25.3501C20.075 25.5666 20.1641 25.7743 20.3227 25.9275C20.4813 26.0806 20.6964 26.1666 20.9207 26.1666C21.0318 26.1666 21.1418 26.1455 21.2444 26.1045C21.347 26.0634 21.4402 26.0033 21.5187 25.9275L25.5 22.0834L21.5187 18.2394C21.4402 18.1635 21.347 18.1033 21.2444 18.0622C21.1418 18.0211 21.0318 18 20.9207 18C20.8097 18 20.6997 18.0211 20.597 18.0622C20.4944 18.1033 20.4012 18.1635 20.3227 18.2394Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_426_2579"
                  x1="20"
                  y1="16"
                  x2="24.8"
                  y2="26.8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8CA2F1" />
                  <stop offset="1" stopColor="#7791EF" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </button>
      </Form>
    );
  },
);

export default ChatBox;

ChatBox.displayName = 'ChatBox';

const Form = styled.form<{
  isLoading: boolean;
  isEmpty: boolean;
}>`
  width: 100%;
  max-height: 200px;
  min-height: 44px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  scrollbar-width: none;
  --ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  transition: background-color 0.2s ease-in-out;
  gap: 8px;

  button {
    width: 44px;
    height: 44px;
    background-color: ${(props) =>
      props.isLoading || props.isEmpty ? 'rgb(200, 200, 200)' : 'black'};
    border: none;
    border-radius: 8px;
    cursor: ${(props) =>
      props.isLoading || props.isEmpty ? 'not-allowed' : 'pointer'};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.primary[500]};
  }
`;

const Textarea = styled.textarea`
  flex: 1;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  background-color: white;
  scrollbar-width: none;
  --ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 12px 19px;
  border-radius: 8px;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  border-style: inset;
  border: 1px solid ${COLORS.grayscale[70]};

  &::placeholder {
    color: ${COLORS.grayscale[300]};
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -2%;
  }
`;
