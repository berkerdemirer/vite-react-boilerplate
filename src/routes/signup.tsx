import { Link, Navigate } from 'react-router';
import { SignupForm } from '@/components/form/signup-form';
import { useSession } from '@/lib/auth';
import { config } from '@/lib/config';

export default function Signup() {
  const { data } = useSession();

  if (data?.user) {
    return <Navigate to="/dashboard" replace />;
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
        <SignupForm />
      </div>
    </div>
  );
}
