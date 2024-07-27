export const getTeacherInfo = (
  name:
    | '현우진'
    | '이명학'
    | '김동욱'
    | '신승범'
    | '조정식'
    | '윤혜정'
    | '정승제'
    | '주혜연'
    | '김민정',
): {
  subtitle: string;
  theme: string;
  decoration: string[];
} => {
  switch (name) {
    case '현우진':
      return {
        subtitle: '"시작부터 끝까지!\n수학은 누구나 현우진"',
        theme: 'lime',
        decoration: ['#748FEE', '#A0B3F3'],
      };
    case '이명학':
      return {
        subtitle: '“어법은 의심이고\n구문은 신뢰다.”',
        theme: 'lime',
        decoration: ['#748FEE', '#A0B3F3'],
      };
    case '김동욱':
      return {
        subtitle: '“언어는 원래\n읽는 거라니까.”',
        theme: 'lime',
        decoration: ['#748FEE', '#A0B3F3'],
      };
    case '신승범':
      return {
        subtitle: '“미래는 니가 만든다.\n멋진 이과생이 됩시다.”',
        theme: 'blueberry',
        decoration: ['#AFE62D', '#AFE62D'],
      };
    case '조정식':
      return {
        subtitle:
          '“수능의 그 날까지 여러분과 함께 할\n러닝메이트, 조정식입니다.”',
        theme: 'blueberry',
        decoration: ['#AFE62D', '#AFE62D'],
      };
    case '윤혜정':
      return {
        subtitle: '“네 꿈에 날개를 달아 줄,\n만점 국어의 시작과 끝~!”',
        theme: 'blueberry',
        decoration: ['#AFE62D', '#AFE62D'],
      };
    case '정승제':
      return {
        subtitle: '“완벽한 개념과 피나는 연습만이\n만점을 만듭니다.”',
        theme: 'plum',
        decoration: ['#F84B70', '#F84B70'],
      };
    case '주혜연':
      return {
        subtitle: '“여러분과 합격의 기쁨을\n함께하겠습니다.”',
        theme: 'plum',
        decoration: ['#F84B70', '#F84B70'],
      };
    case '김민정':
      return {
        subtitle: '“분명, 네 인생\n최고의 점수는 수능이다.”',
        theme: 'plum',
        decoration: ['#F84B70', '#F84B70'],
      };
    default:
      return {
        subtitle: '시작부터 끝까지! 수학은 누구나 현우진',
        theme: 'lime',
        decoration: ['#748FEE', '#A0B3F3'],
      };
  }
};
