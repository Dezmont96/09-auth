import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { CreateNotePayload } from '@/types/note';

const initialDraft = {
  title: '',
  content: '',
  tag: 'Todo',
};

interface DraftState {
  draft: CreateNotePayload;
  setDraft: (note: Partial<CreateNotePayload>) => void;
  clearDraft: () => void;
}

export const useNoteStore = create<DraftState>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) =>
        set((state) => ({
          draft: { ...state.draft, ...note },
        })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: 'note-draft-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);