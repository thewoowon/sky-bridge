import React, { CSSProperties } from 'react';

export const TYPOGRAPHY: {
  display: {
    [key: string]: CSSProperties;
  };
  title: {
    [key: string]: CSSProperties;
  };
  body: {
    [key: string]: CSSProperties;
  };
  caption: {
    [key: string]: CSSProperties;
  };
} = {
  display: {
    extraLarge: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '30px',
      letterSpacing: '-1%',
    },
    large: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '-1%',
    },
    medium1: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '27px',
      letterSpacing: '-2%',
    },
    medium2: {
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '27px',
      letterSpacing: '-2%',
    },
  },
  title: {
    large: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '29px',
      letterSpacing: '-2%',
    },
    medium: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '-2%',
    },
  },
  body: {
    large1: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '-2%',
    },
    large2: {
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '20px',
      letterSpacing: '-2%',
    },
    medium1: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '-2%',
    },
    medium2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '-2%',
    },
    small1: {
      fontWeight: 800,
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '-2%',
    },
    small2: {
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '-2%',
    },
  },
  caption: {
    medium: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '-2%',
    },
  },
};
