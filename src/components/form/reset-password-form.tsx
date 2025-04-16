import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/form/form';
import { InputField } from '@/components/form/input-field';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { resetPassword } from '@/lib/auth';
import { useAuthFetchOptions } from '@/hooks/use-auth-fetch-options';

const schema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof schema>;

interface ResetPasswordFormProps {
  token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const { fetchOptions, loading } = useAuthFetchOptions({
    redirectTo: '/signin',
  });

  const onSubmit = useCallback(
    async (data: FormData) => {
      await resetPassword({
        newPassword: data.password,
        token,
        fetchOptions,
      });
    },
    [token, fetchOptions],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your new password</CardDescription>
      </CardHeader>
      <CardContent>
        <Form form={form} onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            <InputField
              name="password"
              label="New Password"
              type="password"
              placeholder="Enter your new password"
              datatest-id="password-field"
            />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your new password"
              data-testid="confirm-password-field"
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                'Reset password'
              )}
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}
