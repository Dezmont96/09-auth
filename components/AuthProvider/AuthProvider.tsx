'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getMe } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import Loader from '../Loader/Loader';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, isAuthenticated } = useAuthStore();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getMe,
    enabled: !isAuthenticated,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  useEffect(() => {

    if (isSuccess && data) {
      setUser(data);
    }
    else if (isError) {
      setUser(null);
    }
  }, [isSuccess, isError, data, setUser]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}