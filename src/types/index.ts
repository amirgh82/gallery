// Re-export all types for easier imports
export * from './auth';
export * from './FAQ';

// Common types that might be used throughout the application
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface User {
  id: string;
  phone: string;
  name?: string;
  createdAt: string;
  updatedAt: string;
}
