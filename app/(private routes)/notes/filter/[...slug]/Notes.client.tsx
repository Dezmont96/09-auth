'use client';

import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useDebounce } from 'use-debounce';
import Link from 'next/link';

import { fetchNotes } from '@/lib/api/clientApi';
import SearchBox from '@/components/SearchBox/SearchBox';
import Pagination from '@/components/Pagination/Pagination';
import NoteList from '@/components/NoteList/NoteList';
import Loader from '@/components/Loader/Loader';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';

import css from './Notes.module.css';

interface FilteredNotesClientProps {
  initialTag: string;
}

export default function FilteredNotesClient({ initialTag }: FilteredNotesClientProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const tagForQuery = initialTag === 'all' ? undefined : initialTag;

  const { data, isLoading, isError, isPlaceholderData } = useQuery({
    queryKey: ['notes', currentPage, debouncedSearchTerm, tagForQuery],
    queryFn: () => fetchNotes({ page: currentPage, search: debouncedSearchTerm, tag: tagForQuery }),
    placeholderData: keepPreviousData,
  });

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  const totalPages = data?.totalPages ?? 0;
  const showLoader = isLoading || isPlaceholderData;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox value={searchTerm} onChange={handleSearchChange} />
        
        {totalPages > 1 && (
          <Pagination
            pageCount={totalPages}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        )}
        
        <Link href="/notes/action/create" className={css.button}>
          Create note +
        </Link>
      </header>
      
      {showLoader && <Loader />}
      {isError && !showLoader && <ErrorMessage>Failed to load notes.</ErrorMessage>}
      
      {data?.notes && data.notes.length > 0 && <NoteList notes={data.notes} />}
      
      {data?.notes?.length === 0 && !showLoader && !isError && (
          <p style={{ textAlign: 'center' }}>No notes found for this category.</p>
      )}
    </div>
  );
}