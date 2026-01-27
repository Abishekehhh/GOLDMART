import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.goldmart.app',
  appName: 'Goldmart',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    // For development, you can use your local server:
    // url: 'http://localhost:8080',
    // cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FFD700',
      showSpinner: false,
      androidSpinnerStyle: 'small',
      spinnerColor: '#FF8C00'
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#FFD700'
    }
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
    }
  }
};

export default config;
