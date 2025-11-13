import api from './api';
import type { Note, CreateNotePayload } from '@/types/note';
import type { User } from '@/types/user';
import type { AuthRequest, AuthResponse, UpdateUserPayload } from './types';

// --- Note API ---
export const fetchNotes = async (params: { page?: number; search?: string; tag?: string } = {}) => {
  const { page = 1, search = '', tag } = params;
  const response = await api.get('/notes', { params: { page, search, perPage: 12, ...(tag && { tag }) } });
  return response.data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const response = await api.get(`/notes/${noteId}`);
  return response.data;
};

export const createNote = async (noteData: CreateNotePayload): Promise<Note> => {
  const response = await api.post('/notes', noteData);
  return response.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const response = await api.delete(`/notes/${noteId}`);
  return response.data;
};

// --- Auth API ---
export const register = async (credentials: AuthRequest): Promise<AuthResponse> => {
  const response = await api.post('/auth/register', credentials);
  return response.data;
};

export const login = async (credentials: AuthRequest): Promise<AuthResponse> => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};

export const checkSession = async (): Promise<AuthResponse> => {
  const response = await api.get('/auth/session');
  return response.data;
};

// --- User API ---
export const getMe = async (): Promise<User> => {
  const response = await api.get('/users/me');
  return response.data;
};

export const updateMe = async (userData: UpdateUserPayload): Promise<User> => {
  const response = await api.patch('/users/me', userData);
  return response.data;
};