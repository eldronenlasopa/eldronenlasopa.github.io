export const environment = {
  production: false,
  apiUrl: 'http://localhost:5257/api',
  // Public key from Google reCAPTCHA v3. Leave empty while CAPTCHA is disabled in the API.
  recaptchaSiteKey: '6LcodFUtAAAAAMc6Gv5siByxV5saUAGhfo82y4ly',
  analyticsMeasurementId: 'G-P5ZV1K1X50',
  tagManagerId: 'GTM-5ZZKGRDZ',
} as const;
