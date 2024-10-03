import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().min(1000),
  NODE_ENV: z.union([z.literal('production'), z.literal('development')]).default('development'),
});

const env = envSchema.parse(process.env);

export default env;
