import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7';
import { Toaster } from 'sonner';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router';
import Loader from '@/components/ui/loader';
import Dashboard from '@/routes/dashboard/index.tsx';
import ForgetPassword from '@/routes/forget-password.tsx';
import NotFound from '@/routes/not-found.tsx';
import PrivacyPolicy from '@/routes/privacy-policy.tsx';
import ProtectedRoute from '@/routes/protected-route.tsx';
import ResetPassword from '@/routes/reset-password.tsx';
import Signin from '@/routes/signin.tsx';
import Signup from '@/routes/signup.tsx';
import TermsOfService from '@/routes/tos.tsx';
import './index.css';
import Layout from './layout';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: 'signin', element: <Signin /> },
      { path: 'signup', element: <Signup /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-service', element: <TermsOfService /> },
      {
        element: <ProtectedRoute />,
        children: [{ path: 'dashboard', element: <Dashboard /> }],
      },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Toaster richColors position="top-center" />
        <QueryClientProvider client={queryClient}>
          <NuqsAdapter>
            <RouterProvider router={router} />
          </NuqsAdapter>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  </StrictMode>,
);
