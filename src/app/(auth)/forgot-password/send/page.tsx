"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendSchema } from "@/schemas/user.Schema";
import { useState } from "react";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const page = () => {
  const [isSubmittingForm, setisSubmittingForm] = useState(false);
  const router = useRouter();
  //zod implementation
  const form = useForm<z.infer<typeof sendSchema>>({
    resolver: zodResolver(sendSchema),
  });

  const onSubmit = async (data: z.infer<typeof sendSchema>) => {
    setisSubmittingForm(true);
    try {
      const response = await axios.post(`/api/forgot-send-email`, data);
      toast({
        title: "Success",
        description: response.data.message,
      });
      console.log(response.data.data.username);
      router.replace(`/forgot-password/${response.data.data.username}`);
    } catch (err) {
      //write catch block
      console.log("Print send mail error", err); //TODO: remove this line

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
    <div className="flex justify-center items-center  bg-gray-100 min-h-screen ">
      <div className="w-full sm:w-1/2 md:w-2/5 lg:w-1/4 max-w-lg p-4 space-y-8 bg-white-rounded-lg shadow-md ">
        <div className="text-center">
          <h1 className="text-extrabold text-2xl tracking-tight lg:text-3xl mb-5  font-bold">
            Forgot Password
          </h1>
          <p className="font-thin"> Enter Your Email Address</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel>Email</FormLabel> */}
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center items-center">
              <Button
                type="submit"
                disabled={isSubmittingForm}
                className="w-1/2 flex items-center justify-center relative align-center rounded-full  mt-5"
              >
                {isSubmittingForm ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  " Send"
                )}
              </Button>
            </div>
          </form>
        </Form>
        <div className="text-center">
          Already a member?
          <Link href="/login" className="text-blue-500 hover:text-blue-600">
            Sign In &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
