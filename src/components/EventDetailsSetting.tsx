"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
const EventDetailsSetting = () => {
  const formSchema = z.object({
    apiKey: z.string().min(10).max(12),
    passKey: z.string().min(8).max(10),
  });
  
  const [isSubmittingForm, setisSubmittingForm] = useState(false);
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-left text-gray-800 mb-5">
        Settings
      </h2>
      {/* apikey box */}
      <div className="border rounded-md shadow-lg p-3">
        <h2>Joining Key</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="apiKey"
              render={(field) => (
                <FormItem>
                  <FormLabel>Key</FormLabel>
                  <FormControl>
                    <Input placeholder="ApiKey" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passKey"
              render={(field) => (
                <FormItem>
                  <FormLabel>PassKey</FormLabel>
                  <FormControl>
                    <Input placeholder="Passkey" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmittingForm}
              className=" flex items-center justify-end relative bg-blue-500 hover:bg-blue-600 mt-6 font-semibold text-base right-1 m-3 "
            >
              {isSubmittingForm ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                " Save"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default EventDetailsSetting;
