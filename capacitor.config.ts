import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'nota4president',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.100:3000',
    cleartext: true
  }
};

export default config;
