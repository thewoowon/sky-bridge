'use client';

import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NEWS_DATA: News[] = [
  {
    title:
      '지자체 2025수시 박람회 ‘7월부터본격화’..대학/상담교사단 1대1 상담 ‘적극활용',
    link: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0014820863',
    view: 6750,
    date: '2024-06-12',
    src: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/383333b1-b9cf-4db2-7314-756b5a590700/public',
  },
  {
    title: '언제 어디서나, 어디서든 학습이 가능한 시대 - 온라인 학습의 현실',
    link: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0014820863',
    view: 8090,
    date: '2024-05-05',
    src: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/869dfb9b-fce3-40ea-7550-4d325a9edc00/public',
  },
  {
    title:
      '그래픽 디자인 전문가가 알려주는 디자인의 모든 것 - 입시에서 취업까지',
    link: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0014820863',
    view: 1212,
    date: '2024-03-01',
    src: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8a4696c8-586b-4ca0-7712-8615f7f80100/public',
  },
  {
    title:
      '항공사고 조사 전문가가 알려주는 항공사고의 모든 것 - 입시에서 취업까지',
    link: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0014820863',
    view: 3212,
    date: '2024-01-14',
    src: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/8eb41a24-fae9-4312-451c-c6e084490400/public',
  },
  {
    title:
      '올해 대학입시, 어떻게 준비할 것인가? 전공의 이탈 심화 및 유급 사태 전망',
    link: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0014820863',
    view: 7770,
    date: '2024-07-01',
    src: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/69094672-fa00-4e41-5407-e51146227a00/public',
  },
  {
    title:
      '잼버리 사태로 되돌아 보는 대한민국의 현실, 그리고 미래 - 대학입시의 변화',
    link: 'https://news.naver.com/main/list.naver?mode=LPOD&mid=sec&sid1=001&sid2=140&oid=001&isYeonhapFlash=Y&aid=0014820863',
    view: 2538,
    date: '2024-03-19',
    src: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/88cf593c-9f7a-4408-ef85-f1c91204c900/public',
  },
];

const News = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [selectedTag, setSelectedTag] = useState<'인기순' | '최신순'>('인기순');

  useEffect(() => {
    if (!selectedTag || NEWS_DATA.length === 0) return;

    const parseDate = (dateString: string) => {
      return new Date(dateString).getTime();
    };

    const sortedNews = [...NEWS_DATA].sort((a, b) => {
      if (selectedTag === '인기순') {
        return b.view - a.view;
      } else {
        return parseDate(b.date) - parseDate(a.date);
      }
    });

    setNewsList(sortedNews);
  }, [selectedTag]);
  return (
    <Container>
      <Wrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}
        >
          <div
            style={{
              ...TYPOGRAPHY.title['medium'],
            }}
          >
            주목해야 할 입시 뉴스
          </div>
          <Tags>
            <Tag
              selected={selectedTag === '인기순'}
              onClick={() => {
                setSelectedTag('인기순');
              }}
            >
              인기순
            </Tag>
            <Tag
              selected={selectedTag === '최신순'}
              onClick={() => {
                setSelectedTag('최신순');
              }}
            >
              최신순
            </Tag>
          </Tags>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {newsList.map((news, index) => (
            <NewsItem key={index} news={news} />
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default News;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 16px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 24px 20px;
  border-radius: 14px;
  gap: 26px;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
`;

const Tags = styled.div`
  display: flex;
  gap: 8px;
`;

const Tag = styled.div<{
  selected?: boolean;
}>`
  padding: 2px 10px;
  background-color: ${({ selected }) =>
    selected ? COLORS.grayscale[700] : COLORS.grayscale[100]};
  color: ${({ selected }) => (selected ? 'white' : COLORS.grayscale[600])};
  border-radius: 19px;
  font-size: 14px;
  font-weight: normal;
  line-height: 21px;
  letter-spacing: -2%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
