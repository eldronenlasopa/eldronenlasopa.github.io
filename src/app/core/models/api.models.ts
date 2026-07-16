export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: unknown;
  timestamp: string;
}

export interface ApiProject {
  id: string;
  slug: string;
  title: string;
  clientName: string;
  category: string;
  year: number;
  progress: number;
  status: string;
  description: string;
  tags: string[];
}

export interface ApiReview { id: string; authorName: string; companyName?: string; body: string; rating: number; status: string; createdAt: string; }
export interface ApiCompany { id: string; name: string; sector?: string; description?: string; logoUrl?: string; websiteUrl?: string; isPublished: boolean; }
export interface ApiTicket { id: string; code: string; title: string; description: string; priority: string; status: string; createdAt: string; updatedAt?: string; }
export interface ApiUser { id: string; name: string; email: string; role: string; token: string; }
export interface ApiAdminUser { id: string; name: string; email: string; role: string; companyName?: string; status: string; lastLoginAt?: string; }
