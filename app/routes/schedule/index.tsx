import { render } from "@react-email/components";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, json, useActionData } from "@remix-run/react";
import CleaningSubmissionTemplate from "emails";
import { ArrowBigRight, ArrowLeft, MoveRight } from "lucide-react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";

import Select from "react-tailwindcss-select";
import { Option } from "react-tailwindcss-select/dist/components/type";
import { sendEmail } from "~/lib/resendUtil.server";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";

const options = [
  { value: "power-washing", label: "Power Washing" },
  { value: "gutter-cleaning", label: "Gutter Cleaning" },
  { value: "window-washing", label: "Window Washing" },
  { value: "housekeeping", label: "Housekeeping" },
  { value: "trash-removal", label: "Trash Removal" },
  { value: "pre-construction", label: "Pre-Construction Cleanup" },
  { value: "post-construction", label: "Post-Construction Cleanup" },
];

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const fullname = formData.get("name")?.toString();
  const phone = formData.get("phone")?.toString();
  const email = formData.get("email")?.toString();
  const address = formData.get("address")?.toString();
  const comments = formData.get("comments")?.toString();
  const services = formData.getAll("service");
  const date = formData.get("date")?.toString();
  const honeypot = formData.get("cleanings-done")?.toString();

  if (honeypot) {
    return json(
      {
        message: "There was a problem submitting the form try again later.",
        success: false,
      },
      { status: 400 }
    );
  }

  if (
    !address ||
    !comments ||
    !date ||
    !email ||
    !fullname ||
    !phone ||
    !services
  ) {
    return json({ message: "Please fill in all fields.", success: false });
  }

  const submissionTemplate = render(
    <CleaningSubmissionTemplate
      contactInfo={{
        address,
        comments,
        date,
        email,
        fullname,
        phone,
        services,
      }}
    />
  );

  const { success, message } = await sendEmail(fullname, submissionTemplate);

  return json({ success, message }, { status: success ? 200 : 500 });
};

const ScheduleRoute = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const actionData = useActionData<typeof action>();

  const getLastDateOfYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    return new Date(year + 1, 11, 31);
  };

  const handleChange = (value: any) => {
    setSelectedServices(value);
  };

  useEffect(() => {
    if (actionData) {
      console.log(actionData.message);
      toast(actionData.message);
    }
  }, [actionData]);

  return (
    <>
      <div className="max-w-5xl mx-auto my-2 md:my-12 rounded-xl bg-gray-50 p-6 md:p-24">
        <Form className="flex flex-col gap-6" method="POST">
          <div className="inline-flex">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 ring-1 ring-gray-900 px-2 py-1 rounded"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back To Home</span>
            </Link>
          </div>

          <h1 className="text-3xl mt-12 font-bold">
            Schedule A Cleaning Today!
          </h1>
          <p className="text-xl text-gray-600">
            Discover the difference with Skyview Cleaning. Our professional team
            provides top-notch cleaning services tailored to your needs. Whether
            it's a deep clean or regular maintenance, we ensure your space is
            spotless and inviting. Don't wait—schedule your cleaning today and
            enjoy a cleaner, healthier environment.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="services">
                Which services are you interested in?*
              </label>
              <Select
                isMultiple
                classNames={{
                  menuButton: (value?: { isDisabled?: boolean }) =>
                    "flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-teal-400 focus:ring focus:ring-teal-400/20 rounded-xl bg-white flex items-between py-1 px-4",
                  tagItem: (value?: { item?: Option; isDisabled?: boolean }) =>
                    "bg-gray-200 border rounded-md flex space-x-1 pl-1",
                  tagItemIconContainer:
                    "flex items-center px-1 cursor-pointer rounded-r-md hover:bg-red-200 hover:text-red-600",
                }}
                primaryColor="teal"
                value={selectedServices}
                onChange={handleChange}
                options={options}
              />
            </div>
            <div className="col-span-2 md:col-span-1 ">
              <label htmlFor="name">Full Name</label>
              <input
                name="name"
                id="name"
                type="text"
                className="flex w-full py-2 px-4 text-gray-500 border border-gray-300 rounded-xl shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20"
              />
            </div>
            <div className="col-span-2 md:col-span-1 ">
              <label htmlFor="name">Email</label>
              <input
                name="email"
                id="email"
                type="text"
                className="flex w-full py-2 px-4 text-gray-500 border border-gray-300 rounded-xl shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20"
              />
            </div>
            <div className="col-span-2 md:col-span-1 ">
              <label htmlFor="name">Phone Number</label>
              <input
                name="phone"
                id="phone"
                type="text"
                className="flex w-full py-2 px-4 text-gray-500 border border-gray-300 rounded-xl shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20"
              />
            </div>
            <div className="col-span-2 md:col-span-1 ">
              <label htmlFor="name">Address</label>
              <input
                name="address"
                id="address"
                type="text"
                className="flex w-full py-2 px-4 text-gray-500 border border-gray-300 rounded-xl shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="name">Any Other Comments</label>
              <textarea
                name="comments"
                id="comments"
                className="flex w-full max-h-[10rem] py-2 px-4 text-gray-500 border border-gray-300 rounded-xl shadow-sm transition-all duration-300 focus:outline-none bg-white hover:border-gray-400 focus:border-cyan-500 focus:ring focus:ring-cyan-500/20"
              />
            </div>

            <div className="col-span-2">
              <Calendar
                minDate={new Date()}
                maxDate={getLastDateOfYear()}
                className="rounded-xl"
                value={selectedDate}
                onChange={(val) => setSelectedDate(val as Date)}
              />
            </div>
          </div>
          <div className="w-full md:w-auto self-end">
            <button
              type="submit"
              className="w-full mt-2 md:mt-6 px-4 py-2 bg-teal-400 rounded-xl flex items-center justify-center transition-colors font-semibold hover:bg-teal-600"
            >
              <span>Schedule Your Cleaning</span>
              <MoveRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          {selectedServices.map((service: (typeof options)[0]) => (
            <input
              readOnly
              key={service?.value}
              hidden
              value={service?.label}
              name="service"
            />
          ))}
          <input readOnly hidden value={selectedDate?.toString()} name="date" />
          <input readOnly hidden name="cleanings-done" />
        </Form>
      </div>

      <ToastContainer />
    </>
  );
};

export default ScheduleRoute;
