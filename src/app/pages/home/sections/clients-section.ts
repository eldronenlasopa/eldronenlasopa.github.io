import { Component } from '@angular/core';

interface ClientItem {
  name: string;
  sector: string;
  glyph: string;
  result: string;
  color: string;
}

const CLIENTS: ClientItem[] = [
  { name: 'Comercial Andina', sector: 'Retail', glyph: '◧', result: '−40% tiempo de conteo', color: '#FF6B35' },
  { name: 'Estudio Vega', sector: 'Legal', glyph: '⬡', result: '8 h/sem ahorradas', color: '#22D3EE' },
  { name: 'Nova Fitness', sector: 'Fitness', glyph: '▲', result: '+3.2× conversión', color: '#F7C948' },
  { name: 'MercadoSur', sector: 'E-commerce', glyph: '⬢', result: '99.9% uptime', color: '#22D3EE' },
  { name: 'Grupo Delta', sector: 'Servicios', glyph: '◨', result: '1.2k usuarios activos', color: '#FF6B35' },
  { name: 'Clínica Sur', sector: 'Salud', glyph: '◇', result: '+65% citas confirmadas', color: '#7DE8F7' },
];

const STATS: [string, string][] = [
  ['+40', 'proyectos'],
  ['12', 'sectores'],
  ['98%', 'repiten'],
];

@Component({
  selector: 'app-clients-section',
  templateUrl: './clients-section.html',
})
export class ClientsSection {
  readonly clients = CLIENTS;
  readonly stats = STATS;
}
