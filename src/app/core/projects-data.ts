export interface Project {
  slug: string;
  title: string;
  client: string;
  cat: string;
  year: string;
  color: string;
  tags: string[];
  metric: string;
  glyph: string;
  duration: string;
  desc: string;
  summary: string;
  challenge: string;
  solution: string;
  results: [string, string][];
}

/** Shared project data for the viewer, detail and client/admin dashboards. */
export const PROJECTS: Project[] = [
  {
    slug: 'panel-inventario', title: 'Panel de inventario', client: 'Comercial Andina', cat: 'Web', year: '2026', color: '#FF6B35',
    tags: ['React', 'Node.js', 'PostgreSQL'], metric: '-40% tiempo de conteo', glyph: '◧', duration: '10 semanas',
    desc: 'Control de stock en tiempo real con alertas y reportes automáticos.',
    summary: 'Reemplazamos las hojas de cálculo por una plataforma de inventario centralizada, con lectura de código de barras, alertas de reposición y reportes que antes tomaban un día en armarse.',
    challenge: 'El conteo mensual tomaba 3 días de trabajo manual y los quiebres de stock se detectaban tarde.',
    solution: 'Un panel en tiempo real con roles, movimientos auditables e integración con el punto de venta.',
    results: [['-40%', 'tiempo de conteo'], ['0', 'quiebres no detectados'], ['3', 'sucursales conectadas']],
  },
  {
    slug: 'automatizacion-facturas', title: 'Automatización de facturas', client: 'Estudio Vega', cat: 'Automatización', year: '2026', color: '#22D3EE',
    tags: ['Python', 'n8n'], metric: '8 h/semana ahorradas', glyph: '⬡', duration: '5 semanas',
    desc: 'Emisión y envío de comprobantes conectando ventas con la SUNAT.',
    summary: 'Conectamos el flujo de ventas con la facturación electrónica y el envío automático al cliente, eliminando la carga manual y los errores de digitación.',
    challenge: 'Cada factura se emitía a mano, con reprocesos frecuentes y horas perdidas.',
    solution: 'Un flujo n8n que valida datos, emite ante la SUNAT y envía el comprobante por correo.',
    results: [['8 h', 'ahorradas/semana'], ['-95%', 'errores de emisión'], ['24/7', 'operación automática']],
  },
  {
    slug: 'landing-campana-q3', title: 'Landing campaña Q3', client: 'Nova Fitness', cat: 'Landing', year: '2025', color: '#F7C948',
    tags: ['Astro', 'Tailwind'], metric: '+3.2× conversión', glyph: '▲', duration: '3 semanas',
    desc: 'Página de captación optimizada para pauta con seguimiento de leads.',
    summary: 'Diseñamos y lanzamos una landing de alta conversión para la campaña de temporada, con seguimiento de leads y pruebas A/B.',
    challenge: 'La campaña anterior enviaba tráfico a una home genérica que convertía muy poco.',
    solution: 'Landing enfocada, carga instantánea y formulario conectado al CRM con eventos de conversión.',
    results: [['+3.2×', 'conversión'], ['1.4 s', 'tiempo de carga'], ['+58%', 'leads calificados']],
  },
  {
    slug: 'integracion-pagos', title: 'Integración de pagos', client: 'MercadoSur', cat: 'Integración', year: '2025', color: '#22D3EE',
    tags: ['Stripe', 'API REST'], metric: '99.9% uptime', glyph: '⬢', duration: '7 semanas',
    desc: 'Checkout unificado con múltiples pasarelas y conciliación diaria.',
    summary: 'Unificamos varias pasarelas en un solo checkout estable, con reintentos, conciliación diaria y alertas ante fallos.',
    challenge: 'Cada pasarela tenía su propio flujo y las caídas en campaña generaban ventas perdidas.',
    solution: 'Una capa de pagos única con failover automático y panel de conciliación.',
    results: [['99.9%', 'uptime'], ['3', 'pasarelas unificadas'], ['0', 'caídas en campaña']],
  },
  {
    slug: 'portal-clientes', title: 'Portal de clientes', client: 'Grupo Delta', cat: 'Web', year: '2025', color: '#FF6B35',
    tags: ['React', 'Firebase'], metric: '1.2k usuarios activos', glyph: '◨', duration: '12 semanas',
    desc: 'Autoservicio con tickets, facturas y estado de proyectos en vivo.',
    summary: 'Un portal de autoservicio donde los clientes ven sus proyectos, facturas y tickets sin depender del correo.',
    challenge: 'El soporte se saturaba con consultas repetitivas sobre estados y documentos.',
    solution: 'Portal con autenticación, tickets y estado de proyectos en vivo.',
    results: [['1.2k', 'usuarios activos'], ['-35%', 'tickets de soporte'], ['4.8/5', 'satisfacción']],
  },
  {
    slug: 'bot-reservas', title: 'Bot de reservas', client: 'Clínica Sur', cat: 'Automatización', year: '2024', color: '#22D3EE',
    tags: ['n8n', 'WhatsApp API'], metric: '+65% citas confirmadas', glyph: '◇', duration: '4 semanas',
    desc: 'Agenda y recordatorios automáticos por WhatsApp integrados al calendario.',
    summary: 'Un bot que agenda citas y envía recordatorios por WhatsApp, sincronizado con el calendario del equipo médico.',
    challenge: 'El ausentismo a citas era alto y la agenda se llevaba por teléfono.',
    solution: 'Bot conversacional con recordatorios automáticos y confirmación en un toque.',
    results: [['+65%', 'citas confirmadas'], ['-50%', 'ausentismo'], ['24/7', 'agenda disponible']],
  },
  {
    slug: 'ecommerce-textil', title: 'E-commerce textil', client: 'Telares Norte', cat: 'Web', year: '2024', color: '#FF6B35',
    tags: ['Next.js', 'Stripe'], metric: '+120% ventas online', glyph: '◧', duration: '9 semanas',
    desc: 'Tienda online con catálogo por variantes, pagos y despacho.',
    summary: 'Lanzamos la tienda online completa con catálogo por tallas y colores, pagos y cálculo de envío por zona.',
    challenge: 'Vendían solo por redes y perdían pedidos por falta de checkout.',
    solution: 'E-commerce con inventario por variante, pagos y seguimiento de despacho.',
    results: [['+120%', 'ventas online'], ['2.1%', 'tasa de conversión'], ['48 h', 'despacho promedio']],
  },
  {
    slug: 'dashboard-logistica', title: 'Dashboard de logística', client: 'TransAndes', cat: 'Web', year: '2024', color: '#F7C948',
    tags: ['React', 'MapBox'], metric: '-22% costo por ruta', glyph: '◨', duration: '11 semanas',
    desc: 'Seguimiento de flota en mapa con rutas optimizadas y KPIs.',
    summary: 'Un tablero de control de flota con ubicación en vivo, optimización de rutas e indicadores de eficiencia.',
    challenge: 'Las rutas se planificaban a mano y no había visibilidad de la flota.',
    solution: 'Dashboard con mapa en vivo, rutas sugeridas y KPIs por conductor.',
    results: [['-22%', 'costo por ruta'], ['+18%', 'entregas a tiempo'], ['live', 'ubicación de flota']],
  },
  {
    slug: 'sync-crm-erp', title: 'Sincronización CRM–ERP', client: 'Industrias Rímac', cat: 'Integración', year: '2023', color: '#22D3EE',
    tags: ['API REST', 'Node.js'], metric: '0 datos duplicados', glyph: '⬢', duration: '6 semanas',
    desc: 'Puente bidireccional entre el CRM comercial y el ERP contable.',
    summary: 'Construimos un puente que mantiene clientes, pedidos y facturas sincronizados entre el CRM y el ERP.',
    challenge: 'Los equipos comercial y contable trabajaban con datos desalineados.',
    solution: 'Sincronización bidireccional con resolución de conflictos y logs.',
    results: [['0', 'datos duplicados'], ['tiempo real', 'sincronización'], ['-30%', 'tiempo de cierre']],
  },
  {
    slug: 'landing-saas', title: 'Landing de producto SaaS', client: 'Flux App', cat: 'Landing', year: '2023', color: '#F7C948',
    tags: ['Astro', 'Motion'], metric: '+2.6× registros', glyph: '▲', duration: '3 semanas',
    desc: 'Sitio de producto con demo interactiva y planes.',
    summary: 'Página de producto con demo interactiva, comparativa de planes y registro sin fricción.',
    challenge: 'El producto era potente pero la web no comunicaba su valor.',
    solution: 'Narrativa clara, demo embebida y CTA de registro optimizado.',
    results: [['+2.6×', 'registros'], ['-40%', 'rebote'], ['A/B', 'probado por sección']],
  },
];
