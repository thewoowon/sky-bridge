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

export default function Providers({ children }: { children: React.ReactNode }) {
  const loading = useLoading();

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

    // 뷰포트 높이를 계산하는 함수를 resize 이벤트에 바인딩
    window.addEventListener('resize', adjustViewportHeight);

    // 이벤트를 제거하는 함수를 반환
    return () => {
      window.removeEventListener('resize', adjustViewportHeight);
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
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '480px',
            minWidth: '375px',
            width: '100%',
            margin: '0 auto',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {loading && <div>로딩 중...</div>}
          <Header />
          {children}
          <GNB />
        </div>
        <Toaster
          toastOptions={{
            className: '',
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
          }}
        />
      </QueryClientProvider>
      <GoogleAnalytics gaId={gtag.GA_TRACKING_ID || ''} />
      <GoogleTagManager gtmId={gtag.GTM_TRACKING_ID || ''} />
    </>
  );
}
