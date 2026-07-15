export const environment = {
  production: false,
  apiUrl: 'http://localhost:5257/api',
  // Public key from Google reCAPTCHA v3. Leave empty while CAPTCHA is disabled in the API.
  recaptchaSiteKey: '',
} as const;
