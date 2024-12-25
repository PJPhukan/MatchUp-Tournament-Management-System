import CreateEventForm from "@/components/forms/create-event-form";

const Page = () => {
  return (
    <div className="w-full md:min-w-[80vw] md:max-w-[100vw] h-full">
      <div className="w-full px-2 md:px-4   min-w-[100vw] md:min-w-full">
        <h1 className="text-2xl lg:text-3xl font-bold ">Create Event</h1>
        <p className="mb-2 md:mb-3 text-gray-400">Create your event and manage it in an efficent way</p>

        <CreateEventForm />
      </div>
    </div>
  );
};

export default Page;
