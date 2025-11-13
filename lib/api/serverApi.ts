import { cookies } from 'next/headers';
import api from './api';
import type { Note } from '@/types/note';
import type { User } from '@/types/user';
import type { AuthResponse } from './types';

async function getAuthHeaders() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  
  return {
    Cookie: session ? `${session.name}=${session.value}` : '',
  };
}

export const fetchNotes = async (params: { page?: number; search?: string; tag?: string } = {}) => {
  const { page = 1, search = '', tag } = params;
  const headers = await getAuthHeaders();
  
  const response = await api.get('/notes', {
    params: { page, search, perPage: 12, ...(tag && { tag }) },
    headers,
  });
  return response.data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const headers = await getAuthHeaders();
  
  const response = await api.get(`/notes/${noteId}`, { headers });
  return response.data;
};

export const getMe = async (): Promise<User> => {
  const headers = await getAuthHeaders();

  const response = await api.get('/users/me', { headers });
  return response.data;
};

export const checkSession = async (): Promise<AuthResponse> => {
  const headers = await getAuthHeaders();

  const response = await api.get('/auth/session', { headers });
  return response.data;
};