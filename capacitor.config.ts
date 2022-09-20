import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'meme-app',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.52:3000',
    cleartext: true
  },
};

export default config;
