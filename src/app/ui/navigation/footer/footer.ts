import { Component } from '@angular/core';
import { Wordmark } from '../../brand/wordmark/wordmark';

interface FooterColumn {
  title: string;
  items: string[];
}

const COLUMNS: FooterColumn[] = [
  { title: 'Servicios', items: ['Aplicaciones web', 'Páginas & landings', 'Automatizaciones', 'Integraciones / API'] },
  { title: 'Empresa', items: ['Nosotros', 'Proyectos', 'Blog', 'Contacto'] },
  { title: 'Recursos', items: ['Soporte', 'Estado', 'Términos', 'Privacidad'] },
];

/** Dark marketing footer with columns and fine print. */
@Component({
  selector: 'app-footer',
  imports: [Wordmark],
  templateUrl: './footer.html',
})
export class Footer {
  readonly columns = COLUMNS;
}
