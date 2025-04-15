import { Navigate, Outlet } from 'react-router';
import { useSession } from '@/lib/auth';

const ProtectedRoute = () => {
  const { data: user, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
