'use client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { memo, useEffect, useState } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import * as gtag from '@/lib/gtag';
import GNB from '@/components/layout/GNB';
import Header from '@/components/layout/Header';
import useLoading from '@/hooks/useLoading';
import useHeaderStore from '@/store/useHeaderStore';
import OnBoarding from '@/components/layout/OnBoading';
import Splash from '@/components/layout/Splash';
import Bounce from '@/components/element/bounce';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const loading = useLoading();
  const { display } = useHeaderStore();
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    // 뷰포트 높이를 계산하고 해당 값을 사용하여 요소의 스타일을 업데이트하는 함수
    function adjustViewportHeight() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // 키보드가 올라올 때와 내려올 때의 뷰포트 높이를 조정하는 함수
    const adjustForKeyboard = () => {
      const initialViewportHeight = window.innerHeight;
      let keyboardHeight = 0;

      const handleFocus = () => {
        setTimeout(() => {
          const currentViewportHeight = window.innerHeight;
          keyboardHeight = initialViewportHeight - currentViewportHeight;
          if (keyboardHeight > 150) {
            // 키보드가 올라와서 높이가 줄어들었다면
            document.body.style.marginBottom = `${keyboardHeight}px`;
          } else {
            document.body.style.marginBottom = '0';
          }
        }, 50); // 약간의 지연 후에 높이를 재계산
      };

      const handleBlur = () => {
        setTimeout(() => {
          document.body.style.marginBottom = '0';
        }, 300); // 약간의 지연 후에 높이를 재계산 (지연 시간 증가)
      };

      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach((input) => {
        input.addEventListener('focus', handleFocus);
        input.addEventListener('blur', handleBlur);
      });

      return () => {
        inputs.forEach((input) => {
          input.removeEventListener('focus', handleFocus);
          input.removeEventListener('blur', handleBlur);
        });
      };
    };

    // 초기 뷰포트 높이를 계산하는 함수를 실행
    adjustViewportHeight();
    adjustForKeyboard();

    // 뷰포트 높이를 계산하는 함수를 resize와 orientationchange 이벤트에 바인딩
    window.addEventListener('resize', adjustViewportHeight);
    window.addEventListener('orientationchange', adjustViewportHeight);

    return () => {
      window.removeEventListener('resize', adjustViewportHeight);
      window.removeEventListener('orientationchange', adjustViewportHeight);
    };
  }, []);

  useEffect(() => {
    const splash = sessionStorage.getItem('splash');
    const visit = localStorage.getItem('visit');

    if (!splash) {
      setIsSplashVisible(true);
      sessionStorage.setItem('splash', 'true');
    } else {
      setIsSplashVisible(false);
    }

    if (!visit) {
      setIsFirstVisit(true);
      localStorage.setItem('visit', 'true');
    } else {
      setIsFirstVisit(false);
    }

    setIsLoading(false); // 모든 초기화가 끝난 후 로딩 상태를 false로 설정
  }, []);

  if (isLoading) {
    return (
      <div
        className="root-container"
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
          backgroundColor: '#fff',
        }}
      >
        <Bounce width={60} height={60} />
      </div>
    );
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div
          className="root-container"
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
            backgroundColor: '#fff',
          }}
        >
          {loading && <div>로딩 중...</div>}
          <Header display={display} />
          {children}
          <GNB />
          {isFirstVisit && <OnBoarding />}
          {isSplashVisible && <Splash />}
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
};

export default memo(Providers);
