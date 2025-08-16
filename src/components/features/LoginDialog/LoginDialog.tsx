"use client";

import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { CustomInput } from "@/components/ui/form/CustomInput";
import { toPersianNumbers } from "@/utils/persianNumbers";
import { OtpFormData, otpSchema, PhoneFormData, phoneSchema } from "@/types";

type Step = "phone" | "otp";

interface LoginDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
    const [step, setStep] = useState<Step>("phone");
    const [phone, setPhone] = useState<string>("");
    const [timer, setTimer] = useState<number>(120);
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
    const otpInputRef = useRef<HTMLInputElement>(null);

    // Phone form
    const phoneForm = useForm<PhoneFormData>({
        resolver: yupResolver(phoneSchema),
        defaultValues: {
            phone: "",
        },
    });

    // OTP form
    const otpForm = useForm<OtpFormData>({
        resolver: yupResolver(otpSchema),
        defaultValues: {
            otp: "",
        },
    });

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isTimerRunning && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerRunning(false);
        }
        return () => clearInterval(interval);
    }, [isTimerRunning, timer]);

    useEffect(() => {
        if (step === "otp" && otpInputRef.current) {
            setTimeout(() => {
                otpInputRef.current?.focus();
            }, 100);
        }
    }, [step]);

    const handlePhoneSubmit = (data: PhoneFormData) => {
        setPhone(data.phone);
        setStep("otp");
        setTimer(120);
        setIsTimerRunning(true);
        toast.success("کد تایید ارسال شد");
    };

    const handleOtpSubmit = (data: OtpFormData) => {
        // OTP validation logic here
        console.log("OTP submitted:", data.otp);
        toast.success("ورود موفقیت‌آمیز بود");
        // On successful login:
        onOpenChange(false);
        resetState();
    };

    const handleResendOtp = () => {
        setTimer(120);
        setIsTimerRunning(true);
        toast.success("کد تایید مجدداً ارسال شد");
        console.log("Resending OTP to", phone);
    };

    const resetState = () => {
        setStep("phone");
        setPhone("");
        phoneForm.reset();
        otpForm.reset();
        setTimer(120);
        setIsTimerRunning(false);
    };

    const handleOpenChange = (isOpen: boolean) => {
        onOpenChange(isOpen);
        if (!isOpen && step === 'phone') {
            resetState();
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="">
                {step === "phone" && (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-center">ورود | ثبت نام</DialogTitle>
                            <DialogDescription className="text-center">
                                برای ورود یا ثبت نام شماره موبایل خود را وارد کنید
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={phoneForm.handleSubmit(handlePhoneSubmit)}>
                            <div className="grid gap-4 py-4">
                                <CustomInput
                                    name="phone"
                                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                    type="phone"
                                    label="شماره تماس"
                                    control={phoneForm.control}
                                    error={phoneForm.formState.errors.phone?.message}
                                />
                            </div>
                            <DialogFooter>
                                <Button
                                    className="cursor-pointer"
                                    type="submit"
                                    disabled={phoneForm.formState.isSubmitting}
                                >
                                    {phoneForm.formState.isSubmitting ? "در حال ارسال..." : "ارسال کد"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </>
                )}

                {step === "otp" && (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-center">کد تایید را وارد کنید</DialogTitle>
                            <DialogDescription className="text-center flex flex-col">
                                کد تایید ارسال شده به شماره {toPersianNumbers(phone)} را وارد کنید.
                                <Button variant="secondary"
                                    onClick={() => setStep('phone')}
                                    className="text-xs w-fit cursor-pointer mx-auto my-3">
                                    تغییر شماره
                                </Button>
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)}>
                            <div className="grid gap-4 py-4">
                                <div className="flex justify-center items-center gap-4">
                                    <Label htmlFor="otp" className="">
                                        کد تایید
                                    </Label>
                                    <div className="">
                                        <InputOTP
                                            ref={otpInputRef}
                                            maxLength={4}
                                            value={otpForm.watch("otp") || ""}
                                            onChange={(value) => otpForm.setValue("otp", value)}
                                        >
                                            <InputOTPGroup className="justify-center">
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                        {otpForm.formState.errors.otp && (
                                            <p className="text-sm text-red-500 mt-1 ">
                                                {otpForm.formState.errors.otp.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center text-sm text-muted-foreground mb-4">
                                {isTimerRunning ? (
                                    <p>
                                        {toPersianNumbers(Math.floor(timer / 60))}:
                                        {toPersianNumbers((timer % 60).toString().padStart(2, "0"))} مانده تا ارسال
                                        مجدد
                                    </p>
                                ) : (
                                    <Button
                                        variant="outline"
                                        onClick={handleResendOtp}
                                        type="button"
                                        className="text-xs w-fit cursor-pointer mx-auto my-3"
                                    >
                                        ارسال مجدد کد
                                    </Button>
                                )}
                            </div>
                            <DialogFooter>
                                <Button
                                    className="cursor-pointer"
                                    type="submit"
                                    disabled={otpForm.formState.isSubmitting}
                                >
                                    {otpForm.formState.isSubmitting ? "در حال بررسی..." : "تایید"}
                                </Button>
                            </DialogFooter>
                        </form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}
