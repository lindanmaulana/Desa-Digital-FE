import z from 'zod';

export class AuthSchema {
  static readonly SIGNINSCHEMA = z.object({
    email: z.email({ error: 'Email tidak valid!' }).nonempty({ error: 'Email tidak boleh kosong' }),
    password: z.string().nonempty({ error: 'Password tidak boleh kosong' }),
  });

  static readonly VERIFYACCOUNT_SCHEMA = z.object({
    token: z.string().nonempty({ error: 'Token verifikaasi tidak boleh kosong' }),
    otp_code: z.string().min(6, 'Kode OTP kurang dari 6 digit'),
  });

  static readonly RESEND_OTP_VERIFYACCOUNT_SCHEMA = z.object({
    email: z.email({ error: 'Email tidak valid' }).nonempty({ error: 'Email tidak boleh kosong' }),
  });

  static readonly RESEND_TOKEN_VERIFYACCOUNT_SCHEMA = z.object({
    email: z.email({ error: 'Email tidak valid' }).nonempty({ error: 'Email tidak boleh kosong' }),
  });

  static readonly FORGOTPASSWORD_SCHEMA = z.object({
    email: z.email({ error: 'Email tidak valid' }).nonempty({ error: 'Email tidak boleh kosong' }),
  });

  static readonly RESEND_OTP_FORGOTPASSWORD_SCHEMA = z.object({
    email: z.email({ error: 'Email tidak valid' }).nonempty({ error: 'Email tidak boleh kosong' }),
  });

  static readonly VERIFY_OTP_FORGOTPASSWORD_SCHEMA = z.object({
    email: z.email({ error: 'Email tidak valid' }).nonempty({ error: 'Email tidak boleh kosong' }),
    otp_code: z.string().min(6, 'Kode OTP kurang dari 6 digit'),
  });

  static readonly RESETPASSWORD = z.object({
    password: z.string().min(8, 'Kata sandi minimal 8 karakter'),
    confirm_password: z.string().min(8, 'Kata sandi minimal 8 karakter'),
  });
}

export type TypeSigninSchema = z.infer<typeof AuthSchema.SIGNINSCHEMA>;

export type TypeVerifyAccountSchema = z.infer<typeof AuthSchema.VERIFYACCOUNT_SCHEMA>;
export type TypeResendOtpVerificationAccountSchema = z.infer<typeof AuthSchema.RESEND_OTP_VERIFYACCOUNT_SCHEMA>;
export type TypeResendTokenVerifyTokenSchema = z.infer<typeof AuthSchema.RESEND_TOKEN_VERIFYACCOUNT_SCHEMA>;

export type TypeForgotPasswordSchema = z.infer<typeof AuthSchema.FORGOTPASSWORD_SCHEMA>;
export type TypeResendOtpForgotPasswordSchema = z.infer<typeof AuthSchema.RESEND_OTP_FORGOTPASSWORD_SCHEMA>;
export type TypeVerifyOtpForgotPasswordSchema = z.infer<typeof AuthSchema.VERIFY_OTP_FORGOTPASSWORD_SCHEMA>
export type TypeResetPassword = z.infer<typeof AuthSchema.RESETPASSWORD>;
