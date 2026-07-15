/* @ds-bundle: {"format":4,"namespace":"ElDronEnLaSopaDesignSystem_5a2264","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"ContactForm","sourcePath":"components/forms/ContactForm.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"2ae133acb286","components/actions/IconButton.jsx":"0ca0cdc0e7c0","components/brand/Wordmark.jsx":"dde6ce557139","components/data-display/Badge.jsx":"6297efb2f2c4","components/data-display/Card.jsx":"b1dac64100e9","components/data-display/Tag.jsx":"78841d795e76","components/forms/ContactForm.jsx":"db8a1a001b6b","components/forms/Input.jsx":"3c9aa1ccdf25","components/forms/Select.jsx":"05165d7471bf","components/forms/Textarea.jsx":"025c59145dec","components/marketing/PricingCard.jsx":"89c7d299345c","components/navigation/Footer.jsx":"4df1d15ddac7","components/navigation/Header.jsx":"650e7c0062d6","ui_kits/client-dashboard/DashboardApp.jsx":"a00fc5781030","ui_kits/marketing-site/ContactSection.jsx":"7d42b143816c","ui_kits/marketing-site/HeroSection.jsx":"1cf58efd4d5e","ui_kits/marketing-site/PricingSection.jsx":"6ff9e622b9cd","ui_kits/marketing-site/ServicesSection.jsx":"e971bf9e1d9d","ui_kits/services-landing/ServicesLandingApp.jsx":"8ebca76f4775"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElDronEnLaSopaDesignSystem_5a2264 = window.ElDronEnLaSopaDesignSystem_5a2264 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control for El Dron en la Sopa.
 * Variants: primary (orange), secondary (yellow), outline, ghost, inverse.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14,
      gap: 6
    },
    md: {
      padding: '12px 22px',
      fontSize: 15,
      gap: 8
    },
    lg: {
      padding: '16px 30px',
      fontSize: 17,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-brand)',
      border: '2px solid transparent',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--accent-secondary)',
      color: 'var(--text-on-brand)',
      border: '2px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '2px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '2px solid transparent'
    },
    inverse: {
      background: 'var(--white)',
      color: 'var(--ink-950)',
      border: '2px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: fullWidth ? '100%' : 'auto',
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.fontSize,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), filter var(--dur-base) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.94)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square/circular button for a single icon glyph.
 */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 34,
    md: 42,
    lg: 50
  }[size] || 42;
  const variants = {
    solid: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-brand)',
      border: '1px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-default)'
    }
  };
  const v = variants[variant] || variants.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    style: {
      width: dims,
      height: dims,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
/**
 * Wordmark — typographic brand lockup for El Dron en la Sopa.
 * NOTE: no official logo file was provided, so the brand is rendered in type.
 * Three variants are offered as logo alternatives — pick one as the brand mark:
 *   - "brackets"  : { el dron en la sopa }  — code brackets, drone hovering (original)
 *   - "monogram"  : ⊹ DRON  — a HUD/scope glyph + condensed uppercase (most futuristic)
 *   - "terminal"  : ~/dron ▮  — command-line prompt with blinking cursor
 */
function Wordmark({
  size = 'md',
  tone = 'dark',
  variant = 'terminal',
  style = {}
}) {
  const scale = {
    sm: 16,
    md: 22,
    lg: 34
  }[size] || 22;
  const color = tone === 'light' ? 'var(--text-on-inverse)' : 'var(--text-strong)';
  const accent = 'var(--brand-orange)';
  const cyan = 'var(--brand-cyan)';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.34em',
    fontFamily: 'var(--font-display)',
    fontWeight: 'var(--fw-bold)',
    fontSize: scale,
    letterSpacing: 'var(--ls-heading)',
    color,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    ...style
  };
  const mono = {
    fontFamily: 'var(--font-mono)',
    color: accent,
    fontSize: '0.9em',
    fontWeight: 'var(--fw-semibold)'
  };
  if (variant === 'monogram') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...base,
        gap: '0.5em',
        letterSpacing: '0.02em'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1.5em',
        height: '1.5em',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--gradient-hud)',
        color: 'var(--ink-950)',
        fontSize: '0.82em',
        boxShadow: 'var(--glow-soft-cyan)'
      }
    }, "\u22B9"), /*#__PURE__*/React.createElement("span", null, "DRON", /*#__PURE__*/React.createElement("span", {
      style: {
        color: cyan
      }
    }, "\xB7"), "SOPA"));
  }
  if (variant === 'terminal') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        ...base,
        fontFamily: 'var(--font-mono)',
        gap: '0.15em',
        letterSpacing: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: cyan
      }
    }, "~/"), /*#__PURE__*/React.createElement("span", null, "dronlab"), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: '0.55em',
        height: '1.05em',
        background: accent,
        marginLeft: '0.15em',
        display: 'inline-block',
        borderRadius: 1,
        animation: 'dron-cursor 1s steps(2, start) infinite'
      }
    }), /*#__PURE__*/React.createElement("style", null, `@keyframes dron-cursor{0%,100%{opacity:1}50%{opacity:0}}`));
  }

  // default: brackets
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: mono
  }, '{'), "el dron en la", /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent
    }
  }, "sopa"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: mono
  }, '}'));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/**
 * Badge — small status pill. Tones map to semantic colors.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {}
}) {
  const tones = {
    neutral: {
      bg: 'var(--ink-100)',
      fg: 'var(--text-body)'
    },
    brand: {
      bg: 'rgba(255,107,53,0.14)',
      fg: 'var(--brand-orange-600)'
    },
    success: {
      bg: 'var(--success-tint)',
      fg: 'var(--success)'
    },
    warning: {
      bg: 'var(--warning-tint)',
      fg: 'var(--brand-yellow-600)'
    },
    danger: {
      bg: 'var(--danger-tint)',
      fg: 'var(--danger)'
    },
    info: {
      bg: 'var(--info-tint)',
      fg: 'var(--info)'
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.02em',
      background: t.bg,
      color: t.fg,
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container. `elevation` controls shadow; `interactive` adds hover lift.
 * `accent` shows a top orange bar (feature cards). `glass` = frosted panel for dark surfaces.
 */
function Card({
  children,
  elevation = 'sm',
  interactive = false,
  accent = false,
  glass = false,
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation] || 'var(--shadow-sm)';
  const surface = glass ? {
    background: 'var(--glass-dark)',
    border: '1px solid var(--glass-border)',
    backdropFilter: 'blur(var(--blur-glass))',
    WebkitBackdropFilter: 'blur(var(--blur-glass))',
    boxShadow: 'var(--glow-soft-cyan)',
    color: 'var(--text-on-inverse)'
  } : {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    boxShadow: shadow
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding,
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...surface,
      ...style
    },
    onMouseEnter: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = glass ? 'var(--glow-cyan)' : 'var(--shadow-lg)';
    },
    onMouseLeave: e => {
      if (!interactive) return;
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = glass ? 'var(--glow-soft-cyan)' : shadow;
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 4,
      background: 'var(--accent-primary)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
/**
 * Tag — removable/selectable label chip (tech stack, filters, categories).
 */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 'var(--fw-medium)',
      color: selected ? 'var(--text-on-brand)' : 'var(--text-body)',
      background: selected ? 'var(--accent-primary)' : 'var(--surface-card)',
      border: `1px solid ${selected ? 'transparent' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-sm)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      color: 'inherit',
      opacity: 0.6,
      fontSize: 14,
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labeled text field. Supports label, hint, error, and left/right adornments.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  value,
  placeholder,
  disabled = false,
  required = false,
  iconLeft = null,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      color: 'var(--text-faint)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    value: value,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onChange: onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: iconLeft ? '12px 14px 12px 40px' : '12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--border-focus)';
      e.currentTarget.style.boxShadow = `0 0 0 4px ${error ? 'var(--danger-tint)' : 'var(--focus-ring)'}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — labeled dropdown. Pass `options` as [{value,label}] or string[]. */
function Select({
  label,
  hint,
  error,
  id,
  value,
  options = [],
  placeholder = 'Selecciona…',
  disabled = false,
  required = false,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    disabled: disabled,
    required: required,
    onChange: onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px 40px 12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: value ? 'var(--text-body)' : 'var(--text-faint)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--border-focus)';
      e.currentTarget.style.boxShadow = `0 0 0 4px ${error ? 'var(--danger-tint)' : 'var(--focus-ring)'}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line text field with the same label/hint/error contract as Input. */
function Textarea({
  label,
  hint,
  error,
  id,
  value,
  placeholder,
  rows = 4,
  disabled = false,
  required = false,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--danger)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    value: value,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    required: required,
    onChange: onChange,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-body)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      resize: 'vertical',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--danger)' : 'var(--border-focus)';
      e.currentTarget.style.boxShadow = `0 0 0 4px ${error ? 'var(--danger-tint)' : 'var(--focus-ring)'}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = borderColor;
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/ContactForm.jsx
try { (() => {
/**
 * ContactForm — composed lead-capture form used across marketing surfaces.
 * Purely cosmetic here; wire `onSubmit` to your backend.
 */
function ContactForm({
  title = '¿Hablamos de tu proyecto?',
  subtitle = 'Cuéntanos qué necesitas y te respondemos en menos de 24 horas.',
  onSubmit,
  style = {}
}) {
  const services = ['Aplicación web', 'Página / landing', 'Automatización', 'Integración / API', 'No estoy seguro'];
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit();
    },
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: 480,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-heading)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-muted)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Nombre",
    placeholder: "Tu nombre",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "Correo",
    type: "email",
    placeholder: "tucorreo@empresa.com",
    required: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    label: "\xBFQu\xE9 necesitas?",
    options: services
  }), /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    label: "Cu\xE9ntanos m\xE1s",
    placeholder: "Objetivo, alcance, plazos\u2026",
    rows: 3
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, "Enviar mensaje"));
}
Object.assign(__ds_scope, { ContactForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ContactForm.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
/**
 * PricingCard — a single plan in a pricing grid. `featured` highlights the recommended plan.
 */
function PricingCard({
  name,
  price,
  period = '/mes',
  description,
  features = [],
  cta = 'Empezar',
  featured = false,
  badge,
  onCta,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      background: featured ? 'var(--surface-inverse)' : 'var(--surface-card)',
      color: featured ? 'var(--text-on-inverse)' : 'var(--text-body)',
      border: `1px solid ${featured ? 'transparent' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-xl)',
      boxShadow: featured ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      padding: 'var(--space-8)',
      width: 300,
      boxSizing: 'border-box',
      transform: featured ? 'scale(1.03)' : 'none',
      ...style
    }
  }, (badge || featured) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: featured ? 'brand' : 'neutral'
  }, badge || 'Recomendado')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: featured ? 'var(--brand-yellow)' : 'var(--text-muted)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 46,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: featured ? 'var(--white)' : 'var(--text-strong)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: featured ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, period)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: 14,
      lineHeight: 'var(--lh-snug)',
      color: featured ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      fontSize: 14.5,
      lineHeight: 'var(--lh-snug)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-orange)',
      fontWeight: 'var(--fw-bold)',
      flexShrink: 0
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'outline',
    fullWidth: true,
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/**
 * Footer — dark marketing footer with columns + fine print.
 */
function Footer({
  style = {}
}) {
  const cols = [{
    title: 'Servicios',
    items: ['Aplicaciones web', 'Páginas & landings', 'Automatizaciones', 'Integraciones / API']
  }, {
    title: 'Empresa',
    items: ['Nosotros', 'Proyectos', 'Blog', 'Contacto']
  }, {
    title: 'Recursos',
    items: ['Soporte', 'Estado', 'Términos', 'Privacidad']
  }];
  const linkStyle = {
    display: 'block',
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'var(--text-inverse-muted)',
    textDecoration: 'none',
    padding: '5px 0'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: '64px 32px 28px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: "light"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      maxWidth: 260,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-inverse-muted)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-on-inverse)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, "El Dron en la Sopa"), " \u2014 la tecnolog\xEDa est\xE1 en todo, hasta en la sopa. Aplicaciones, p\xE1ginas y automatizaciones a medida.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-yellow)'
    }
  }, c.title), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: linkStyle,
    onMouseEnter: e => e.currentTarget.style.color = 'var(--white)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-inverse-muted)'
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 El Dron en la Sopa"), /*#__PURE__*/React.createElement("span", null, "Hecho con caf\xE9 en Per\xFA \u2615")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
/**
 * Header — marketing site top navigation. Sticky, links + CTA.
 */
function Header({
  links = [{
    label: 'Servicios',
    href: '#servicios'
  }, {
    label: 'Proyectos',
    href: '#proyectos'
  }, {
    label: 'Planes',
    href: '#planes'
  }, {
    label: 'Nosotros',
    href: '#nosotros'
  }],
  cta = 'Solicitar propuesta',
  onCta,
  inverse = false,
  style = {}
}) {
  const textColor = inverse ? 'var(--text-on-inverse)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      background: inverse ? 'var(--surface-inverse)' : 'rgba(255,255,255,0.86)',
      backdropFilter: 'saturate(180%) blur(var(--blur-glass))',
      borderBottom: `1px solid ${inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'}`,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    tone: inverse ? 'light' : 'dark'
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 'var(--fw-medium)',
      color: textColor,
      textDecoration: 'none',
      transition: 'color var(--dur-base) var(--ease-out)'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--brand-orange)',
    onMouseLeave: e => e.currentTarget.style.color = textColor
  }, l.label))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: inverse ? 'primary' : 'primary',
    size: "sm",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-dashboard/DashboardApp.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Tag,
  IconButton,
  Wordmark
} = window.ElDronEnLaSopaDesignSystem_5a2264;
const {
  useState
} = React;
const NAV = [{
  id: 'resumen',
  label: 'Resumen',
  icon: '◧'
}, {
  id: 'proyectos',
  label: 'Proyectos',
  icon: '▤'
}, {
  id: 'tickets',
  label: 'Tickets',
  icon: '◇'
}, {
  id: 'facturas',
  label: 'Facturas',
  icon: '▦'
}, {
  id: 'archivos',
  label: 'Archivos',
  icon: '▥'
}];
const PROJECTS = [{
  name: 'App de inventario',
  progress: 72,
  status: ['En desarrollo', 'warning'],
  stack: ['React', 'Node.js', 'PostgreSQL']
}, {
  name: 'Landing campaña Q3',
  progress: 100,
  status: ['Entregado', 'success'],
  stack: ['Astro', 'Tailwind']
}, {
  name: 'Automatización de reportes',
  progress: 34,
  status: ['En desarrollo', 'warning'],
  stack: ['Python', 'n8n']
}];
const TICKETS = [{
  id: 'DR-241',
  title: 'Error al exportar reporte PDF',
  prio: ['Alta', 'danger'],
  estado: 'Abierto',
  fecha: 'Hoy'
}, {
  id: 'DR-238',
  title: 'Agregar filtro por fecha',
  prio: ['Media', 'warning'],
  estado: 'En revisión',
  fecha: 'Ayer'
}, {
  id: 'DR-235',
  title: 'Cambiar logo del footer',
  prio: ['Baja', 'neutral'],
  estado: 'Cerrado',
  fecha: '12 jul'
}];
function Sidebar({
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 250,
      background: 'var(--gradient-ink)',
      color: 'var(--text-on-inverse)',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      flexShrink: 0,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--texture-grid)',
      backgroundSize: 'var(--texture-grid-size)',
      opacity: 0.4,
      maskImage: 'radial-gradient(circle at 50% 0%, #000, transparent 70%)',
      WebkitMaskImage: 'radial-gradient(circle at 50% 0%, #000, transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -80,
      left: -40,
      width: 240,
      height: 240,
      background: 'radial-gradient(circle, rgba(34,211,238,0.18), transparent 68%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 28px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    tone: "light",
    size: "sm"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      position: 'relative'
    }
  }, NAV.map(n => {
    const on = n.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onSelect(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 14px',
        border: on ? '1px solid transparent' : '1px solid transparent',
        borderRadius: 'var(--radius-md)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        fontWeight: on ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        background: on ? 'var(--gradient-hud)' : 'transparent',
        color: on ? 'var(--ink-950)' : 'var(--text-inverse-muted)',
        boxShadow: on ? 'var(--glow-soft-cyan)' : 'none',
        textAlign: 'left',
        transition: 'background var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16
      }
    }, n.icon), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 14,
      background: 'var(--glass-dark)',
      backdropFilter: 'blur(var(--blur-glass))',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-md)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-inverse-muted)',
      marginBottom: 8
    }
  }, "\xBFNecesitas ayuda?"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true
  }, "Abrir ticket")));
}
function StatCard({
  label,
  value,
  delta,
  tone
}) {
  return /*#__PURE__*/React.createElement(Card, {
    elevation: "sm",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, value), delta && /*#__PURE__*/React.createElement(Badge, {
    tone: tone
  }, delta)));
}
function DashboardApp() {
  const [active, setActive] = useState('resumen');
  const activeLabel = NAV.find(n => n.id === active).label;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)',
      backgroundImage: 'radial-gradient(rgba(11,15,26,0.05) 1.2px, transparent 1.2px)',
      backgroundSize: '22px 22px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onSelect: setActive
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 32px',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, "Panel de cliente"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '2px 0 0',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-strong)'
    }
  }, activeLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notificaciones",
    variant: "outline"
  }, "\u25D4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 6px 6px 14px',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, "Comercial Andina"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: '50%',
      background: 'var(--brand-orange)',
      color: 'var(--text-on-brand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'var(--fw-bold)',
      fontSize: 13
    }
  }, "CA")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Proyectos activos",
    value: "2",
    delta: "+1",
    tone: "success"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Tickets abiertos",
    value: "3",
    delta: "2 nuevos",
    tone: "brand"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Horas este mes",
    value: "86",
    delta: "+12%",
    tone: "success"
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Pr\xF3xima entrega",
    value: "18 jul",
    delta: "En plazo",
    tone: "info"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, "Proyectos"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      paddingBottom: 18,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)',
      fontSize: 15.5
    }
  }, p.name), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status[1],
    dot: true
  }, p.status[0])), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: p.progress + '%',
      height: '100%',
      background: p.progress === 100 ? 'var(--success)' : 'var(--brand-orange)',
      borderRadius: 'var(--radius-pill)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, p.stack.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    style: {
      fontSize: 12,
      padding: '4px 9px'
    }
  }, t)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p.progress, "%")))))), /*#__PURE__*/React.createElement(Card, {
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, "Actividad reciente"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [['Se desplegó', 'Landing campaña Q3', 'hace 2 h'], ['Nuevo comentario en', 'DR-238', 'hace 5 h'], ['Factura emitida', 'F-2026-041', 'ayer'], ['Se completó el hito', 'Diseño de UI', 'hace 3 días']].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      marginTop: 6,
      borderRadius: '50%',
      background: 'var(--brand-orange)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-body)'
    }
  }, a[0], " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, a[1])), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)',
      marginTop: 2
    }
  }, a[2]))))))), /*#__PURE__*/React.createElement(Card, {
    elevation: "sm",
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, "Tickets de soporte"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement("span", null, "+")
  }, "Nuevo ticket")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: 'left',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 24px',
      fontWeight: 'var(--fw-medium)'
    }
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 24px',
      fontWeight: 'var(--fw-medium)'
    }
  }, "Asunto"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 24px',
      fontWeight: 'var(--fw-medium)'
    }
  }, "Prioridad"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 24px',
      fontWeight: 'var(--fw-medium)'
    }
  }, "Estado"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '12px 24px',
      fontWeight: 'var(--fw-medium)'
    }
  }, "Fecha"))), /*#__PURE__*/React.createElement("tbody", null, TICKETS.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.id,
    style: {
      borderTop: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 24px',
      fontFamily: 'var(--font-mono)',
      color: 'var(--brand-orange-600)',
      fontWeight: 'var(--fw-medium)'
    }
  }, t.id), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 24px',
      color: 'var(--text-strong)'
    }
  }, t.title), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 24px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: t.prio[1]
  }, t.prio[0])), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 24px'
    }
  }, t.estado), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '14px 24px',
      color: 'var(--text-muted)'
    }
  }, t.fecha)))))))));
}
window.DashboardApp = DashboardApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-dashboard/DashboardApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ContactSection.jsx
try { (() => {
const {
  ContactForm
} = window.ElDronEnLaSopaDesignSystem_5a2264;
function ContactSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      background: 'var(--surface-inverse)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-yellow)',
      marginBottom: 16
    }
  }, "// Contacto"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 18px',
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-on-inverse)',
      lineHeight: 'var(--lh-heading)'
    }
  }, "Cu\xE9ntanos tu idea. La convertimos en producto."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 28px',
      fontSize: 17,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-inverse-muted)',
      maxWidth: 440
    }
  }, "Respondemos en menos de 24 horas con una primera propuesta de alcance y presupuesto."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ['Diagnóstico gratuito', 'Presupuesto sin compromiso', 'Equipo local, comunicación en español'].map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      color: 'var(--text-on-inverse)',
      fontSize: 15.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-orange)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "\u2713"), f)))), /*#__PURE__*/React.createElement(ContactForm, {
    style: {
      justifySelf: 'end'
    }
  })));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HeroSection.jsx
try { (() => {
const {
  Button
} = window.ElDronEnLaSopaDesignSystem_5a2264;
function HeroSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-ink)',
      color: 'var(--text-on-inverse)',
      padding: '104px 32px 118px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'var(--texture-grid)',
      backgroundSize: 'var(--texture-grid-size)',
      opacity: 0.5,
      maskImage: 'radial-gradient(circle at 70% 30%, #000 0%, transparent 75%)',
      WebkitMaskImage: 'radial-gradient(circle at 70% 30%, #000 0%, transparent 75%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -140,
      right: -80,
      width: 500,
      height: 500,
      background: 'radial-gradient(circle, rgba(255,107,53,0.28), transparent 66%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -180,
      left: -120,
      width: 480,
      height: 480,
      background: 'radial-gradient(circle, rgba(34,211,238,0.20), transparent 68%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-cyan)',
      marginBottom: 22,
      border: '1px solid var(--glass-border)',
      background: 'var(--glass-dark)',
      backdropFilter: 'blur(8px)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--brand-cyan)',
      boxShadow: '0 0 10px var(--brand-cyan)'
    }
  }), "Soluciones inform\xE1ticas a medida"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 74,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "Software que hace", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--text-gradient)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "crecer tu empresa")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '26px 0 0',
      fontSize: 20,
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-inverse-muted)',
      maxWidth: 560
    }
  }, "Dise\xF1amos y construimos aplicaciones web, p\xE1ginas y automatizaciones. Del prototipo a producci\xF3n, con comunicaci\xF3n cercana en cada paso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 36,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Solicitar propuesta"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg"
  }, "Ver proyectos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 44,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-faint)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    }
  }, "stack"), ['React', 'Node.js', 'Python', 'PostgreSQL', 'n8n', 'AWS'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--brand-cyan-300)',
      border: '1px solid var(--glass-border)',
      background: 'var(--glass-dark)',
      backdropFilter: 'blur(6px)',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)'
    }
  }, t))))));
}
window.HeroSection = HeroSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PricingSection.jsx
try { (() => {
const {
  PricingCard
} = window.ElDronEnLaSopaDesignSystem_5a2264;
function PricingSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "planes",
    style: {
      background: 'var(--surface-card)',
      padding: '96px 32px',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-orange-600)',
      marginBottom: 14
    }
  }, "// Planes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, "Precios claros, sin sorpresas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 auto 52px',
      fontSize: 17,
      color: 'var(--text-muted)',
      maxWidth: 520
    }
  }, "Empieza con lo justo y crece a tu ritmo. Cada plan incluye acompa\xF1amiento cercano."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      justifyContent: 'center',
      alignItems: 'stretch',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    name: "Emprende",
    price: "S/ 1,200",
    description: "Para lanzar tu presencia digital.",
    features: ['Landing page a medida', 'Formulario de contacto', 'Hosting 1 año incluido', '2 rondas de ajustes'],
    cta: "Empezar"
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "Crece",
    price: "S/ 3,500",
    featured: true,
    description: "Aplicaci\xF3n web completa a medida.",
    features: ['App web a medida', 'Panel de administración', 'Integraciones / API', 'Soporte prioritario 6 meses'],
    cta: "Agendar llamada"
  }), /*#__PURE__*/React.createElement(PricingCard, {
    name: "A medida",
    price: "Custom",
    period: "",
    description: "Proyectos complejos y automatizaci\xF3n.",
    features: ['Alcance definido contigo', 'Automatizaciones de procesos', 'Equipo dedicado', 'SLA garantizado'],
    cta: "Cont\xE1ctanos"
  }))));
}
window.PricingSection = PricingSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PricingSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ServicesSection.jsx
try { (() => {
const {
  Card
} = window.ElDronEnLaSopaDesignSystem_5a2264;
const SERVICES = [{
  icon: '◆',
  title: 'Aplicaciones web',
  body: 'Plataformas y paneles a medida, del MVP a producción, con la escala que tu operación necesita.'
}, {
  icon: '▲',
  title: 'Páginas & landings',
  body: 'Sitios rápidos y bien posicionados que convierten visitas en clientes.'
}, {
  icon: '⬡',
  title: 'Automatizaciones',
  body: 'Conectamos tus herramientas y eliminamos el trabajo manual repetitivo.'
}, {
  icon: '⬢',
  title: 'Integraciones / API',
  body: 'Unimos tus sistemas: pagos, CRMs, ERPs y servicios de terceros.'
}];
function ServicesSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      background: 'var(--surface-page)',
      padding: '96px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-orange-600)',
      marginBottom: 14
    }
  }, "// Qu\xE9 hacemos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 48px',
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)',
      maxWidth: 640,
      lineHeight: 'var(--lh-heading)'
    }
  }, "Un socio tecnol\xF3gico, no solo un proveedor"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 24
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.title,
    elevation: "sm",
    interactive: true,
    accent: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      color: 'var(--brand-orange)',
      marginBottom: 16
    }
  }, s.icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, s.body))))));
}
window.ServicesSection = ServicesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ServicesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/services-landing/ServicesLandingApp.jsx
try { (() => {
const {
  Header,
  Footer,
  Button,
  Card,
  Badge,
  Tag,
  ContactForm
} = window.ElDronEnLaSopaDesignSystem_5a2264;
const STEPS = [{
  n: '01',
  t: 'Diagnóstico',
  d: 'Mapeamos tus procesos actuales y detectamos el trabajo manual que se puede automatizar.'
}, {
  n: '02',
  t: 'Diseño del flujo',
  d: 'Definimos disparadores, integraciones y reglas. Te mostramos el flujo antes de construir.'
}, {
  n: '03',
  t: 'Implementación',
  d: 'Conectamos tus herramientas y probamos con datos reales, sin interrumpir tu operación.'
}, {
  n: '04',
  t: 'Soporte',
  d: 'Monitoreamos, ajustamos y te capacitamos. La automatización crece con tu empresa.'
}];
const BENEFITS = [{
  t: 'Menos errores',
  d: 'Elimina la copia manual entre sistemas y los datos inconsistentes.'
}, {
  t: 'Más tiempo',
  d: 'Tu equipo deja las tareas repetitivas y se enfoca en lo importante.'
}, {
  t: 'Escala sin fricción',
  d: 'Los procesos aguantan más volumen sin contratar más personal.'
}];
function ServicesLandingApp() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(Header, {
    cta: "Agendar diagn\xF3stico"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: '90px 32px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -140,
      left: -60,
      width: 420,
      height: 420,
      background: 'radial-gradient(circle, rgba(247,201,72,0.16), transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Servicio")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 60,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, "Automatiza lo ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-orange)'
    }
  }, "repetitivo")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      fontSize: 19,
      lineHeight: 'var(--lh-snug)',
      color: 'var(--text-inverse-muted)',
      maxWidth: 480
    }
  }, "Conectamos tus herramientas y dejamos que el software haga el trabajo manual. Facturas, reportes, avisos y m\xE1s \u2014 en piloto autom\xE1tico."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Agendar diagn\xF3stico"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg"
  }, "Ver casos"))), /*#__PURE__*/React.createElement(Card, {
    glass: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--brand-cyan)',
      marginBottom: 14
    }
  }, "// flujo_facturacion.n8n"), ['Nueva venta en la tienda', 'Generar factura electrónica', 'Enviar por correo al cliente', 'Registrar en hoja de cálculo', 'Avisar al equipo en Slack'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--brand-orange)',
      color: 'var(--text-on-brand)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      flexShrink: 0
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-on-inverse)'
    }
  }, s)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '90px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, BENEFITS.map(b => /*#__PURE__*/React.createElement(Card, {
    key: b.t,
    elevation: "sm",
    interactive: true,
    accent: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, b.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, b.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '90px 32px',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--brand-orange-600)',
      marginBottom: 14
    }
  }, "// C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 48px',
      fontFamily: 'var(--font-display)',
      fontSize: 38,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)'
    }
  }, "Cuatro pasos, cero drama"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 'var(--fw-bold)',
      color: 'var(--brand-orange)',
      letterSpacing: 'var(--ls-tight)'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      width: 40,
      background: 'var(--brand-yellow)',
      margin: '10px 0 16px',
      borderRadius: 'var(--radius-pill)'
    }
  }), /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-strong)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)'
    }
  }, s.d)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '90px 32px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-tight)',
      color: 'var(--text-strong)',
      lineHeight: 'var(--lh-heading)'
    }
  }, "\xBFQu\xE9 proceso te quita m\xE1s tiempo?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 17,
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-muted)',
      maxWidth: 420
    }
  }, "Cu\xE9ntanos y te devolvemos un diagn\xF3stico con las automatizaciones de mayor impacto. Gratis y sin compromiso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Facturación', 'Reportes', 'Onboarding', 'Inventario', 'Correos'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement(ContactForm, {
    title: "Agenda tu diagn\xF3stico",
    subtitle: "Te contactamos hoy mismo.",
    style: {
      justifySelf: 'end'
    }
  })), /*#__PURE__*/React.createElement(Footer, null));
}
window.ServicesLandingApp = ServicesLandingApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/services-landing/ServicesLandingApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ContactForm = __ds_scope.ContactForm;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

})();
