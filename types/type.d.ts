interface SvgIconProps {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

type Schedule = {
  type: '정시' | '수시';
  date: string;
  title: string;
};

type Material = {
  title: string;
  subTitle: string;
  link: string;
  view: number;
  type: 'document' | 'strategy' | 'discussion';
};

type News = {
  title: string;
  link: string;
  view: number;
  src: string;
  date: string;
};
