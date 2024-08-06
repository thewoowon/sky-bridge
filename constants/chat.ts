export const SELECTION = [
  {
    title: '영어 과목 학생 리뷰가 가장 좋은 선생님을 알려줘',
  },
  {
    title: '최서희 선생님 문학 고전 입문할 때 보기 좋은 강의 추천해 줘',
  },
  {
    title: '올해 입시일정은 어떻게 돼?',
  },
  {
    title: '고려대 중어중문과 입시요강을 알려줘',
  },
  {
    title: '수1, 수2 1티어 문제집을 알려줘',
  },
];

export const THIS_YEAR_SCHEDULE: {
  label: string;
  category: string;
  list: { date: string; content: string }[];
}[] = [
  {
    label: '수능 시험',
    category: '수능',
    list: [
      {
        date: '2025.11.14',
        content: '대학수학능력시험일',
      },
      {
        date: '2024.12.06',
        content: '대학수학능력시험 통지일',
      },
    ],
  },
  {
    label: '수시 모집',
    category: '수시',
    list: [
      {
        date: '2024.07.08',
        content: '외국인전형 원서 접수',
      },
      {
        date: '2024.08.31',
        content: '수시 학생부 작성',
      },
      {
        date: '2024.09.14',
        content: '수시 전형',
      },
      {
        date: '2024.12.13',
        content: '최초 합격자 발표',
      },
      {
        date: '2024.12.16',
        content: '모집 등록',
      },
      {
        date: '2024.12.19',
        content: '미등록 충원 기간',
      },
      {
        date: '2024.12.27',
        content: '미등록 충원 마감일',
      },
    ],
  },
  {
    label: '정시 모집',
    category: '정시',
    list: [
      {
        date: '2024.11.30',
        content: '학생부 작성 기준일',
      },
      {
        date: '2024.12.31',
        content: '입학원서 접수',
      },
      {
        date: '2025.01.07',
        content: "‘가'군 모집 전형",
      },
      {
        date: '2025.01.15',
        content: "‘나'군 모집 전형",
      },
      {
        date: '2025.01.23',
        content: "‘다'군 모집 전형",
      },
      {
        date: '2025.02.07',
        content: '최초 합격자 발표 말일',
      },
      {
        date: '2025.02.10',
        content: '등록 기간',
      },
      {
        date: '2025.02.13',
        content: '미등록 충원 기간',
      },
      {
        date: '2025.02.20',
        content: '미등록 충원 마감일',
      },
    ],
  },
  {
    label: '추가 모집',
    category: '추가',
    list: [
      {
        date: '2025.02.21',
        content: '입학원서 접수, 전형기간',
      },
      {
        date: '2025.02.28',
        content: '최초 합격자 발표 말일',
      },
      {
        date: '2025.02.28',
        content: '등록 기간',
      },
    ],
  },
];

export const WORKBOOKS: {
  rank: number;
  title: string;
  url: string;
}[] = [
  {
    rank: 1,
    title: '2025 수능대비 Xistory 자이스토리 고3 수학 2 (2024년)',
    url: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/4c06aef0-1602-4d58-043c-e1458d5a5700/public',
  },
  {
    rank: 2,
    title: '2025 수능대비 Xistory 자이스토리 고3 수학 1 (2024년)',
    url: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/28e30b18-4d1a-4355-6312-2731480b8d00/public',
  },
  {
    rank: 3,
    title: '2025 마더텅 수능기출문제집 수학 2 (2024년)',
    url: 'https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/0d0b877c-17cd-4fb6-3a60-56bbeb2ceb00/public',
  },
];
