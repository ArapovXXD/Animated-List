import { toast, ToastOptions, TypeOptions } from 'react-toastify';

interface MakeToastParams {
  type: TypeOptions;
  text: string;
  props?: ToastOptions;
}

export const toastProps: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const makeToast = ({ type, text, props = {} }: MakeToastParams): void => {
  switch (type) {
    case 'info':
      toast.info(text, { ...toastProps, ...props });
      break;
    case 'success':
      toast.success(text, { ...toastProps, ...props });
      break;
    case 'warning':
      toast.warning(text, { ...toastProps, ...props });
      break;
    case 'error':
      toast.error(text, { ...toastProps, ...props });
      break;
    default:
      console.error(`Invalid toast type: ${type}`);
  }
};
