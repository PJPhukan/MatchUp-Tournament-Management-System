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
import { SignUpSchema } from "@/schemas/user.Schema";
import React, { useState } from "react";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
const page = () => {
  const [isSubmittingForm, setisSubmittingForm] = useState(false);

  //zod implementation
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    // defaultValues: {
    //   username: "",
    //   fullname:"",
    //   email: "",
    //   confirmPassword:"",
    //   password: "",
    //   adharId: 0,
    //   phoneNumber: 0,
    // },
  });
  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    // setisSubmittingForm(true);
    // try {
    //   const response = await axios.post<ApiResponse>("/api/sign-up", data);
    //   toast({
    //     title: "Success",
    //     description: response.data.message,
    //   });
    //   router.replace(`/verify/${username}`);
    //   setisSubmittingForm(false);
    // } catch (error) {
    //   const axiosError = error as AxiosError<ApiResponse>;
    //   let axiosMessage = axiosError.response?.data.message;
    //   toast({
    //     title: "Error",
    //     description: axiosMessage || "Error in signup",
    //     variant: "destructive",
    //   });
    //   setisSubmittingForm(false);
    // }
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
                <h1 className="text-extrabold text-4xl tracking-tight lg:text-5xl mb-3 font-bold">
                  Join MatchUp
                </h1>
                <p className="mb-4 font-thin"> Sign up to Organize Event</p>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-2"
                >
                  <div className="flex  md:flex-row flex-col gap-2">
                    {/* TODO:Username  */}
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Username</FormLabel> */}
                          <FormControl>
                            <Input placeholder="Username" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* TODO:Fulllname  */}
                    <FormField
                      control={form.control}
                      name="fullname"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Fullname</FormLabel> */}
                          <FormControl>
                            <Input placeholder="Full Name" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex  md:flex-row flex-col gap-2 ">
                    {/* TODO: Adhar  */}
                    <FormField
                      control={form.control}
                      name="adharId"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Adhar ID</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder="Adhar ID"
                              {...field}
                              type="number"
                              className="w-full"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* TODO:Mobile number  */}
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>Mobile Number</FormLabel> */}
                          <FormControl>
                            <Input
                              placeholder="Mobile Number"
                              {...field}
                              type="number"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex  md:flex-row flex-col gap-2">
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
                              placeholder="Confirm Password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        {/* <FormLabel>Email</FormLabel> */}
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
                      " Sign up"
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
