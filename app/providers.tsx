'use client';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import * as gtag from '@/lib/gtag';
import GNB from '@/components/layout/GNB';
import Header from '@/components/layout/Header';
import useLoading from '@/hooks/useLoading';
import useHeaderStore from '@/store/useHeaderStore';

export default function Providers({ children }: { children: React.ReactNode }) {
  const loading = useLoading();
  const { display } = useHeaderStore();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Infinity,
        retry: 0,
      },
    },
  });

  useEffect(() => {
    if (document.body.getAttribute('style') === '') {
      document.body.removeAttribute('style');
    }

    // 뷰포트 높이를 계산하고 해당 값을 사용하여 요소의 스타일을 업데이트하는 함수
    function adjustViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // 뷰포트 높이를 계산하는 함수를 실행
    adjustViewportHeight();

    // 뷰포트 높이를 계산하는 함수를 resize와 orientationchange 이벤트에 바인딩
    window.addEventListener('resize', adjustViewportHeight);
    window.addEventListener('orientationchange', adjustViewportHeight);

    // iOS 키보드 문제를 해결하기 위해 focus와 blur 이벤트 처리
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('focus', adjustViewportHeight);
      input.addEventListener('blur', adjustViewportHeight);
    });

    // 이벤트를 제거하는 함수를 반환
    return () => {
      window.removeEventListener('resize', adjustViewportHeight);
      window.removeEventListener('orientationchange', adjustViewportHeight);
      inputs.forEach((input) => {
        input.removeEventListener('focus', adjustViewportHeight);
        input.removeEventListener('blur', adjustViewportHeight);
      });
    };
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(var(--vh, 1vh) * 100)', // height를 계산된 뷰포트 높이로 설정
            position: 'relative',
            maxWidth: '480px',
            width: '100%',
            margin: '0 auto',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            overflow: 'auto', // overflow를 auto로 변경
          }}
        >
          {loading && <div>로딩 중...</div>}
          <Header display={display} />
          {children}
          <GNB />
        </div>
        <Toaster
          toastOptions={{
            success: {
              icon: null,
              duration: 3000,
              className: 'success-toast',
            },
            error: {
              icon: null,
              duration: 3000,
              className: 'error-toast',
            },
            custom: {
              duration: 3000,
              style: {
                width: '100%',
                backgroundColor: '#FFE96F',
                fontSize: '14px',
                lineHeight: '21px',
                letterSpacing: '-2%',
                textAlign: 'left',
              },
            },
          }}
        />
      </QueryClientProvider>
      <GoogleAnalytics gaId={gtag.GA_TRACKING_ID || ''} />
      <GoogleTagManager gtmId={gtag.GTM_TRACKING_ID || ''} />
    </>
  );
}
