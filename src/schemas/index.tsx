import { z } from "zod";

const FormAddInformationSchema = z.object({
  name: z.string().min(1, {
    message: "Nhập họ và tên của bạn",
  }),
  birthday: z.date({
    required_error: "Bạn phải chọn ngày sinh",
  }),
  email: z.string().email({
    message: "Email phải đúng định dạng",
  }),
  phone: z.string().min(1, {
    message: "Vui lòng cung cấp số điện thoại",
  }),
  gender: z.enum(["male", "female", "other"], {
    required_error: "Bạn cần chọn giới tính",
  }),
  address: z.string(),
  ward: z.string().min(1, { message: "Vui lòng chọn xã" }),
  district: z.string().min(1, { message: "Vui lòng chọn quận/huyện" }),
  province: z.string().min(1, { message: "Vui lòng chọn tỉnh" }),
});
export { FormAddInformationSchema };
