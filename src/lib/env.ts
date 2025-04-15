import { z } from 'zod';

const envSchema = z.object({
  VITE_API_BASE_URL: z.string(),
});

export const ENV = envSchema.parse(import.meta.env);
