import { BetterFetchOption } from 'better-auth/react';
import { toast } from 'sonner';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getAuthErrorMessage } from '@/lib/auth-errors';

type UseAuthFetchOptionsProps = {
  redirectTo?: string;
  showSuccess?: boolean;
};

export function useAuthFetchOptions({
  redirectTo = '/dashboard',
  showSuccess = false,
}: UseAuthFetchOptionsProps = {}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchOptions: BetterFetchOption = {
    onResponse: () => {
      setLoading(false);
    },
    onRequest: () => {
      setLoading(true);
    },
    onError: (context) => {
      const errorMessage = getAuthErrorMessage(context.error.code);
      toast.error(errorMessage || context.error.message);
    },
    onSuccess: async () => {
      if (showSuccess) {
        setSuccess(true);
        setTimeout(() => {
          navigate(redirectTo);
        }, 5000);
      } else if (redirectTo) {
        navigate(redirectTo);
      }
    },
  };

  const socialFetchOptions: BetterFetchOption = {
    onResponse: () => {
      setSocialLoading(false);
    },
    onRequest: () => {
      setSocialLoading(true);
    },
    onError: (context) => {
      const errorMessage = getAuthErrorMessage(context.error.code);
      toast.error(errorMessage || context.error.message);
    },
  };

  return {
    fetchOptions,
    socialFetchOptions,
    loading,
    socialLoading,
    success,
  };
}
