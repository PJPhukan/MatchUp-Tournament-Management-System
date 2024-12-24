"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInSchema } from "@/schemas/user.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import context from "@/context/context";
function Login() {
  const [isSubmittingForm, setisSubmittingForm] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
  });

  const { setIsLoggedIn } = useContext(context);
  const handleLogin = () => {
    setIsLoggedIn(true); // Now TypeScript won't complain
    console.log("set login true");
  };

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    setisSubmittingForm(true);
    try {
      const response = await axios.post(`/api/sign-in`, data);
      toast({
        title: "Success",
        description: response.data.message,
      });
      handleLogin();
      router.replace("/dashboard"); //move to dashboard page
      console.log("Move to dashboard page")
    } catch (err) {
      //write catch block
      console.log("Print log in error", err); //TODO: remove this line

      toast({
        title: "Error",
        description: "Failed to log in",
        variant: "destructive",
      });
    } finally {
      setisSubmittingForm(false);
    }
  };

  return (
    <div className="-z-40">
      {/* <AuroraBackground> */}
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
          <div className="flex justify-center items-center   min-h-screen">
            <div className="max-w-lg  p-4 pb-8">
              {/* <h1 className="text-center font-semibold py-6 text-2xl">
                Welcome back!
              </h1> */}
              <Tabs defaultValue="organizer" className="max-w-[500px]">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="player">Player</TabsTrigger>
                  <TabsTrigger value="organizer">Organizer</TabsTrigger>
                </TabsList>
                <TabsContent value="player">
                  <Card>
                    <CardHeader>
                      <CardTitle>Player</CardTitle>
                      <CardDescription>
                        Make changes to your account here. Click save when
                        you're done.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Pedro Duarte" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="@peduarte" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save changes</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="organizer">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        {" "}
                        <h1 className="font-semibold py-2 text-2xl">
                          Welcome back!
                        </h1>
                      </CardTitle>
                      <CardDescription>
                        To keep connected with us please login with your
                        personal information by username and password🔔
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {/*TODO: Login credentials */}
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                          {/* TODO:Username  */}
                          <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                              <FormItem>
                                <Label>Username</Label>
                                <Input
                                  {...field}
                                  placeholder="Enter your username"
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* TODO: Password  */}
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <Label>Password</Label>
                                <Input
                                  {...field}
                                  type="password"
                                  placeholder="Enter your password"
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* TODO: Forgot Password Link  */}
                          <div className=" flex justify-between my-3 md:flex-row flex-col gap-2">
                            <div className="flex items-center gap-1 ">
                              <Checkbox id="terms" checked />
                              <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Accept terms and conditions
                              </label>
                            </div>

                            <Link
                              href="/forgot-password/send"
                              className="text-blue-500 hover:text-blue-600 font-light text-sm"
                            >
                              Forgot Password &rarr;
                            </Link>
                          </div>

                          <Button
                            type="submit"
                            disabled={isSubmittingForm}
                            className="w-1/2 flex items-center justify-center relative bg-blue-500 hover:bg-blue-600 mt-6 font-semibold text-base translate-x-1/2"
                          >
                            {isSubmittingForm ? (
                              <>
                                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                Please wait...
                              </>
                            ) : (
                              " Sign In"
                            )}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                    <CardFooter>
                      {/* <Button>Save password</Button> */}
                    </CardFooter>
                    <div className="text-center pb-4 font-light flex flex-col items-center justify-center">
                      <div>Don't have any account yet?</div>
                      <Link
                        href="/register"
                        className="text-blue-500 hover:text-blue-600 font-medium"
                      >
                        Create an account &rarr;
                      </Link>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      {/* </AuroraBackground> */}
    </div>
  );
}

export default Login;
