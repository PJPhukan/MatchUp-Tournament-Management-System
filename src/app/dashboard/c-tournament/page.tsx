"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { CreateEventSchema } from "@/schemas/event.Schema";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

const page = () => {
  const [isSubmittingForm, setisSubmittingForm] = useState(false);
  const router = useRouter();

  // type CreateEventForm = z.infer<typeof CreateEventSchema>;
  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors },
  // } = useForm<CreateEventForm>({
  //   resolver: zodResolver(CreateEventSchema),
  // });

  // const onSubmit = (data: CreateEventForm) => {
  //   console.log("Form Data:", data);
  // };

  //zod implementation
  const form = useForm<z.infer<typeof CreateEventSchema>>({
    resolver: zodResolver(CreateEventSchema),
  });

  const onSubmit = async (data: z.infer<typeof CreateEventSchema>) => {
    setisSubmittingForm(true);

    // TODO: New
    try {
      const file = data.poster[0]; // Assuming `poster` is a FileList
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64String = reader.result as string;
        const response = await axios.post(`/api/c-event`, {
          ...data,
          poster: base64String, // Send Base64 string to the server
        });

        toast({
          title: "Success",
          description: response.data.message,
        });
      };

      reader.onerror = () => {
        toast({
          title: "Error",
          description: "Failed to read poster file.",
          variant: "destructive",
        });
      };

      reader.readAsDataURL(file);
    } catch (err) {
      console.error("Error creating event:", err);

      toast({
        title: "Error",
        description: "Failed to Create Event",
        variant: "destructive",
      });
    } finally {
      setisSubmittingForm(false);
    }

    // try {
    //   console.log(data);
    //   const response = await axios.post(`/api/c-event`, data);
    //   toast({
    //     title: "Success",
    //     description: response.data.message,
    //   });
    //   console.log("Response: " + response.data);
    //   // router.replace(`/verify-user/${data.username}`);
    // } catch (err) {
    //   //write catch block
    //   console.log("Print create tournament error", err); //TODO: remove this line

    //   toast({
    //     title: "Error",
    //     description: "Failed to Create Event",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setisSubmittingForm(false);
    // }
  };

  return (
    <div className="w-full md:min-w-[80vw] md:max-w-[100vw] h-full">
      <div className="w-full px-2 md:px-4   min-w-[100vw] md:min-w-full">
        <h1 className="text-2xl lg:text-3xl font-bold ">Create Event</h1>
        <p className="mb-2 md:mb-3 text-gray-400">
          Create your event and manage it in an efficent way
        </p>


      



















       <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 mt-1"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full mb-2">
                  <FormLabel className="text-base md:text-xl font-medium">
                    Title
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Event title"
                      {...field}
                      className="text"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base md:text-xl font-medium">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Event Description"
                      {...field}
                      type="textarea"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-2 flex-col md:flex-row">
         
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-base md:text-xl font-medium">
                      Start Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          // disabled={(date: Date) =>
                          //   date > new Date() || date < new Date("1900-01-01")
                          // }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

          
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col ">
                    <FormLabel className="text-base md:text-xl font-medium">
                      End Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          // disabled={(date: Date) =>
                          //   date > new Date() || date < new Date("1900-01-01")
                          // }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
        
              <FormField
                control={form.control}
                name="vill"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-xl font-medium">
                      Village
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Village" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
           
              <FormField
                control={form.control}
                name="district"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-xl font-medium">
                      District
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="District" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-xl font-medium">
                      State
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  // <FormItem className="flex items-center gap-2">
                  <FormItem>
                    <FormLabel className="text-base md:text-xl font-medium">
                      Pincode:
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Pincode" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
         

            <FormField
              control={form.control}
              name="poster"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base md:text-xl font-medium">
                    Poster
                  </FormLabel>
                  <FormControl>
                    <Input type="file" accept="image/*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="my-5">
              <Button
                type="submit"
                disabled={isSubmittingForm}
                className="bg-blue-600 "
              >
                {isSubmittingForm ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  " Create Event"
                )}
              </Button>
            </div>
          </form>
        </Form> 
      </div>
    </div>
  );
};

export default page;
