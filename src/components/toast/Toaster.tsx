import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToasterProps = React.ComponentProps<typeof ToastContainer>;

const Toaster = ({ ...props }: ToasterProps) => {
  return <ToastContainer theme={"light"} position="top-center" autoClose={3000} {...props} />;
};

export { Toaster };
