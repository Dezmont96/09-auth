import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api/serverApi';
import FilteredNotesClient from './Notes.client';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = slug?.[0] === 'all' ? 'All Notes' : slug?.[0] || 'Notes';
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  return {
    title: `Notes: ${capitalizedCategory}`,
    description: `Browse and manage notes under the ${capitalizedCategory} category.`,
    openGraph: {
      title: `Notes: ${capitalizedCategory}`,
      description: `Browse and manage notes under the ${capitalizedCategory} category.`,
      url: `/notes/filter/${slug?.[0] || 'all'}`,
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
    },
  };
}

export default async function NotesPage({ params }: Props) {
  const { slug } = await params;
  const categoryId = slug?.[0] === 'all' ? undefined : slug?.[0];

  const queryClient = new QueryClient();
  
  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', categoryId],
    queryFn: () => fetchNotes({ page: 1, search: '', tag: categoryId }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <FilteredNotesClient initialTag={categoryId || 'all'} />
    </HydrationBoundary>
  );
}