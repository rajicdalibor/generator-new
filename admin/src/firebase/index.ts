import { initializeApp } from 'firebase/app';

// Needed to declare global variable for app check debug token
// declare global {
//   interface Window {
//     FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
//   }
// }

const firebaseConfig = {
  "projectId": "generator-new-dev",
  "appId": "1:737421057347:web:f791f98f5e3178097fe3f6",
  "storageBucket": "generator-new-dev.firebasestorage.app",
  "apiKey": "AIzaSyDJr5Jzi7KvaOpLOvepTzxV8zgfw8EL8H0",
  "authDomain": "generator-new-dev.firebaseapp.com",
  "messagingSenderId": "737421057347"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Initialize Firebase analytics
// export const analytics = getAnalytics(app);

// Debug token for app check
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = process.env.NODE_ENV === 'development';
// Initialize Firebase app check
// export const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaEnterpriseProvider(import.meta.env.VITE_RE_CAPTCHA_KEY ?? ''),
//   isTokenAutoRefreshEnabled: true, // Set to true to allow auto-refresh.
// });
