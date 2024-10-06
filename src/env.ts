import { z, ZodError } from 'zod';

const EnvSchema = z.object({
  PORT: z.coerce.number().min(1000),
  NODE_ENV: z.union([z.literal('production'), z.literal('development')]).default('development'),
});

export type env = z.infer<typeof EnvSchema>;

let env: env;

try {
  env = EnvSchema.parse(process.env);
} catch (e) {
  const error = e as ZodError;
  console.error('Env error:');
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
