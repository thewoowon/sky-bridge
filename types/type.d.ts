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

type ChatType = 'selection' | 'workbook' | 'schedule' | 'teacher' | 'guideline';

type FlowState =
  | 'idle'
  | 'accept_offer'
  | 'select_exam_year'
  | 'enter_subject_information'
  | 'enter_current_score'
  | 'enter_target_university'
  | 'consulting_completed';

type FlowContext = {
  examYear?: number;
  subject?: string;
  currentScore?: number;
  targetUniversity?: string;
};

type Teacher =
  | '현우진'
  | '이명학'
  | '김동욱'
  | '신승범'
  | '조정식'
  | '윤혜정'
  | '정승제'
  | '주혜연'
  | '김민정';
