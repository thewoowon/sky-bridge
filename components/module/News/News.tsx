'use client';

import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { useQuery } from '@tanstack/react-query';
import customAxios from '@/lib/axios';
import { Pagination } from '@mui/material';
import Bounce from '@/components/element/bounce';

const News = () => {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [selectedTag, setSelectedTag] = useState<'인기순' | '최신순'>('인기순');
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  // Queries
  const { isLoading, data } = useQuery({
    queryKey: ['news'],
    queryFn: () => {
      return customAxios({
        method: 'GET',
        url: `/news/news`,
      }).then((res) => res.data);
    },
  });

  useEffect(() => {
    if (!selectedTag || !data || data.length === 0) return;

    const parseDate = (dateString: string) => {
      return new Date(dateString).getTime();
    };

    const sortedNews: News[] = [...data].sort((a: News, b: News) => {
      if (selectedTag === '인기순') {
        return b.viewCount - a.viewCount;
      } else {
        return parseDate(b.regDate) - parseDate(a.regDate);
      }
    });

    const paginatedData = sortedNews.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage,
    );

    setNewsList(paginatedData);
  }, [selectedTag, data, page]);

  if (isLoading) {
    return (
      <Container>
        <Bounce />
      </Container>
    );
  }

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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Pagination
            count={Math.ceil((data?.length || 0) / itemsPerPage)}
            page={page}
            onChange={(_, value) => {
              setPage(value);
            }}
            color="primary"
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#666D75',
              },
              '& .Mui-selected': {
                backgroundColor: COLORS.primary[600] + '!important',
                color: 'white',
              },
            }}
          />
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
