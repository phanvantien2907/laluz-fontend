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
import { lockUser } from "@/lib/api";


const lockUserDialog = ({trigger, userID, defaultValues}: {trigger: React.ReactNode, userID: string, defaultValues: UserFormData}) => {
    const lock = lockUser;
    const handleDelete = async () => {
        try {
           const res = await lock(userID);
           if(res.success) {
             toast.success(defaultValues.is_active ? "Khóa tài khoản thành công!" : "Mở khóa tài khoản thành công!")
            return;
           }
           toast.error(defaultValues.is_active ? "Khóa tài khoản thất bại!" : "Mở khóa tài khoản thất bại!")
           return;
        }
        catch (err:any) {
           if(err.response) {
            toast.error(err.response.data.message);
            return;
           }
              toast.error("Lỗi không xác định!");
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
            <AlertDialogTitle>{defaultValues.is_active ? "Bạn chắc chắn muốn khóa người dùng này ?" : "Bạn chắc chắn muốn mở khóa người dùng này ?" }</AlertDialogTitle>
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

export default lockUserDialog;
