import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createNote } from '@/lib/api/clientApi';
import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNote.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create a New Note',
  description: 'Add a new note to your personal collection.',
  openGraph: {
    title: 'Create a New Note',
    description: 'Add a new note to your personal collection.',
    url: '/notes/action/create',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function CreateNotePage() {
  async function createNoteAction(formData: FormData) {
    'use server';

    const newNote = {
      title: formData.get('title') as string,
      content: formData.get('content') as string,
      tag: formData.get('tag') as string,
    };

    try {
      await createNote(newNote);
    } catch (error) {
      console.error('Failed to create note:', error);
      return;
    }

    revalidatePath('/notes/filter/all', 'layout');
    redirect('/notes/filter/all');
  }

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm action={createNoteAction} />
      </div>
    </main>
  );
}