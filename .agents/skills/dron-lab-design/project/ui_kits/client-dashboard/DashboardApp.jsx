const { Card, Badge, Button, Tag, IconButton, Wordmark } = window.ElDronEnLaSopaDesignSystem_5a2264;
const { useState } = React;

const NAV = [
  { id: 'resumen', label: 'Resumen', icon: '◧' },
  { id: 'proyectos', label: 'Proyectos', icon: '▤' },
  { id: 'tickets', label: 'Tickets', icon: '◇' },
  { id: 'facturas', label: 'Facturas', icon: '▦' },
  { id: 'archivos', label: 'Archivos', icon: '▥' },
];

const PROJECTS = [
  { name: 'App de inventario', progress: 72, status: ['En desarrollo', 'warning'], stack: ['React', 'Node.js', 'PostgreSQL'] },
  { name: 'Landing campaña Q3', progress: 100, status: ['Entregado', 'success'], stack: ['Astro', 'Tailwind'] },
  { name: 'Automatización de reportes', progress: 34, status: ['En desarrollo', 'warning'], stack: ['Python', 'n8n'] },
];

const TICKETS = [
  { id: 'DR-241', title: 'Error al exportar reporte PDF', prio: ['Alta', 'danger'], estado: 'Abierto', fecha: 'Hoy' },
  { id: 'DR-238', title: 'Agregar filtro por fecha', prio: ['Media', 'warning'], estado: 'En revisión', fecha: 'Ayer' },
  { id: 'DR-235', title: 'Cambiar logo del footer', prio: ['Baja', 'neutral'], estado: 'Cerrado', fecha: '12 jul' },
];

function Sidebar({ active, onSelect }) {
  return (
    <aside style={{ width: 250, background: 'var(--gradient-ink)', color: 'var(--text-on-inverse)', display: 'flex', flexDirection: 'column', padding: '24px 16px', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'var(--texture-grid)', backgroundSize: 'var(--texture-grid-size)', opacity: 0.4, maskImage: 'radial-gradient(circle at 50% 0%, #000, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at 50% 0%, #000, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -80, left: -40, width: 240, height: 240, background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 68%)', pointerEvents: 'none' }} />
      <div style={{ padding: '4px 8px 28px', position: 'relative' }}><Wordmark tone="light" size="sm" /></div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, position: 'relative' }}>
        {NAV.map((n) => {
          const on = n.id === active;
          return (
            <button key={n.id} onClick={() => onSelect(n.id)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 14px',
              border: on ? '1px solid transparent' : '1px solid transparent', borderRadius: 'var(--radius-md)', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
              background: on ? 'var(--gradient-hud)' : 'transparent',
              color: on ? 'var(--ink-950)' : 'var(--text-inverse-muted)',
              boxShadow: on ? 'var(--glow-soft-cyan)' : 'none',
              textAlign: 'left', transition: 'background var(--dur-base) var(--ease-out)',
            }}>
              <span style={{ fontSize: 16 }}>{n.icon}</span>{n.label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', padding: 14, background: 'var(--glass-dark)', backdropFilter: 'blur(var(--blur-glass))', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', position: 'relative' }}>
        <div style={{ fontSize: 13, color: 'var(--text-inverse-muted)', marginBottom: 8 }}>¿Necesitas ayuda?</div>
        <Button variant="secondary" size="sm" fullWidth>Abrir ticket</Button>
      </div>
    </aside>
  );
}

function StatCard({ label, value, delta, tone }) {
  return (
    <Card elevation="sm" padding="var(--space-5)">
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)', letterSpacing: 'var(--ls-tight)' }}>{value}</span>
        {delta && <Badge tone={tone}>{delta}</Badge>}
      </div>
    </Card>
  );
}

function DashboardApp() {
  const [active, setActive] = useState('resumen');
  const activeLabel = NAV.find((n) => n.id === active).label;
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--surface-page)', backgroundImage: 'radial-gradient(rgba(11,15,26,0.05) 1.2px, transparent 1.2px)', backgroundSize: '22px 22px', fontFamily: 'var(--font-body)' }}>
      <Sidebar active={active} onSelect={setActive} />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Topbar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-faint)' }}>Panel de cliente</div>
            <h1 style={{ margin: '2px 0 0', fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 'var(--fw-bold)', color: 'var(--text-strong)' }}>{activeLabel}</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconButton label="Notificaciones" variant="outline">◔</IconButton>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 6px 6px 14px', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-pill)' }}>
              <span style={{ fontSize: 14, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>Comercial Andina</span>
              <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--brand-orange)', color: 'var(--text-on-brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'var(--fw-bold)', fontSize: 13 }}>CA</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24, overflow: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            <StatCard label="Proyectos activos" value="2" delta="+1" tone="success" />
            <StatCard label="Tickets abiertos" value="3" delta="2 nuevos" tone="brand" />
            <StatCard label="Horas este mes" value="86" delta="+12%" tone="success" />
            <StatCard label="Próxima entrega" value="18 jul" delta="En plazo" tone="info" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24, alignItems: 'start' }}>
            {/* Projects */}
            <Card elevation="sm">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>Proyectos</h2>
                <Button variant="ghost" size="sm">Ver todos</Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {PROJECTS.map((p) => (
                  <div key={p.name} style={{ paddingBottom: 18, borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                      <span style={{ fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)', fontSize: 15.5 }}>{p.name}</span>
                      <Badge tone={p.status[1]} dot>{p.status[0]}</Badge>
                    </div>
                    <div style={{ height: 8, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-pill)', overflow: 'hidden', marginBottom: 10 }}>
                      <div style={{ width: p.progress + '%', height: '100%', background: p.progress === 100 ? 'var(--success)' : 'var(--brand-orange)', borderRadius: 'var(--radius-pill)' }} />
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {p.stack.map((t) => <Tag key={t} style={{ fontSize: 12, padding: '4px 9px' }}>{t}</Tag>)}
                      <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{p.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Activity */}
            <Card elevation="sm">
              <h2 style={{ margin: '0 0 18px', fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>Actividad reciente</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  ['Se desplegó', 'Landing campaña Q3', 'hace 2 h'],
                  ['Nuevo comentario en', 'DR-238', 'hace 5 h'],
                  ['Factura emitida', 'F-2026-041', 'ayer'],
                  ['Se completó el hito', 'Diseño de UI', 'hace 3 días'],
                ].map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12 }}>
                    <span style={{ width: 8, height: 8, marginTop: 6, borderRadius: '50%', background: 'var(--brand-orange)', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 14.5, color: 'var(--text-body)' }}>{a[0]} <strong style={{ color: 'var(--text-strong)' }}>{a[1]}</strong></div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)', marginTop: 2 }}>{a[2]}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Tickets table */}
          <Card elevation="sm" padding="0">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', borderBottom: '1px solid var(--border-subtle)' }}>
              <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 'var(--fw-semibold)', color: 'var(--text-strong)' }}>Tickets de soporte</h2>
              <Button variant="primary" size="sm" iconLeft={<span>+</span>}>Nuevo ticket</Button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14.5 }}>
              <thead>
                <tr style={{ textAlign: 'left', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase' }}>
                  <th style={{ padding: '12px 24px', fontWeight: 'var(--fw-medium)' }}>ID</th>
                  <th style={{ padding: '12px 24px', fontWeight: 'var(--fw-medium)' }}>Asunto</th>
                  <th style={{ padding: '12px 24px', fontWeight: 'var(--fw-medium)' }}>Prioridad</th>
                  <th style={{ padding: '12px 24px', fontWeight: 'var(--fw-medium)' }}>Estado</th>
                  <th style={{ padding: '12px 24px', fontWeight: 'var(--fw-medium)' }}>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {TICKETS.map((t) => (
                  <tr key={t.id} style={{ borderTop: '1px solid var(--border-subtle)', color: 'var(--text-body)' }}>
                    <td style={{ padding: '14px 24px', fontFamily: 'var(--font-mono)', color: 'var(--brand-orange-600)', fontWeight: 'var(--fw-medium)' }}>{t.id}</td>
                    <td style={{ padding: '14px 24px', color: 'var(--text-strong)' }}>{t.title}</td>
                    <td style={{ padding: '14px 24px' }}><Badge tone={t.prio[1]}>{t.prio[0]}</Badge></td>
                    <td style={{ padding: '14px 24px' }}>{t.estado}</td>
                    <td style={{ padding: '14px 24px', color: 'var(--text-muted)' }}>{t.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </main>
    </div>
  );
}

window.DashboardApp = DashboardApp;
