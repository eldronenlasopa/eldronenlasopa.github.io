import { Injectable, signal } from '@angular/core';
import type { BadgeTone } from '../ui/data-display/badge/badge';

export type TicketPriority = 'Alta' | 'Media' | 'Baja';

export interface Ticket {
  id: string;
  title: string;
  prio: [TicketPriority, BadgeTone];
  estado: string;
  fecha: string;
  description?: string;
}

const PRIORITY_TONE: Record<TicketPriority, BadgeTone> = {
  Alta: 'danger',
  Media: 'warning',
  Baja: 'neutral',
};

const SEED: Ticket[] = [
  { id: 'DR-241', title: 'Error al exportar reporte PDF', prio: ['Alta', 'danger'], estado: 'Abierto', fecha: 'Hoy' },
  { id: 'DR-238', title: 'Agregar filtro por fecha', prio: ['Media', 'warning'], estado: 'En revisión', fecha: 'Ayer' },
  { id: 'DR-235', title: 'Cambiar logo del footer', prio: ['Baja', 'neutral'], estado: 'Cerrado', fecha: '12 jul' },
];

/** In-memory mock tickets store — this site has no backend. */
@Injectable({ providedIn: 'root' })
export class TicketsService {
  private readonly _tickets = signal<Ticket[]>(SEED);
  private nextId = 242;

  readonly tickets = this._tickets.asReadonly();

  addTicket(input: { title: string; priority: TicketPriority; description: string }): Ticket {
    const ticket: Ticket = {
      id: `DR-${this.nextId++}`,
      title: input.title,
      prio: [input.priority, PRIORITY_TONE[input.priority]],
      estado: 'Abierto',
      fecha: 'Hoy',
      description: input.description,
    };
    this._tickets.update((list) => [ticket, ...list]);
    return ticket;
  }
}
