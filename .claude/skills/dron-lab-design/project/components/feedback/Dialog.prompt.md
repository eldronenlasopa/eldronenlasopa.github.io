# Dialog

HUD confirmation modal. Grid-textured, blurred overlay over a dark glass panel with a neon tone bar, corner glow and an icon chip. Use for confirmations and destructive actions. Controlled via `open`; `Escape` or overlay click calls `onCancel`.

```jsx
<Dialog open={show} tone="danger" title="¿Eliminar proyecto?"
  confirmLabel="Sí, eliminar" onConfirm={remove} onCancel={()=>setShow(false)}>
  Esta acción no se puede deshacer.
</Dialog>
```

`tone` (`brand` default, `success`, `warning`, `danger`, `info`) sets the accent; `danger` also reddens the confirm button. Pass `cancelLabel=""` to hide cancel.
