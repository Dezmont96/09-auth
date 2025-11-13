'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuthStore } from '@/lib/store/authStore';
import { logout } from '@/lib/api/clientApi';
import css from './AuthNavigation.module.css';

export default function AuthNavigation() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { isAuthenticated, user, clearIsAuthenticated } = useAuthStore();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      clearIsAuthenticated();
      queryClient.clear(); 
      router.push('/sign-in');
    },
    onError: (error: any) => {
      console.error('Logout failed:', error);
      clearIsAuthenticated();
      queryClient.clear();
      router.push('/sign-in');
    }
  });

  return (
    <>
      {isAuthenticated && user ? (
        <>
          <li className={css.navigationItem}>
            <Link href="/profile" className={css.navigationLink}>
              Profile
            </Link>
          </li>
          <li className={css.navigationItem}>
            <p className={css.userEmail}>{user.email}</p>
            <button
              className={css.logoutButton}
              onClick={() => mutation.mutate()}
              disabled={mutation.isPending}
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
          <li className={css.navigationItem}>
            <Link href="/sign-in" className={css.navigationLink}>
              Login
            </Link>
          </li>
          <li className={css.navigationItem}>
            <Link href="/sign-up" className={css.navigationLink}>
              Sign up
            </Link>
          </li>
        </>
      )}
    </>
  );
}