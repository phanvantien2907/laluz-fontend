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
import { UserFormData } from "@/hooks/user/useAddNewForm";
import toast from "react-hot-toast";
import { useEditForm } from "@/hooks/product/useEditForm";
import { deleteUser } from "@/lib/api";

const DeleteDialog = ({trigger, userID, defaultValues}: {trigger: React.ReactNode, userID: string, defaultValues: UserFormData}) => {
    const user = deleteUser;
    const handleDelete = async () => {
        try {
            await user(userID);
            toast.success("Xóa người dùng thành công!")
            return;
        }
        catch (err) {
            toast.error("Xóa người dùng thất bại!")
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
            <AlertDialogTitle>Bạn chắc chắn muốn xóa người dùng này?</AlertDialogTitle>
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
