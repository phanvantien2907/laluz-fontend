export const tlias = (str: string) => {
  return str
    .toLowerCase()
    .trim()
    .normalize("NFD") // Chuẩn hóa ký tự có dấu
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ dấu
    .replace(/đ/g, "d") // Chuyển đổi ký tự đặc biệt
    .replace(/[^a-z0-9\s-]/g, "") // Loại bỏ ký tự không hợp lệ
    .replace(/\s+/g, "-") // Thay khoảng trắng bằng dấu "-"
    .replace(/-+/g, "-"); // Loại bỏ dấu "-" thừa
}