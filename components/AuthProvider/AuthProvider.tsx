'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { checkSession } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import Loader from '../Loader/Loader';

const privateRoutes = ['/profile', '/notes'];
const authRoutes = ['/sign-in', '/sign-up'];

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, setUser, clearIsAuthenticated } = useAuthStore();
  
  const isPrivateRoute = privateRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.includes(pathname);

  const { data, isError, isSuccess, isLoading } = useQuery({
    queryKey: ['session'],
    queryFn: checkSession,
    enabled: !isAuthenticated, 
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (isSuccess && data?.user) {
      setUser(data.user);
    } else if (isSuccess && !data?.user) {
        clearIsAuthenticated();
    } else if (isError) {
        clearIsAuthenticated();
    }
  }, [isSuccess, isError, data, setUser, clearIsAuthenticated]);
  
  useEffect(() => {
    if (!isLoading) {
        if (isPrivateRoute && !isAuthenticated) {
            router.replace('/sign-in');
        } else if (isAuthRoute && isAuthenticated) {
            router.replace('/profile');
        }
    }
  }, [isLoading, isAuthenticated, isPrivateRoute, isAuthRoute, router]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}