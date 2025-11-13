import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api/serverApi';
import NoteDetailsClient from './NoteDetails.client';
import type { Metadata } from 'next';

interface NoteDetailsPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: NoteDetailsPageProps): Promise<Metadata> {
  try {
    const note = await fetchNoteById(params.id);
    const description = note.content ? note.content.substring(0, 155) : 'No additional content.';
    return {
      title: note.title,
      description,
      openGraph: {
        title: note.title,
        description,
        url: `/notes/${params.id}`,
        images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
      },
    };
  } catch (error) {
    return {
      title: 'Note Not Found',
      description: 'The requested note could not be found.',
    };
  }
}

export default async function NoteDetailsPage({ params }: NoteDetailsPageProps) {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}