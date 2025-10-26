import { toast } from "sonner"

const CustomToastSuccess = (message: string) => {
  return toast.success(message, {
    icon: "🎉"
  })
}

const CustomToastError = (message: string) => {
  return toast.error(message, {
    icon: "❌",
  })
}

const CustomToastLoading = (message: string) => {
  return toast.loading(message)
}

const ToastDismis = () => {
  return toast.dismiss()
}

export default {CustomToastSuccess, CustomToastError, CustomToastLoading, ToastDismis}
