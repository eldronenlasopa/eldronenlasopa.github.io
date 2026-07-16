import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import type { ApiAdminUser, ApiCompany, ApiProject, ApiResponse, ApiReview, ApiTicket, ApiUser } from './models/api.models';

export interface AdminUserInput {
  name: string;
  email: string;
  role: string;
  companyName?: string;
  status: string;
  sendInvite: boolean;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  private unwrap<T>(request: Observable<ApiResponse<T>>): Observable<T> {
    return request.pipe(map(response => response.data));
  }

  login(email: string, password: string): Observable<ApiUser> {
    return this.unwrap(this.http.post<ApiResponse<ApiUser>>(`${this.baseUrl}/auth/login`, { email, password }));
  }

  forgotPassword(email: string): Observable<void> {
    return this.unwrap(this.http.post<ApiResponse<void>>(`${this.baseUrl}/auth/forgot-password`, { email }));
  }

  resetPassword(token: string, password: string): Observable<void> {
    return this.unwrap(this.http.post<ApiResponse<void>>(`${this.baseUrl}/auth/reset-password`, { token, password }));
  }

  projects(): Observable<ApiProject[]> { return this.unwrap(this.http.get<ApiResponse<ApiProject[]>>(`${this.baseUrl}/projects`)); }
  project(slug: string): Observable<ApiProject> {
    return this.unwrap(this.http.get<ApiResponse<ApiProject>>(`${this.baseUrl}/projects/${encodeURIComponent(slug)}`));
  }
  clientProjects(): Observable<ApiProject[]> { return this.unwrap(this.http.get<ApiResponse<ApiProject[]>>(`${this.baseUrl}/projects/client`)); }
  reviews(): Observable<ApiReview[]> { return this.unwrap(this.http.get<ApiResponse<ApiReview[]>>(`${this.baseUrl}/reviews`)); }
  companies(): Observable<ApiCompany[]> { return this.unwrap(this.http.get<ApiResponse<ApiCompany[]>>(`${this.baseUrl}/companies`)); }
  tickets(): Observable<ApiTicket[]> { return this.unwrap(this.http.get<ApiResponse<ApiTicket[]>>(`${this.baseUrl}/tickets`)); }

  createTicket(input: { title: string; description: string; priority: string }): Observable<ApiTicket> {
    return this.unwrap(this.http.post<ApiResponse<ApiTicket>>(`${this.baseUrl}/tickets`, input));
  }

  createProposal(input: unknown): Observable<unknown> { return this.unwrap(this.http.post<ApiResponse<unknown>>(`${this.baseUrl}/proposals`, input)); }
  createContact(input: unknown): Observable<unknown> { return this.unwrap(this.http.post<ApiResponse<unknown>>(`${this.baseUrl}/contacts`, input)); }

  adminUsers(): Observable<ApiAdminUser[]> {
    return this.unwrap(this.http.get<ApiResponse<ApiAdminUser[]>>(`${this.baseUrl}/admin/users`));
  }
  createAdminUser(input: AdminUserInput): Observable<ApiAdminUser> {
    return this.unwrap(this.http.post<ApiResponse<ApiAdminUser>>(`${this.baseUrl}/admin/users`, input));
  }
  updateAdminUser(id: string, input: AdminUserInput): Observable<ApiAdminUser> {
    return this.unwrap(this.http.put<ApiResponse<ApiAdminUser>>(`${this.baseUrl}/admin/users/${encodeURIComponent(id)}`, input));
  }
  deleteAdminUser(id: string): Observable<void> {
    return this.unwrap(this.http.delete<ApiResponse<void>>(`${this.baseUrl}/admin/users/${encodeURIComponent(id)}`));
  }
}
