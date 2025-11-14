'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMe, updateMe } from '@/lib/api/clientApi';
import { useAuthStore } from '@/lib/store/authStore';
import Image from 'next/image';
import css from './EditProfilePage.module.css';
import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

export default function EditProfilePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [username, setUsername] = useState('');
  const { setUser } = useAuthStore();

  const { data: user, isLoading, isError } = useQuery({
    queryKey: ['user-profile'],
    queryFn: getMe,
  });

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  const mutation = useMutation({
    mutationFn: (newUsername: string) => updateMe({ username: newUsername }),
    onSuccess: (updatedUser) => {
      setUser(updatedUser); 
      queryClient.invalidateQueries({ queryKey: ['user-profile'] });
      router.push('/profile');
    },
    onError: (error: any) => {
      alert(error.response?.data?.message || 'Failed to update profile');
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(username);
  };

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage>Failed to load user data.</ErrorMessage>;

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        {user?.avatar && (
            <Image 
              src={user.avatar}
              alt="User Avatar"
              width={120}
              height={120}
              className={css.avatar}
            />
        )}

        <form className={css.profileInfo} onSubmit={handleSubmit}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input 
              id="username"
              type="text"
              className={css.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <p>Email: {user?.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton} disabled={mutation.isPending}>
              {mutation.isPending ? 'Saving...' : 'Save'}
            </button>
            <button type="button" className={css.cancelButton} onClick={() => router.push('/profile')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}