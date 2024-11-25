"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { verifySchema } from "@/schemas/user.Schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
const page = () => {
  const [isSubmittingForm, setisSubmittingForm] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams<{ username: string }>();
  const form = useForm<z.infer<typeof verifySchema>>({
    resolver: zodResolver(verifySchema),
  });

  const onSubmit = async (data: z.infer<typeof verifySchema>) => {
    setisSubmittingForm(true);
    try {
      const response = await axios.post(`/api/verify-code`, {
        username: params?.username,
        code: data.code,
      });
      toast({
        title: "Success",
        description: response.data.message,
      });
      router.replace("/login");
    } catch (err) {
      //write catch block
      console.log("Print sign up error", err);
      toast({
        title: "Error",
        description: "Failed to verify user",
        variant: "destructive",
      });
    } finally {
      setisSubmittingForm(false);
    }
  };
  return (
    <div className="-z-40">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 h-full w-full"
        >
          <div className="flex justify-center items-center  bg-gray-100 ">
            <div className="w-full max-w-lg p-4 space-y-8 bg-white-rounded-lg shadow-md min-w-[100vw] sm:min-w-full">
              <div className="text-center">
                <h1 className="text-extrabold text-4xl tracking-tight lg:text-3xl mb-2 font-bold">
                  Verify your OTP
                </h1>
                <p className="mb-4 font-thin">
                  {" "}
                  Please verify your code to continue
                </p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2 px-4"
                >
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                            </InputOTPGroup>
                            <InputOTPSeparator />
                            <InputOTPGroup>
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="mt-6">
                    <Button
                      type="submit"
                      disabled={isSubmittingForm}
                      className="w-1/2 flex items-center justify-center relative translate-x-1/2 mt-5"
                    >
                      {isSubmittingForm ? (
                        <>
                          <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                          Please wait...
                        </>
                      ) : (
                        " Verify"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="text-center mt-4">
                Already a member?
                <Link
                  href="/login"
                  className="text-blue-500 hover:text-blue-600"
                >
                  Sign In &rarr;
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default page;
