import { useQueryState } from 'nuqs';
import { Link, Navigate } from 'react-router';
import { ResetPasswordForm } from '@/components/form/reset-password-form';
import { useSession } from '@/lib/auth';
import { config } from '@/lib/config';

export default function ResetPassword() {
  const { data } = useSession();
  const [token] = useQueryState('token');

  if (data?.user) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!token) {
    return <div>Invalid or missing reset token</div>;
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="#"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
            Logo
          </div>
          {config.appName}
        </Link>
        <ResetPasswordForm token={token} />
      </div>
    </div>
  );
}
