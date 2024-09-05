import * as z from 'zod';

export const TLoginScheme = z.object({
  email: z.string().min(2, { message: 'Email Tidak Boleh Kosong' }),
  password: z.string().min(2, { message: 'Password Tidak Boleh Kosong' }),
});

export type TLogin = z.infer<typeof TLoginScheme>;

export type TToken = {
  token: {
    expiresIn: string;
    token: string;
  };
};
