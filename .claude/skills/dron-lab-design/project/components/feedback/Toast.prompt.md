# Toast

HUD-glass notification. Dark translucent surface with a neon tone accent bar, a glowing icon chip, a mono eyebrow label, and an auto-countdown scanline at the bottom. Tones: `success`, `warning`, `error`, `info`.

```jsx
<ToastStack position="top-right">
  <Toast tone="success" title="Guardado" onClose={()=>{}}>Cambios aplicados.</Toast>
  <Toast tone="error" title="Falló el envío" duration={6000} onClose={()=>{}} />
</ToastStack>
```

Set `duration={0}` to keep it open (no auto-dismiss, no countdown bar). `ToastStack` fixes position and stacks multiple toasts.
