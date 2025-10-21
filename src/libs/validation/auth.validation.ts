import z from 'zod';

export const SigninSchema = z.object({
  email: z.email({ error: 'Email tidak valid!' }).nonempty({ error: 'Email tidak boleh kosong' }),
  password: z.string().nonempty({ error: 'Password tidak boleh kosong' }),
});

export type TypeSigninSchema = z.infer<typeof SigninSchema>
