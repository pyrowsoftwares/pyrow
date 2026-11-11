import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, isSupported, Analytics } from 'firebase/analytics';

/**
 * Firebase client configuration for Pyrow.
 * Values are retrieved from Vite environment variables (VITE_FIREBASE_*).
 */
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'pyrow-1d510.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'pyrow-1d510',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'pyrow-1d510.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || '',
};

const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let app: FirebaseApp | null = null;
let analyticsPromise: Promise<Analytics | null> = Promise.resolve(null);

if (isConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    if (typeof window !== 'undefined') {
      analyticsPromise = isSupported().then((supported) => {
        return supported && app ? getAnalytics(app) : null;
      });
    }
  } catch (error) {
    console.warn('[Pyrow Firebase] Initialization warning:', error);
  }
} else {
  // Graceful development mode fallback
  if (import.meta.env.DEV) {
    console.info(
      '[Pyrow Firebase] Credentials not detected in environment. Add VITE_FIREBASE_* keys to .env to connect your project.'
    );
  }
}

export { app, analyticsPromise };
export default app;

