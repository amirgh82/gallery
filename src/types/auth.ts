import * as yup from "yup";

export const phoneSchema = yup.object({
    phone: yup
        .string()
        .required("شماره تماس الزامی است")
        .matches(/^09\d{9}$/, "فرمت شماره تماس صحیح نیست (09xxxxxxxxx)"),
});

export const otpSchema = yup.object({
    otp: yup
        .string()
        .required("کد تایید الزامی است")
        .length(4, "کد تایید باید 4 رقم باشد"),
});

export type PhoneFormData = yup.InferType<typeof phoneSchema>;
export type OtpFormData = yup.InferType<typeof otpSchema>;
