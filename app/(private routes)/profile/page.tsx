import { getMe } from '@/lib/api/serverApi';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import css from './ProfilePage.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'User Profile',
  description: 'View and manage your user profile on NoteHub.',
};

export default async function ProfilePage() {
  let user;
  try {
    user = await getMe();
  } catch (error) {
    redirect('/sign-in');
  }

  if (!user) {
    redirect('/sign-in');
  }

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={user.avatar || '/default-avatar.png'}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>
            Username: {user.username}
          </p>
          <p>
            Email: {user.email}
          </p>
        </div>
      </div>
    </main>
  );
}