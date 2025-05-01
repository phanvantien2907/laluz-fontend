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
import { ProductFormData } from "@/hooks/product/useAddNewForm";
import toast from "react-hot-toast";
import { useEditForm } from "@/hooks/product/useEditForm";
import { deleteProduct } from "@/lib/api";

const DeleteDialog = ({trigger, productID, defaultValues}: {trigger: React.ReactNode, productID: string, defaultValues: ProductFormData}) => {
    const product = deleteProduct;
    const handleDelete = async () => {
        try {
            await product(productID);
            toast.success("Xóa sản phẩm thành công!")
            return;
        }
        catch (err) {
            toast.error("Xóa sản phẩm thất bại!")
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
            <AlertDialogTitle>Bạn chắc chắn muốn xóa sản phẩm này?</AlertDialogTitle>
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
