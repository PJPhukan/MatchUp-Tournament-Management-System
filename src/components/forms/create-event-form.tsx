"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { useUploadFile } from "@/hooks/use-upload-file";
import { cn } from "@/lib/utils";
import { createEventSchema } from "@/schemas/event.Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FileUploader } from "../media/file-uploader";
import { UploadedFilesCard } from "../media/uploaded-files-card";
import { toast } from "sonner";
import { getErrorMessage } from "@/lib/handle-error";

const CreateEventForm = () => {
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      name: "",
      description: "",
      endDate: new Date(),
      startDate: new Date(),
      state: "",
      vill: "",
      district: "",
      poster: [],
    },
  });

  const { progresses, uploadedFiles, isUploading, onUpload } = useUploadFile("poster", { defaultUploadedFiles: [] });

  function onSubmit(data: z.infer<typeof createEventSchema>) {
    setIsSubmittingForm(true);
    toast.promise(
      onUpload(data.poster).then((data) => {
        // add your custom functionality to save data in DB.
        console.log(data);
      }),
      {
        loading: "Uploading images...",
        success: () => {
          form.reset();
          setIsSubmittingForm(false);
          return "Images uploaded";
        },
        error: (err) => {
          setIsSubmittingForm(false);
          return getErrorMessage(err);
        },
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} method="post" className="flex flex-col lg:grid lg:grid-cols-5 items-start gap-6 space-y-4">
        <div className="col-span-3 flex w-full flex-col gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full mb-2">
                <FormLabel className="text-base md:text-xl font-medium">Title</FormLabel>
                <FormControl>
                  <Input placeholder="Event title" {...field} className="text" />
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
                <FormLabel className="text-base md:text-xl font-medium">Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Event Description" {...field} rows={3} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4 flex-col md:flex-row">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="text-base md:text-xl font-medium">Start Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant={"outline"} className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                          {field.value ? format(field.value, "PPP") : <span>Select date</span>}
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
                <FormItem className="flex flex-col w-full">
                  <FormLabel className="text-base md:text-xl font-medium">End Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant={"outline"} className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                          {field.value ? format(field.value, "PPP") : <span>Select date</span>}
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
                <FormItem className="w-full">
                  <FormLabel className="text-base md:text-xl font-medium">Village</FormLabel>
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
                <FormItem className="w-full">
                  <FormLabel className="text-base md:text-xl font-medium">District</FormLabel>
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
                <FormItem className="w-full">
                  <FormLabel className="text-base md:text-xl font-medium">State</FormLabel>
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
                <FormItem className="w-full">
                  <FormLabel className="text-base md:text-xl font-medium">Pincode:</FormLabel>
                  <FormControl>
                    <Input placeholder="Pincode" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="col-span-3 lg:col-span-2 mt-[0_!important] w-full">
          <FormField
            control={form.control}
            name="poster"
            render={({ field }) => (
              <div className="space-y-6">
                <FormItem className="w-full">
                  <FormLabel>Poster</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={field.value}
                      onValueChange={field.onChange}
                      maxFileCount={1}
                      maxSize={4 * 1024 * 1024}
                      progresses={progresses}
                      // pass the onUpload function here for direct upload
                      //   onUpload={onUpload}
                      disabled={isUploading || isSubmittingForm}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                {uploadedFiles.length > 0 ? <UploadedFilesCard uploadedFiles={uploadedFiles} /> : null}
              </div>
            )}
          />
        </div>

        <div className="my-5">
          <Button type="submit" disabled={isSubmittingForm} className="bg-blue-600 ">
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
  );
};

export default CreateEventForm;
