import { createAuthClient } from 'better-auth/react';

const authClient = createAuthClient();

type ErrorTypes = {
  [K in keyof typeof authClient.$ERROR_CODES]?: {
    en: string;
    es: string;
  };
};

const errorCodes: ErrorTypes = {
  USER_ALREADY_EXISTS: {
    en: 'User already registered',
    es: 'Usuario ya registrado',
  },
  INVALID_EMAIL_OR_PASSWORD: {
    en: 'Invalid email or password',
    es: 'Correo electrónico o contraseña inválidos',
  },

  INVALID_TOKEN: {
    en: 'Invalid or expired token',
    es: 'Token inválido o expirado',
  },
  USER_NOT_FOUND: {
    en: 'User not found',
    es: 'Usuario no encontrado',
  },
};

export function getAuthErrorMessage(
  code: string,
  lang: 'en' | 'es' = 'en',
): string {
  if (code in errorCodes) {
    return errorCodes[code as keyof typeof errorCodes]?.[lang] || '';
  }
  return '';
}
