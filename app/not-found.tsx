import Link from 'next/link';
import css from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'Sorry, the page you are looking for does not exist in NoteHub.',
  openGraph: {
    title: '404 - Page Not Found',
    description:
      'Sorry, the page you are looking for does not exist in NoteHub.',
    url: '/404',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function NotFound() {
  return (
    <main className={css.container}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
        Go back to Home
      </Link>
    </main>
  );
}
