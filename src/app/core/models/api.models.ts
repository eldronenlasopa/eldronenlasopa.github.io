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
  metric?: string | null;
  imageUrl?: string | null;
  challenge?: string | null;
  solution?: string | null;
  accentColor?: string | null;
  tags: string[];
  isPublished?: boolean;
  displayOrder?: number;
}

export interface ApiReview {
  id: string;
  authorName: string;
  companyName?: string | null;
  role?: string | null;
  body: string;
  rating: number;
  photoUrl?: string | null;
  accentColor?: string | null;
  status: number;
  displayOrder: number;
  createdAt: string;
  updatedAt?: string;
}
export interface ApiCompany {
  id: string;
  name: string;
  sector?: string | null;
  description?: string | null;
  result?: string | null;
  logoUrl?: string | null;
  websiteUrl?: string | null;
  glyph?: string | null;
  accentColor?: string | null;
  isPublished: boolean;
  displayOrder: number;
}
export interface ApiServiceItem {
  id: string;
  title: string;
  body: string;
  glyph?: string | null;
  accentColor?: string | null;
  isPublished: boolean;
  displayOrder: number;
}
export interface ApiPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isFeatured: boolean;
  cta: string;
  isPublished: boolean;
  displayOrder: number;
}
export interface ApiHeaderLink { label: string; href: string; }
export interface ApiFooterColumn { title: string; links: string[]; }
export interface ApiHeader { cta: string; links: ApiHeaderLink[]; }
export interface ApiFooter { about: string; email: string; phone: string; columns: ApiFooterColumn[]; }
export interface ApiCms {
  companies: ApiCompany[];
  reviews: ApiReview[];
  services: ApiServiceItem[];
  projects: ApiProject[];
  plans: ApiPlan[];
  header: ApiHeader;
  footer: ApiFooter;
}
export interface ApiSiteContent {
  id: string;
  key: string;
  title: string;
  body: string;
  imageUrl?: string | null;
  status: number;
  updatedAt: string;
}
export interface ApiTicket { id: string; code: string; title: string; description: string; priority: string; status: string; createdAt: string; updatedAt?: string; }
export interface ApiUser { id: string; name: string; email: string; role: string; token: string; }
export interface ApiAdminUser { id: string; name: string; email: string; role: string; isActive: boolean; createdAt: string; }
