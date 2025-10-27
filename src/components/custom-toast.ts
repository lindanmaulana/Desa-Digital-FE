import { toast } from "sonner"

export const customToastSuccess = (message: string) => {
  return toast.success(message, {
    icon: "🎉"
  })
}

export const customToastError = (message: string) => {
  return toast.error(message, {
    icon: "❌",
  })
}

export const customToastLoading = (message: string) => {
  return toast.loading(message)
}

export const ToastDismis = () => {
  return toast.dismiss()
}


