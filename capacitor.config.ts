import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.skybrg.skyBridge',
  appName: '스카이브릿지',
  webDir: '.next',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
  server: {
    url: 'http://localhost:3000',
    cleartext: true,
  },
};

export default config;
