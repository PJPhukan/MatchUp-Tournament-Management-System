"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { resetPassword } from "@/schemas/user.Schema";
import React, {  useState } from "react";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useParams, useRouter } from "next/navigation";
const page = () => {
  const [isSubmittingForm, setisSubmittingForm] = useState(false);
  const router = useRouter();
  const params = useParams<{ username: string }>();
  //zod implementation
  const form = useForm<z.infer<typeof resetPassword>>({
    resolver: zodResolver(resetPassword),
  });
  const onSubmit = async (data: z.infer<typeof resetPassword>) => {
    setisSubmittingForm(true);
    try {
      const response = await axios.post(`/api/reset-password`, {
        username: params?.username,
        password:data.password
      });
      toast({
        title: "Success",
        description: response.data.message
      });
      // router.replace(`/verify-user/${data.username}`);
    } catch (err) {
      //write catch block
      console.log("Print reset password error", err); //TODO: remove this line

      toast({
        title: "Error",
        description: "Failed to reset password",
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
            <div className="w-full max-w-lg p-4 space-y-8 bg-white-rounded-lg shadow-md min-w-[100vw] md:min-w-full">
              <div className="text-center">
                <h1 className="text-extrabold text-3xl tracking-tight lg:text-4xl m-3 font-bold">
                  Reset your password
                </h1>
                <p className="mb-4 font-thin"> Enter your new password</p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2"
                >
                 

                  <div className="flex flex-col w-full gap-2">
                    {/* TODO: password */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Password</FormLabel> */}
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* TODO: Confirm password */}
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Confirm Password</FormLabel> */}
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="New Password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
              

                  <Button
                    type="submit"
                    disabled={isSubmittingForm}
                    className="w-full flex items-center justify-center relative"
                  >
                    {isSubmittingForm ? (
                      <>
                        <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                        Please wait...
                      </>
                    ) : (
                      " Reset password"
                    )}
                  </Button>
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
