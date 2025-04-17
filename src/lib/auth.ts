import { createAuthClient } from 'better-auth/react';
import { ENV } from '@/lib/env';

export const {
  signIn,
  signUp,
  useSession,
  forgetPassword,
  resetPassword,
  signOut,
  sendVerificationEmail,
} = createAuthClient({
  baseURL: ENV.VITE_API_BASE_URL,
});
