import type { User } from '@/types/user';

export interface AuthRequest {
  email?: string;
  password?: string;
}

export interface AuthResponse {
  user: User;
}

export interface UpdateUserPayload {
  username?: string;
}