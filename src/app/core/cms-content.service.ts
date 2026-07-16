import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';

export interface CmsCompany {
  name: string;
  sector: string;
  result: string;
  logo: string;
  glyph: string;
  color: string;
}

export interface CmsReview {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: string;
  photo: string;
  color: string;
}

export interface CmsServiceItem {
  title: string;
  body: string;
  image: string;
  glyph: string;
  color: string;
}

export interface CmsProjectItem {
  title: string;
  client: string;
  cat: string;
  year: string;
  metric: string;
  logo: string;
  summary: string;
  challenge: string;
  solution: string;
  color: string;
}

export interface CmsPlan {
  name: string;
  price: string;
  description: string;
  features: string;
  featured: string;
  cta: string;
  image: string;
}

export type CmsSectionId = 'hero' | 'clients' | 'services' | 'pricing' | 'reviews' | 'contact';

export interface CmsPageSection {
  id: CmsSectionId;
  name: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  items: string;
  image: string;
}

export interface CmsHeaderLink {
  label: string;
  href: string;
}

export interface CmsFooterColumn {
  title: string;
  links: string;
}

export interface CmsContentState {
  companies: CmsCompany[];
  reviews: CmsReview[];
  services: CmsServiceItem[];
  projects: CmsProjectItem[];
  plans: CmsPlan[];
  sections: CmsPageSection[];
  header: {
    links: CmsHeaderLink[];
    cta: string;
  };
  footer: {
    about: string;
    email: string;
    phone: string;
    columns: CmsFooterColumn[];
  };
}

const STORAGE_KEY = 'dronlab.cmsContent.v1';

const DEFAULT_STATE: CmsContentState = {
  companies: [
    { name: 'Comercial Andina', sector: 'Retail', result: '−40% tiempo de conteo', logo: '', glyph: '◧', color: '#FF6B35' },
    { name: 'Estudio Vega', sector: 'Legal', result: '8 h/sem ahorradas', logo: '', glyph: '⬡', color: '#22D3EE' },
    { name: 'Nova Fitness', sector: 'Fitness', result: '+3.2× conversión', logo: '', glyph: '▲', color: '#F7C948' },
    { name: 'MercadoSur', sector: 'E-commerce', result: '99.9% uptime', logo: '', glyph: '⬢', color: '#22D3EE' },
    { name: 'Grupo Delta', sector: 'Servicios', result: '1.2k usuarios activos', logo: '', glyph: '◨', color: '#FF6B35' },
    { name: 'Clínica Sur', sector: 'Salud', result: '+65% citas confirmadas', logo: '', glyph: '◇', color: '#7DE8F7' },
  ],
  reviews: [
    {
      name: 'María Fernández',
      role: 'Gerente de operaciones',
      company: 'Comercial Andina',
      quote:
        'El panel de inventario nos cambió la operación por completo. Redujimos el tiempo de conteo casi a la mitad y ahora tomamos decisiones con datos en tiempo real, no con corazonadas.',
      rating: '5',
      photo: '',
      color: '#FF6B35',
    },
    {
      name: 'Diego Vega',
      role: 'Fundador',
      company: 'Estudio Vega',
      quote: 'Automatizaron toda nuestra facturación conectándola con la SUNAT. Recuperamos 8 horas a la semana que antes eran puro trabajo manual y errores.',
      rating: '5',
      photo: '',
      color: '#22D3EE',
    },
    {
      name: 'Ana Rojas',
      role: 'Marketing lead',
      company: 'Nova Fitness',
      quote: 'La landing de campaña triplicó nuestras conversiones. Comunicación clara, entregas a tiempo y un equipo que de verdad entiende de negocio.',
      rating: '5',
      photo: '',
      color: '#F7C948',
    },
    {
      name: 'Luis Paredes',
      role: 'CTO',
      company: 'MercadoSur',
      quote: 'Integraron tres pasarelas de pago en un checkout único y estable. Cero caídas en campaña alta.',
      rating: '5',
      photo: '',
      color: '#7DE8F7',
    },
  ],
  services: [
    { title: 'Aplicaciones web', body: 'Plataformas y paneles a medida, del MVP a producción, con la escala que tu operación necesita.', image: '', glyph: '◆', color: '#FF6B35' },
    { title: 'Páginas & landings', body: 'Sitios rápidos y bien posicionados que convierten visitas en clientes.', image: '', glyph: '▲', color: '#22D3EE' },
    { title: 'Automatizaciones', body: 'Conectamos tus herramientas y eliminamos el trabajo manual repetitivo.', image: '', glyph: '⬡', color: '#F7C948' },
    { title: 'Integraciones / API', body: 'Unimos tus sistemas: pagos, CRMs, ERPs y servicios de terceros.', image: '', glyph: '⬢', color: '#7C6FF0' },
  ],
  projects: [
    {
      title: 'Panel de inventario',
      client: 'Comercial Andina',
      cat: 'Web',
      year: '2026',
      metric: '−40% tiempo de conteo',
      logo: '',
      summary: 'Control de stock en tiempo real con alertas y reportes.',
      challenge: 'El conteo mensual tomaba 3 días de trabajo manual.',
      solution: 'Panel en tiempo real con roles e integración con POS.',
      color: '#FF6B35',
    },
    {
      title: 'Automatización de facturas',
      client: 'Estudio Vega',
      cat: 'Automatización',
      year: '2026',
      metric: '8 h/sem ahorradas',
      logo: '',
      summary: 'Emisión y envío de comprobantes conectando ventas con la SUNAT.',
      challenge: 'Cada factura se emitía a mano.',
      solution: 'Un flujo n8n que valida, emite y envía.',
      color: '#22D3EE',
    },
  ],
  plans: [
    {
      name: 'Emprende',
      price: 'S/ 1,200',
      description: 'Para lanzar tu presencia digital.',
      features: 'Landing page a medida\nFormulario de contacto\nHosting 1 año incluido\n2 rondas de ajustes',
      featured: 'No',
      cta: 'Empezar',
      image: '',
    },
    {
      name: 'Crece',
      price: 'S/ 3,500',
      description: 'Aplicación web completa a medida.',
      features: 'App web a medida\nPanel de administración\nIntegraciones / API\nSoporte prioritario 6 meses',
      featured: 'Sí',
      cta: 'Agendar llamada',
      image: '',
    },
    {
      name: 'A medida',
      price: 'Custom',
      description: 'Proyectos complejos y automatización.',
      features: 'Alcance definido contigo\nAutomatizaciones de procesos\nEquipo dedicado\nSLA garantizado',
      featured: 'No',
      cta: 'Contáctanos',
      image: '',
    },
  ],
  sections: [
    {
      id: 'hero',
      name: 'Portada',
      eyebrow: 'Soluciones informáticas a medida',
      title: 'Software que hace',
      highlight: 'crecer tu empresa',
      description: 'Diseñamos y construimos aplicaciones web, páginas y automatizaciones. Del prototipo a producción, con comunicación cercana en cada paso.',
      items: 'React\nNode.js\nPython\nPostgreSQL\nn8n\nAWS',
      image: '',
    },
    {
      id: 'clients',
      name: 'Clientes',
      eyebrow: 'Confían en nosotros',
      title: 'Empresas que crecieron con nosotros',
      highlight: '',
      description: '',
      items: '+40 | proyectos\n12 | sectores\n98% | repiten',
      image: '',
    },
    {
      id: 'services',
      name: 'Qué hacemos',
      eyebrow: 'Qué hacemos',
      title: 'Un socio tecnológico, no solo un proveedor',
      highlight: '',
      description: '',
      items: '',
      image: '',
    },
    {
      id: 'pricing',
      name: 'Planes',
      eyebrow: 'Planes',
      title: 'Precios claros, sin sorpresas',
      highlight: '',
      description: 'Empieza con lo justo y crece a tu ritmo. Cada plan incluye acompañamiento cercano.',
      items: '',
      image: '',
    },
    {
      id: 'reviews',
      name: 'Reseñas',
      eyebrow: 'Reseñas',
      title: 'Clientes que recomiendan nuestro trabajo',
      highlight: '',
      description: '',
      items: '4.9 | basado en 40+ proyectos',
      image: '',
    },
    {
      id: 'contact',
      name: 'Contacto',
      eyebrow: 'Contacto',
      title: 'Cuéntanos tu idea. La convertimos en producto.',
      highlight: '',
      description: 'Respondemos en menos de 24 horas con una primera propuesta de alcance y presupuesto.',
      items: 'Diagnóstico gratuito\nPresupuesto sin compromiso\nEquipo local, comunicación en español',
      image: '',
    },
  ],
  header: {
    links: [
      { label: 'Servicios', href: '#servicios' },
      { label: 'Clientes', href: '#clientes' },
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Planes', href: '#planes' },
    ],
    cta: 'Solicitar propuesta',
  },
  footer: {
    about: 'El Dron en la Sopa — la tecnología está en todo, hasta en la sopa. Aplicaciones, páginas y automatizaciones a medida.',
    email: 'hola@dronlab.pe',
    phone: '+51 993 908 435',
    columns: [
      { title: 'Servicios', links: 'Aplicaciones web\nPáginas & landings\nAutomatizaciones\nIntegraciones / API' },
      { title: 'Empresa', links: 'Nosotros\nProyectos\nBlog\nContacto' },
      { title: 'Recursos', links: 'Soporte\nEstado\nTérminos\nPrivacidad' },
    ],
  },
};

function cloneState(): CmsContentState {
  return structuredClone(DEFAULT_STATE);
}

@Injectable({ providedIn: 'root' })
export class CmsContentService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly state = signal<CmsContentState>(this.loadInitialState());

  readonly companies = computed(() => this.state().companies);
  readonly reviews = computed(() => this.state().reviews);
  readonly services = computed(() => this.state().services);
  readonly projects = computed(() => this.state().projects);
  readonly plans = computed(() => this.state().plans);
  readonly sections = computed(() => this.state().sections);
  readonly header = computed(() => this.state().header);
  readonly footer = computed(() => this.state().footer);

  constructor() {
    effect(() => {
      if (!this.isBrowser) return;
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state()));
      } catch {
        // The temporary browser store can fill up when several large images are used.
      }
    });
  }

  setCollection<K extends 'companies' | 'reviews' | 'services' | 'projects' | 'plans' | 'sections'>(key: K, value: CmsContentState[K]): void {
    this.state.update((current) => ({ ...current, [key]: [...value] }));
  }

  section(id: CmsSectionId) {
    return computed(() => this.state().sections.find((section) => section.id === id) ?? DEFAULT_STATE.sections.find((section) => section.id === id)!);
  }

  setHeader(value: CmsContentState['header']): void {
    this.state.update((current) => ({
      ...current,
      header: {
        cta: value.cta,
        links: value.links.map((link) => ({ ...link })),
      },
    }));
  }

  setFooter(value: CmsContentState['footer']): void {
    this.state.update((current) => ({
      ...current,
      footer: {
        about: value.about,
        email: value.email,
        phone: value.phone,
        columns: value.columns.map((column) => ({ ...column })),
      },
    }));
  }

  reset(): void {
    this.state.set(cloneState());
  }

  private loadInitialState(): CmsContentState {
    if (!this.isBrowser) return cloneState();

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return cloneState();

    try {
      return { ...cloneState(), ...JSON.parse(stored) };
    } catch {
      return cloneState();
    }
  }
}
