import Typewriter from '@/components/effect/Typewriter';
import Bounce from '@/components/element/bounce';
import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '@styles/workbook-swiper.css';
import Image from 'next/image';

type SkyChatProps = {
  chat: string;
  data?: any[];
  type?: 'selection' | 'workbook' | 'schedule' | 'teacher' | 'guideline';
  onSelectionSubmit: (id: number) => void;
  isLoading?: boolean;
};

const SkyChat = forwardRef<HTMLDivElement, SkyChatProps>(
  ({ chat, data, type, onSelectionSubmit, isLoading }, ref) => {
    const textArray = chat.split('\n').map((line, index) => line.trim());

    if (isLoading) {
      return (
        <Container
          style={{
            ...TYPOGRAPHY.body['large2'],
            fontWeight: 400,
            color: 'black',
          }}
          ref={ref}
        >
          <Bounce />
        </Container>
      );
    }

    // data가 있다면 반드시 type이 존재해야 함
    if (data && Array.isArray(data)) {
      if (!type) {
        return (
          <Container
            style={{
              ...TYPOGRAPHY.body['large2'],
              fontWeight: 400,
              color: 'black',
            }}
            ref={ref}
          >
            <div>개발자에게 문의해주세요</div>
          </Container>
        );
      }

      switch (type) {
        case 'selection':
          return (
            <Container
              style={{
                ...TYPOGRAPHY.body['large2'],
                fontWeight: 400,
                color: 'black',
                gap: '8px',
              }}
              ref={ref}
            >
              {data.map((item, index) => (
                <SelectionBox
                  key={index}
                  onClick={() => {
                    onSelectionSubmit(index);
                  }}
                >
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: COLORS.primary[500],
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      ...TYPOGRAPHY.body['medium1'],
                    }}
                  >
                    {index + 1}
                  </div>
                  {item.title}
                </SelectionBox>
              ))}
            </Container>
          );
        case 'workbook':
          return (
            <SwiperContainer
              style={{
                ...TYPOGRAPHY.body['large2'],
                fontWeight: 400,
                color: 'black',
              }}
              ref={ref}
            >
              <Swiper
                slidesPerView={'auto'}
                style={{
                  overflow: 'hidden',
                }}
                loop={false}
                className="workbook-swiper"
                spaceBetween={'8px'}
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div
                      key={index}
                      style={{
                        width: '165px',
                        height: '208px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        borderRadius: '12px 12px 12px 0',
                        backgroundColor: 'white',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: '165px',
                          height: '126px',
                          position: 'relative',
                        }}
                      >
                        <Image src={item.url} alt={item.title} fill />
                      </div>
                      <div
                        style={{
                          ...TYPOGRAPHY.caption['medium'],
                          lineHeight: '16px',
                          letterSpacing: '-1%',
                          color: 'black',
                          padding: '0 12px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px',
                        }}
                      >
                        <div
                          style={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            width: '100%',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            ...TYPOGRAPHY.body['medium1'],
                            color: COLORS.primary[200],
                          }}
                        >
                          {item.rank}위
                        </div>
                        {item.title}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperContainer>
          );
        case 'schedule':
          return (
            <Container
              style={{
                ...TYPOGRAPHY.body['large2'],
                fontWeight: 400,
                color: 'black',
                gap: '30px',
              }}
              ref={ref}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <CategoryTag category={item.category}>
                    {item.label}
                  </CategoryTag>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    {item.list.map(
                      (
                        list: {
                          date: string;
                          content: string;
                        },
                        index: number,
                      ) => (
                        <div
                          key={`${list.date}_${index}`}
                          style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '16px',
                            minWidth: '136px',
                            ...TYPOGRAPHY.body['medium2'],
                            paddingBottom: '6px',
                            borderBottom: `1px solid ${COLORS.grayscale[70]}`,
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'flex-start',
                              alignItems: 'center',
                              minWidth: '136px',
                              color: '#343A40',
                            }}
                          >
                            {list.content}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              color: COLORS.grayscale[400],
                            }}
                          >
                            <svg
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_513_4717)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.5 8V5C14.5 4.337 14.2365 3.701 13.7678 3.23225C13.299 2.7635 12.663 2.5 12 2.5C9.7805 2.5 6.2195 2.5 4 2.5C3.337 2.5 2.701 2.7635 2.23225 3.23225C1.7635 3.701 1.5 4.337 1.5 5C1.5 7.2195 1.5 10.7805 1.5 13C1.5 13.663 1.7635 14.299 2.23225 14.7678C2.701 15.2365 3.337 15.5 4 15.5C6.2195 15.5 9.7805 15.5 12 15.5C12.663 15.5 13.299 15.2365 13.7678 14.7678C14.2365 14.299 14.5 13.663 14.5 13C14.5 12.2778 14.5 10.9137 14.5 10C14.5 9.724 14.276 9.5 14 9.5C13.724 9.5 13.5 9.724 13.5 10V13C13.5 13.3977 13.342 13.7793 13.0608 14.0608C12.7793 14.342 12.3977 14.5 12 14.5C9.7805 14.5 6.2195 14.5 4 14.5C3.60225 14.5 3.22075 14.342 2.93925 14.0608C2.658 13.7793 2.5 13.3977 2.5 13C2.5 10.7805 2.5 7.2195 2.5 5C2.5 4.60225 2.658 4.22075 2.93925 3.93925C3.22075 3.658 3.60225 3.5 4 3.5C6.2195 3.5 9.7805 3.5 12 3.5C12.3977 3.5 12.7793 3.658 13.0608 3.93925C13.342 4.22075 13.5 4.60225 13.5 5C13.5 5.98175 13.5 6.72575 13.5 8C13.5 8.276 13.724 8.5 14 8.5C14.276 8.5 14.5 8.276 14.5 8Z"
                                  fill="#ADB5BD"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.5 4.9997C14.5 4.33662 14.2365 3.7008 13.7678 3.23197C13.299 2.76314 12.663 2.49973 12 2.49973C9.7805 2.49973 6.2195 2.49973 4 2.49973C3.337 2.49973 2.701 2.76314 2.23225 3.23197C1.7635 3.7008 1.5 4.33662 1.5 4.9997C1.5 5.99969 1.5 6.99968 1.5 6.99968C1.5 7.27584 1.72375 7.49968 2 7.49968H14C14.2762 7.49968 14.5 7.27584 14.5 6.99968V4.9997ZM13.5 6.49969V4.9997C13.5 4.60187 13.342 4.22038 13.0608 3.93904C12.7793 3.65771 12.3977 3.49972 12 3.49972C9.7805 3.49972 6.2195 3.49972 4 3.49972C3.60225 3.49972 3.22075 3.65771 2.93925 3.93904C2.658 4.22038 2.5 4.60187 2.5 4.9997V6.49969H13.5Z"
                                  fill="#ADB5BD"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.00008 5.5H11.0001C11.2761 5.5 11.5002 5.276 11.5002 5C11.5002 4.724 11.2761 4.5 11.0001 4.5H5.00008C4.72408 4.5 4.5 4.724 4.5 5C4.5 5.276 4.72408 5.5 5.00008 5.5Z"
                                  fill="#ADB5BD"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.5 3.49999V1.99999C5.5 1.72399 5.276 1.50012 5 1.50012C4.724 1.50012 4.5 1.72399 4.5 1.99999V3.49999C4.5 3.77599 4.724 3.99987 5 3.99987C5.276 3.99987 5.5 3.77599 5.5 3.49999Z"
                                  fill="#ADB5BD"
                                />
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.5 3.49999V1.99999C11.5 1.72399 11.276 1.50012 11 1.50012C10.724 1.50012 10.5 1.72399 10.5 1.99999V3.49999C10.5 3.77599 10.724 3.99987 11 3.99987C11.276 3.99987 11.5 3.77599 11.5 3.49999Z"
                                  fill="#ADB5BD"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_513_4717">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                            {list.date}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </Container>
          );
        case 'teacher':
          return (
            <Container
              style={{
                ...TYPOGRAPHY.body['large2'],
                fontWeight: 400,
                color: 'black',
                maxWidth: '289px',
                gap: '12px',
              }}
              ref={ref}
            >
              <Typewriter
                textArray={data[0].response
                  .split('\n')
                  .map((res: string) => res.trim())}
              />
              {/* <Button
                onClick={() => {
                  window.open(data[0].link, '_blank');
                }}
                disabled
              >
                자세히 보기
              </Button> */}
            </Container>
          );
        case 'guideline':
          return (
            <Container
              style={{
                ...TYPOGRAPHY.body['large2'],
                fontWeight: 400,
                color: 'black',
              }}
              ref={ref}
            >
              <Typewriter textArray={[chat]} />
              {/* {data.map((item, index) => (
                <div key={index}>{item.title}</div>
              ))} */}
            </Container>
          );
        default:
          return (
            <Container>
              <div>개발자에게 문의해주세요</div>
            </Container>
          );
      }
    }
    return (
      <Container
        style={{
          ...TYPOGRAPHY.body['large2'],
          fontWeight: 400,
          color: 'black',
        }}
        ref={ref}
      >
        <Typewriter textArray={textArray} />
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
  max-width: 100%;
  width: fit-content;
  background-color: white;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  border-radius: 12px 12px 12px 0;
  padding: 10px 15px 12px 14px;
`;

const SwiperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  width: 100%;
`;

const SelectionBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  background-color: ${COLORS.primary[50]};
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.primary[100]};
  }
`;

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${COLORS.grayscale[70]};
  color: ${COLORS.grayscale[700]};
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.grayscale[200]};
  }
`;

const CategoryTag = styled.div<{
  category: string;
}>`
  ${({ category }) => {
    switch (category) {
      case '수능':
        return {
          backgroundColor: COLORS.secondary[100],
          color: COLORS.secondary[900],
        };
      case '수시':
        return {
          backgroundColor: '#F3F1FD',
          color: '#7964F4',
        };
      case '정시':
        return {
          backgroundColor: '#FDF0F3',
          color: '#F84B70',
        };
      default:
        return {
          backgroundColor: '#FDF8EE',
          color: '#FF9408',
        };
    }
  }}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  border-radius: 23px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -2%;
  width: fit-content;
  height: fit-content;
`;
