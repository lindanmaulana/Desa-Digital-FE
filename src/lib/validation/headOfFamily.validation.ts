import { VALID_GENDER, VALID_MARITAL } from '@/types/users/user.types';
import z from 'zod';

export const HeadOfFamilySchema = {
  create: z.object({
    name: z.string().nonempty({ error: 'Nama tidak boleh kosong!' }),
    email: z.email({ error: 'Email tidak valid!' }).nonempty({ error: 'Email tidak boleh kosong!' }),
    identity_number: z.string().length(16, 'NIK harus memiliki 16 digit.').optional(),
    phone_number: z.string().min(10, 'Nomor handphone minimal 10 digit').max(13, 'Nomor handphone maksimal 13 digit').optional(),
    occupation: z.string().optional(),
    date_of_birth: z.string(),
    gender: z.enum(VALID_GENDER, { error: 'Jenis Kelamin tidak valid' }),
    marital_status: z.enum(VALID_MARITAL, { error: 'Status tidak valid' }),
  }),
};

export type TypeCreateHeadOfFamilySchema = z.infer<typeof HeadOfFamilySchema.create>;

// export type FormInputCreateHeadOfFamilySchema = z.input<typeof HeadOfFamilySchema.create>
// export type FormOutputCreateHeadOfFamilySchema = z.output<typeof HeadOfFamilySchema.create>
// export type TypeCreateHeadOfFamilySchema = Omit<CreateHeadOfFamilySchema, 'date_of_birth'> & {
//   date_of_birth: string;
// };
