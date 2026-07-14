import { Component } from '@angular/core';
import { Card } from '../../../ui/data-display/card/card';

interface Service {
  icon: string;
  title: string;
  body: string;
}

const SERVICES: Service[] = [
  {
    icon: '◆',
    title: 'Aplicaciones web',
    body: 'Plataformas y paneles a medida, del MVP a producción, con la escala que tu operación necesita.',
  },
  { icon: '▲', title: 'Páginas & landings', body: 'Sitios rápidos y bien posicionados que convierten visitas en clientes.' },
  { icon: '⬡', title: 'Automatizaciones', body: 'Conectamos tus herramientas y eliminamos el trabajo manual repetitivo.' },
  { icon: '⬢', title: 'Integraciones / API', body: 'Unimos tus sistemas: pagos, CRMs, ERPs y servicios de terceros.' },
];

@Component({
  selector: 'app-services-section',
  imports: [Card],
  templateUrl: './services-section.html',
})
export class ServicesSection {
  readonly services = SERVICES;
}
