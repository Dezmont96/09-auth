'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useNoteStore } from '@/lib/store/noteStore';
import css from './NoteForm.module.css';

interface NoteFormProps {
  action: (formData: FormData) => Promise<void>;
}

const NoteForm: React.FC<NoteFormProps> = ({ action }) => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const { draft, setDraft, clearDraft } = useNoteStore();
  
  useEffect(() => {
    return () => {
      if (formRef.current?.dataset.submitted === 'true') {
        clearDraft();
      }
    };
  }, [clearDraft]);

  const handleFormAction = async (formData: FormData) => {
    if (formRef.current) {
      formRef.current.dataset.submitted = 'true';
    }
    await action(formData);
  };
  
  const handleCancel = () => {
    router.back();
  };
  
  return (
    <form ref={formRef} action={handleFormAction} className={css.form}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          className={css.input}
          defaultValue={draft.title}
          onChange={(e) => setDraft({ title: e.target.value })}
          required
          minLength={3}
          maxLength={50}
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className={css.textarea}
          defaultValue={draft.content}
          onChange={(e) => setDraft({ content: e.target.value })}
          maxLength={500}
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select
          id="tag"
          name="tag"
          className={css.select}
          defaultValue={draft.tag}
          onChange={(e) => setDraft({ tag: e.target.value })}
        >
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Meeting">Meeting</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      <div className={css.actions}>
        <button
          type="button"
          className={css.cancelButton}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className={css.submitButton}
        >
          Create note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;