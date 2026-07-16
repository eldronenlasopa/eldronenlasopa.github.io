import { Component, computed, effect, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../../ui/data-display/card/card';
import { Badge } from '../../../ui/data-display/badge/badge';
import { Button } from '../../../ui/actions/button/button';
import { Input } from '../../../ui/forms/input/input';
import { Textarea } from '../../../ui/forms/textarea/textarea';
import { Select } from '../../../ui/forms/select/select';
import { Wordmark } from '../../../ui/brand/wordmark/wordmark';
import { ToastService } from '../../../core/services/toast.service';
import { DialogService } from '../../../core/services/dialog.service';
import { CmsContentService, type CmsContentState } from '../../../core/cms-content.service';

type FieldType = 'text' | 'textarea' | 'select' | 'color' | 'glyph' | 'image';

interface FieldDef {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  options?: string[];
  shape?: 'rect' | 'circle';
  hint?: string;
}

type EntityItem = Record<string, string>;

interface EntityDef {
  collectionKey: keyof Pick<CmsContentState, 'companies' | 'reviews' | 'services' | 'projects' | 'plans' | 'sections'>;
  label: string;
  icon: string;
  title: string;
  addLabel: string;
  circleThumb?: boolean;
  imageKey?: string;
  glyphKey?: string;
  fixed?: boolean;
  fields: FieldDef[];
  blank: EntityItem;
  seed: EntityItem[];
  rowTitle: (item: EntityItem) => string;
  rowSub: (item: EntityItem) => string;
}

interface HeaderLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: string;
}

const PALETTE = ['#FF6B35', '#22D3EE', '#F7C948', '#7C6FF0', '#1F8A5B'];
const GLYPHS = ['◧', '⬡', '▲', '⬢', '◨', '◇'];

const ENTITIES: Record<string, EntityDef> = {
  secciones: {
    collectionKey: 'sections',
    label: 'Secciones',
    icon: '▥',
    title: 'Secciones de la página',
    addLabel: 'sección',
    imageKey: 'image',
    fixed: true,
    blank: {},
    fields: [
      { key: 'image', label: 'Imagen de la sección', type: 'image', shape: 'rect', hint: 'JPG, PNG, WebP o SVG. Máximo 1 MB.' },
      { key: 'eyebrow', label: 'Etiqueta superior', type: 'text', placeholder: 'Qué hacemos' },
      { key: 'title', label: 'Título principal', type: 'text', placeholder: 'Un socio tecnológico' },
      { key: 'highlight', label: 'Texto destacado', type: 'text', placeholder: 'Opcional' },
      { key: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Texto de apoyo de la sección.' },
      { key: 'items', label: 'Datos secundarios (uno por línea)', type: 'textarea', placeholder: 'React\nNode.js\nPython' },
    ],
    seed: [],
    rowTitle: (item) => item['name'] || 'Sección',
    rowSub: (item) => item['title'],
  },
  empresas: {
    collectionKey: 'companies',
    label: 'Empresas',
    icon: '◑',
    title: 'Empresas / clientes',
    addLabel: 'empresa',
    imageKey: 'logo',
    blank: { name: '', sector: '', result: '', logo: '', glyph: '◧', color: '#FF6B35' },
    fields: [
      { key: 'logo', label: 'Logo de la empresa', type: 'image', shape: 'rect', hint: 'PNG/SVG con fondo transparente' },
      { key: 'glyph', label: 'Ícono alternativo', type: 'glyph' },
      { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Comercial Andina' },
      { key: 'sector', label: 'Sector', type: 'text', placeholder: 'Retail' },
      { key: 'result', label: 'Métrica de resultado', type: 'text', placeholder: '−40% tiempo de conteo' },
      { key: 'color', label: 'Color de acento', type: 'color' },
    ],
    seed: [
      { name: 'Comercial Andina', sector: 'Retail', result: '−40% tiempo de conteo', logo: '', color: '#FF6B35' },
      { name: 'Estudio Vega', sector: 'Legal', result: '8 h/sem ahorradas', logo: '', color: '#22D3EE' },
      { name: 'Nova Fitness', sector: 'Fitness', result: '+3.2× conversión', logo: '', color: '#F7C948' },
    ],
    rowTitle: (item) => item['name'] || 'Sin nombre',
    rowSub: (item) => item['sector'],
  },
  resenas: {
    collectionKey: 'reviews',
    label: 'Reseñas',
    icon: '★',
    title: 'Reseñas de clientes',
    addLabel: 'reseña',
    circleThumb: true,
    imageKey: 'photo',
    blank: { name: '', role: '', company: '', quote: '', rating: '5', photo: '', color: '#FF6B35' },
    fields: [
      { key: 'photo', label: 'Foto de la persona', type: 'image', shape: 'circle', hint: 'Retrato cuadrado, se recorta en círculo' },
      { key: 'name', label: 'Nombre', type: 'text', placeholder: 'María Fernández' },
      { key: 'role', label: 'Cargo', type: 'text', placeholder: 'Gerente de operaciones' },
      { key: 'company', label: 'Empresa', type: 'text', placeholder: 'Comercial Andina' },
      { key: 'rating', label: 'Calificación', type: 'select', options: ['5', '4', '3', '2', '1'] },
      { key: 'color', label: 'Color de acento', type: 'color' },
      { key: 'quote', label: 'Reseña', type: 'textarea', placeholder: 'El panel nos cambió la operación…' },
    ],
    seed: [
      { name: 'María Fernández', role: 'Gerente de operaciones', company: 'Comercial Andina', quote: 'El panel de inventario nos cambió la operación por completo.', rating: '5', photo: '' },
      { name: 'Diego Vega', role: 'Fundador', company: 'Estudio Vega', quote: 'Automatizaron toda nuestra facturación. Recuperamos 8 horas a la semana.', rating: '5', photo: '' },
    ],
    rowTitle: (item) => item['name'] || 'Sin nombre',
    rowSub: (item) => item['company'],
  },
  servicios: {
    collectionKey: 'services',
    label: 'Qué hacemos',
    icon: '◆',
    title: 'Servicios (Qué hacemos)',
    addLabel: 'servicio',
    imageKey: 'image',
    glyphKey: 'glyph',
    blank: { title: '', body: '', image: '', glyph: '◆', color: '#FF6B35' },
    fields: [
      { key: 'image', label: 'Imagen del servicio', type: 'image', shape: 'rect', hint: 'Captura o fotografía. Máximo 1 MB.' },
      { key: 'glyph', label: 'Ícono', type: 'glyph' },
      { key: 'title', label: 'Título', type: 'text', placeholder: 'Aplicaciones web' },
      { key: 'color', label: 'Color de acento', type: 'color' },
      { key: 'body', label: 'Descripción', type: 'textarea', placeholder: 'Plataformas y paneles a medida…' },
    ],
    seed: [
      { title: 'Aplicaciones web', body: 'Plataformas y paneles a medida, del MVP a producción.', glyph: '◆', color: '#FF6B35' },
      { title: 'Páginas & landings', body: 'Sitios rápidos y bien posicionados que convierten.', glyph: '▲', color: '#22D3EE' },
      { title: 'Automatizaciones', body: 'Conectamos tus herramientas y eliminamos el trabajo manual.', glyph: '⬡', color: '#F7C948' },
      { title: 'Integraciones / API', body: 'Unimos tus sistemas: pagos, CRMs, ERPs y terceros.', glyph: '⬢', color: '#7C6FF0' },
    ],
    rowTitle: (item) => item['title'] || 'Sin título',
    rowSub: (item) => (item['body'] || '').slice(0, 40),
  },
  proyectos: {
    collectionKey: 'projects',
    label: 'Proyectos',
    icon: '▤',
    title: 'Proyectos del portafolio',
    addLabel: 'proyecto',
    imageKey: 'logo',
    blank: { title: '', client: '', cat: 'Web', year: '2026', metric: '', logo: '', summary: '', challenge: '', solution: '', color: '#FF6B35' },
    fields: [
      { key: 'logo', label: 'Logo / imagen del proyecto', type: 'image', shape: 'rect', hint: 'Logo del cliente o captura' },
      { key: 'title', label: 'Título', type: 'text', placeholder: 'Panel de inventario' },
      { key: 'client', label: 'Cliente', type: 'text', placeholder: 'Comercial Andina' },
      { key: 'cat', label: 'Categoría', type: 'select', options: ['Web', 'Landing', 'Automatización', 'Integración'] },
      { key: 'year', label: 'Año', type: 'text', placeholder: '2026' },
      { key: 'metric', label: 'Métrica principal', type: 'text', placeholder: '−40% tiempo de conteo' },
      { key: 'color', label: 'Color de acento', type: 'color' },
      { key: 'summary', label: 'Resumen', type: 'textarea', placeholder: 'Reemplazamos las hojas de cálculo por…' },
      { key: 'challenge', label: 'El reto (detalle)', type: 'textarea', placeholder: 'El conteo mensual tomaba 3 días…' },
      { key: 'solution', label: 'La solución (detalle)', type: 'textarea', placeholder: 'Un panel en tiempo real con roles…' },
    ],
    seed: [
      { title: 'Panel de inventario', client: 'Comercial Andina', cat: 'Web', year: '2026', metric: '−40% tiempo de conteo', logo: '', summary: 'Control de stock en tiempo real con alertas y reportes.', challenge: 'El conteo mensual tomaba 3 días de trabajo manual.', solution: 'Panel en tiempo real con roles e integración con POS.', color: '#FF6B35' },
      { title: 'Automatización de facturas', client: 'Estudio Vega', cat: 'Automatización', year: '2026', metric: '8 h/sem ahorradas', logo: '', summary: 'Emisión y envío de comprobantes conectando ventas con la SUNAT.', challenge: 'Cada factura se emitía a mano.', solution: 'Un flujo n8n que valida, emite y envía.', color: '#22D3EE' },
    ],
    rowTitle: (item) => item['title'] || 'Sin título',
    rowSub: (item) => `${item['client']} · ${item['cat']}`,
  },
  planes: {
    collectionKey: 'plans',
    label: 'Planes',
    icon: '▦',
    title: 'Planes de precios',
    addLabel: 'plan',
    imageKey: 'image',
    blank: { name: '', price: '', description: '', features: '', featured: 'No', cta: 'Empezar', image: '' },
    fields: [
      { key: 'image', label: 'Imagen del plan', type: 'image', shape: 'rect', hint: 'Imagen opcional. Máximo 1 MB.' },
      { key: 'name', label: 'Nombre del plan', type: 'text', placeholder: 'Crece' },
      { key: 'price', label: 'Precio', type: 'text', placeholder: 'S/ 3,500' },
      { key: 'featured', label: 'Destacado', type: 'select', options: ['No', 'Sí'] },
      { key: 'cta', label: 'Texto del botón', type: 'text', placeholder: 'Agendar llamada' },
      { key: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Aplicación web completa a medida.' },
      { key: 'features', label: 'Características (una por línea)', type: 'textarea', placeholder: 'App web a medida\nPanel de administración\nIntegraciones / API' },
    ],
    seed: [
      { name: 'Emprende', price: 'S/ 1,200', description: 'Para lanzar tu presencia digital.', features: 'Landing page a medida\nFormulario de contacto\nHosting 1 año incluido\n2 rondas de ajustes', featured: 'No', cta: 'Empezar' },
      { name: 'Crece', price: 'S/ 3,500', description: 'Aplicación web completa a medida.', features: 'App web a medida\nPanel de administración\nIntegraciones / API\nSoporte prioritario 6 meses', featured: 'Sí', cta: 'Agendar llamada' },
      { name: 'A medida', price: 'Custom', description: 'Proyectos complejos y automatización.', features: 'Alcance definido contigo\nAutomatizaciones\nEquipo dedicado\nSLA garantizado', featured: 'No', cta: 'Contáctanos' },
    ],
    rowTitle: (item) => item['name'] || 'Sin nombre',
    rowSub: (item) => item['price'],
  },
};

const TABS = [
  { id: 'secciones', label: 'Secciones', icon: '▥' },
  { id: 'empresas', label: 'Empresas', icon: '◑' },
  { id: 'resenas', label: 'Reseñas', icon: '★' },
  { id: 'servicios', label: 'Qué hacemos', icon: '◆' },
  { id: 'proyectos', label: 'Proyectos', icon: '▤' },
  { id: 'planes', label: 'Planes', icon: '▦' },
  { id: 'header', label: 'Header', icon: '☰' },
  { id: 'footer', label: 'Footer', icon: '▬' },
];

const INITIAL_HEADER_LINKS: HeaderLink[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Planes', href: '#planes' },
  { label: 'Nosotros', href: '#nosotros' },
];
const INITIAL_HEADER_CTA = 'Solicitar propuesta';

const INITIAL_FOOTER_ABOUT = 'Software a medida que hace crecer tu empresa. Del prototipo a producción.';
const INITIAL_FOOTER_EMAIL = 'hola@dronlab.pe';
const INITIAL_FOOTER_PHONE = '+51 993 908 435';
const INITIAL_FOOTER_COLUMNS: FooterColumn[] = [
  { title: 'Producto', links: 'Servicios\nPlanes\nProyectos' },
  { title: 'Empresa', links: 'Nosotros\nContacto\nBlog' },
  { title: 'Legal', links: 'Términos\nPrivacidad' },
];

/** Sub-página del panel admin: gestión de contenido web (empresas, reseñas, servicios, proyectos, planes, header, footer). No es una entrada del switch interno del panel — se navega como ruta aparte. */
@Component({
  selector: 'app-admin-content',
  imports: [Card, Badge, Button, Input, Textarea, Select, Wordmark],
  templateUrl: './admin-content.html',
})
export class AdminContent {
  private readonly router = inject(Router);
  private readonly toast = inject(ToastService);
  private readonly dialog = inject(DialogService);
  private readonly cms = inject(CmsContentService);

  readonly tabs = TABS;
  readonly palette = PALETTE;
  readonly glyphs = GLYPHS;

  readonly tab = signal('empresas');
  readonly currentEntity = computed(() => ENTITIES[this.tab()]);

  readonly items = signal<EntityItem[]>([]);
  readonly sel = signal(0);
  readonly draft = signal<EntityItem>({});
  readonly isNew = computed(() => this.sel() === -1);

  readonly headerLinks = signal<HeaderLink[]>([...INITIAL_HEADER_LINKS]);
  readonly headerCta = signal(INITIAL_HEADER_CTA);

  readonly footerAbout = signal(INITIAL_FOOTER_ABOUT);
  readonly footerEmail = signal(INITIAL_FOOTER_EMAIL);
  readonly footerPhone = signal(INITIAL_FOOTER_PHONE);
  readonly footerColumns = signal<FooterColumn[]>([...INITIAL_FOOTER_COLUMNS]);

  constructor() {
    effect(() => {
      this.loadTab(this.tab());
    });
  }

  tabClasses(id: string): string {
    const on = id === this.tab();
    return [
      'inline-flex cursor-pointer items-center gap-2 rounded-md px-4 py-2.5 font-body text-[14.5px] transition-all duration-200 ease-out',
      on ? 'bg-brand-orange font-semibold text-text-on-brand shadow-brand' : 'font-medium text-text-muted',
    ].join(' ');
  }

  rowButtonClasses(i: number): string {
    const on = i === this.sel();
    return [
      'flex w-full cursor-pointer items-center gap-3 border-b border-l-[3px] px-[18px] py-3 text-left transition-colors duration-150 ease-out',
      on ? 'border-b-border-subtle border-l-brand-orange bg-surface-sunken' : 'border-b-border-subtle border-l-transparent bg-transparent',
    ].join(' ');
  }

  rowThumbShapeClass(def: EntityDef): string {
    return def.circleThumb ? 'rounded-full' : 'rounded-sm';
  }

  rowImage(def: EntityDef, item: EntityItem): string {
    return def.imageKey ? item[def.imageKey] || '' : '';
  }

  rowGlyph(def: EntityDef, item: EntityItem): string {
    return (def.glyphKey && item[def.glyphKey]) || def.icon;
  }

  rowColor(item: EntityItem): string {
    return item['color'] || 'var(--brand-cyan)';
  }

  fieldColSpanClass(f: FieldDef): string {
    return f.type === 'textarea' || f.type === 'image' ? 'col-span-full' : '';
  }

  pick(i: number): void {
    this.sel.set(i);
    this.draft.set({ ...this.items()[i] });
  }

  setField(key: string, value: string): void {
    this.draft.update((d) => ({ ...d, [key]: value }));
  }

  onImageChange(key: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.toast.error('Archivo no válido', 'Selecciona una imagen JPG, PNG, WebP o SVG.');
      input.value = '';
      return;
    }
    if (file.size > 1024 * 1024) {
      this.toast.error('Imagen demasiado grande', 'La imagen debe pesar como máximo 1 MB.');
      input.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.setField(key, reader.result as string);
      input.value = '';
    };
    reader.readAsDataURL(file);
  }

  addNew(): void {
    const def = this.currentEntity();
    if (!def || def.fixed) return;
    this.sel.set(-1);
    this.draft.set({ ...def.blank });
  }

  save(): void {
    const def = this.currentEntity();
    if (!def) return;
    const value = this.draft();
    if (this.isNew()) {
      this.items.update((its) => [...its, value]);
      this.sel.set(this.items().length - 1);
    } else {
      const i = this.sel();
      this.items.update((its) => its.map((it, idx) => (idx === i ? value : it)));
    }
    this.cms.setCollection(def.collectionKey, this.items() as never);
    this.toast.success('Cambios guardados', `"${def.rowTitle(value)}" se actualizó en la web.`);
  }

  async deleteItem(): Promise<void> {
    const def = this.currentEntity();
    if (!def || def.fixed) return;
    const i = this.sel();
    const item = this.items()[i];
    if (!item) return;
    const name = def.rowTitle(item);
    const confirmed = await this.dialog.confirm({
      tone: 'danger',
      title: '¿Eliminar registro?',
      message: `Se eliminará "${name}" de la web. Esta acción no se puede deshacer.`,
      confirmLabel: 'Sí, eliminar',
      cancelLabel: 'Cancelar',
    });
    if (!confirmed) return;
    this.items.update((its) => its.filter((_, idx) => idx !== i));
    this.cms.setCollection(def.collectionKey, this.items() as never);
    this.sel.set(0);
    this.draft.set({ ...(this.items()[0] ?? def.blank) });
    this.toast.success('Registro eliminado', `"${name}" se quitó de la web.`);
  }

  setHeaderLink(i: number, key: keyof HeaderLink, value: string): void {
    this.headerLinks.update((links) => links.map((l, idx) => (idx === i ? { ...l, [key]: value } : l)));
  }

  removeHeaderLink(i: number): void {
    this.headerLinks.update((links) => links.filter((_, idx) => idx !== i));
  }

  addHeaderLink(): void {
    this.headerLinks.update((links) => [...links, { label: 'Nuevo', href: '#' }]);
  }

  saveHeader(): void {
    this.cms.setHeader({
      links: this.headerLinks().map((link) => ({ ...link })),
      cta: this.headerCta(),
    });
    this.toast.success('Cambios guardados', '"Header" se actualizó en la web.');
  }

  setFooterColumn(i: number, key: keyof FooterColumn, value: string): void {
    this.footerColumns.update((cols) => cols.map((c, idx) => (idx === i ? { ...c, [key]: value } : c)));
  }

  removeFooterColumn(i: number): void {
    this.footerColumns.update((cols) => cols.filter((_, idx) => idx !== i));
  }

  addFooterColumn(): void {
    this.footerColumns.update((cols) => [...cols, { title: 'Nueva columna', links: 'Enlace 1\nEnlace 2' }]);
  }

  saveFooter(): void {
    this.cms.setFooter({
      about: this.footerAbout(),
      email: this.footerEmail(),
      phone: this.footerPhone(),
      columns: this.footerColumns().map((column) => ({ ...column })),
    });
    this.toast.success('Cambios guardados', '"Footer" se actualizó en la web.');
  }

  goToPanel(): void {
    this.router.navigateByUrl('/admin');
  }

  goToSite(): void {
    this.router.navigateByUrl('/');
  }

  resetContent(): void {
    this.cms.reset();
    this.loadTab(this.tab());
    this.toast.info('Contenido restaurado', 'El CMS volvió a los datos base del sitio.');
  }

  private loadTab(tab: string): void {
    const def = ENTITIES[tab];
    if (def) {
      const collection = this.cms[def.collectionKey]().map((item) => ({ ...item })) as EntityItem[];
      this.items.set(collection);
      this.sel.set(collection.length ? 0 : -1);
      this.draft.set({ ...(collection[0] ?? def.blank) });
      return;
    }

    if (tab === 'header') {
      const header = this.cms.header();
      this.headerLinks.set(header.links.map((link) => ({ ...link })));
      this.headerCta.set(header.cta);
      return;
    }

    if (tab === 'footer') {
      const footer = this.cms.footer();
      this.footerAbout.set(footer.about);
      this.footerEmail.set(footer.email);
      this.footerPhone.set(footer.phone);
      this.footerColumns.set(footer.columns.map((column) => ({ ...column })));
    }
  }
}
