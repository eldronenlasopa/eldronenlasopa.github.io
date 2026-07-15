# Input

Labeled single-line text field with hint, error state, and optional left icon. Focus shows an orange ring.

```jsx
<Input label="Correo" type="email" placeholder="tucorreo@empresa.com" required />
<Input label="Buscar" iconLeft={<span>⚲</span>} />
<Input label="Teléfono" error="Número inválido" />
```

Props: `label`, `hint`, `error`, `type`, `value`, `placeholder`, `disabled`, `required`, `iconLeft`, `onChange`.
