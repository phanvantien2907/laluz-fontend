import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import { deleteOrder } from "@/lib/api";
import { orderEditForm } from "@/hooks/order/orderEditForm";
import { OrderFormData } from "@/hooks/order/orderForm";

const DeleteDialog = ({trigger, orderID, defaultValues}: {trigger: React.ReactNode, orderID: string, defaultValues: OrderFormData}) => {
    const orrder = deleteOrder;
    const handleDelete = async () => {
        try {
            await orrder(orderID);
            toast.success("Xóa đơn hàng thành công!")
            return;
        }
        catch (err) {
            toast.error("Xóa đơn hàng thất bại!")
            return;
        }
    }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
         {trigger}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Bạn chắc chắn muốn xóa đơn hàng này?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-black">Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteDialog;
