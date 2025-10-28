import z from 'zod';

export class AuthSchema {
  static readonly SIGNINSCHEMA = z.object({
    email: z.email({ error: 'Email tidak valid!' }).nonempty({ error: 'Email tidak boleh kosong' }),
    password: z.string().nonempty({ error: 'Password tidak boleh kosong' }),
  });

  static readonly RESENDOTP = z.object({
    email: z.email({error: "Email tidak valid"}).nonempty({error: "Email tidak boleh kosong"})
  })

  static readonly VERIFYACCOUNTSCHEMA = z.object({
    email: z.email({error: "Email tidak valid"}).nonempty({error: "Email tidak boleh kosong"}),
    otp_code: z.string().min(6, "Kode OTP kurang dari 6 digit")
  })

  static readonly FORGOTPASSWORD = z.object({
    email: z.email({error: "Email tidak valid"}).nonempty({error: "Email tidak boleh kosong"})
  })

  static readonly RESETPASSWORD = z.object({
    password: z.string().min(8, "Kata sandi minimal 8 karakter"),
    confirm_password: z.string().min(8, "Kata sandi minimal 8 karakter")
  })
}

export type TypeSigninSchema = z.infer<typeof AuthSchema.SIGNINSCHEMA>;
export type TypeResendOtpSchema = z.infer<typeof AuthSchema.RESENDOTP>
export type TypeVerifyAccountSchema = z.infer<typeof AuthSchema.VERIFYACCOUNTSCHEMA>
export type TypeForgotPasswordSchema = z.infer<typeof AuthSchema.FORGOTPASSWORD>
export type TypeResetPassword = z.infer<typeof AuthSchema.RESETPASSWORD>
