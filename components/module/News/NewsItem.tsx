import { COLORS } from '@/styles/color';
import { TYPOGRAPHY } from '@/styles/typography';
import styled from '@emotion/styled';
import Image from 'next/image';

const NewsItem = ({ news }: { news: News }) => {
  return (
    <Container>
      <div
        style={{
          position: 'relative',
          minWidth: '58px',
          width: '58px',
          height: '58px',
          borderRadius: '4px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={() => {
          window.open(news.newsLink, '_blank');
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '5px',
            left: '3px',
            ...TYPOGRAPHY.body['small2'],
            color: news.newsType === '수시' ? '#7964F4' : '#F84B70',
            backgroundColor: news.newsType === '수시' ? '#F3F1FD' : '#FDF0F3',
            zIndex: 1,
            borderRadius: '23px',
            padding: '0 6px',
          }}
        >
          {news.newsType}
        </div>
        <Image
          src={news.newsImage}
          alt={news.newsName}
          fill
          priority
          sizes="58"
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <Title
          style={{
            ...TYPOGRAPHY.body['medium2'],
            cursor: 'pointer',
          }}
          onClick={() => {
            window.open(news.newsLink, '_blank');
          }}
        >
          {news.newsName}
        </Title>
        <div
          style={{
            ...TYPOGRAPHY.caption['medium'],
            color: COLORS.grayscale[500],
            lineHeight: '10px',
          }}
        >
          등록일 {news.regDate} · 조회{' '}
          {news.viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
      </div>
    </Container>
  );
};

export default NewsItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  border-bottom: 1px solid ${COLORS.grayscale[200]};
  padding-bottom: 10px;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  width: 100%;
  height: fit-content;
  color: ${COLORS.grayscale[900]};
`;
