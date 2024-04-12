"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoIosSend } from "react-icons/io";
import { toast } from "sonner";

import { useEffect, useState } from "react";

import { z } from "zod";
import { ContactFormSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { addEntry, sendEmail } from "@/app/api/form/actions";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const FormDataSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().email().min(1, "Email is required."),
  phoneNumber: z.string().regex(phoneRegex, "Invalid Number."),
  message: z
    .string()
    .min(6, {
      message: "Message is required and must be at least 6 characters.",
    }),
});

type ContactFormInputs = z.infer<typeof FormDataSchema>;

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(FormDataSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Meddelande har skickats ✅");
      reset();
      return;
    }
    console.log(result?.error)
    toast.error("something went wrong");
  };

  const [submitted, setSubmitted] = useState(false);



  return (
    <>
      <h1 className="text-center py-4 text-amber-400 text-[35px] font-bold font-montserrat leading-[56px]">
        Kontakta oss
      </h1>

      <section className="py-12 lg:py-[40px] overflow-hidden relative z-10 border-[#FFC52C] border-b-[1px]">
        <div className="container mb-12">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-base text-[#FFC52C] font-semibold">
                  Kontakta oss
                </span>
                <h2
                  className="
                  text-white
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                "
                >
                  Fråga eller dela dina tankar
                </h2>
                <p className="text-base text-white leading-relaxed mb-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
              </div>
            </div>

            <div className="group w-full lg:w-1/2 xl:w-5/12 px-4">
              <div
                className={`relative transition-all duration-500 transform-style-preserve-3d ${
                  submitted ? "rotateY-180" : ""
                }`}
              >
                  <div className="bg-[#FFC52C] rounded-lg p-8 sm:p-12 shadow-lg">
                    <form onSubmit={handleSubmit(processForm)}>
                      <div className="mb-4">
                        <Input
                          placeholder="Namn"
                          className="
                          w-full
                          rounded
                          py-3
                          px-[14px]
                          text-body-color text-base
                          border border-[f0f0f0]
                          outline-none
                          focus-visible:shadow-none
                          focus:border-primary
                          "
                          {...register("name")}
                        />
                        {errors.name?.message && (
                          <p className="text-sm text-black mt-2 ">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-4">
                        <Input
                          placeholder="Email"
                          type="email"
                          className="
                          w-full
                          rounded
                          py-3
                          px-[14px]
                          text-body-color text-base
                          border border-[f0f0f0]
                          outline-none
                          focus-visible:shadow-none
                          focus:border-primary
                          "
                          {...register("email")}
                        />
                      </div>
                      {errors.email?.message && (
                        <p className="text-sm text-black mb-4">
                          {errors.email?.message}
                        </p>
                      )}
                      <div className="mb-4">
                        <Input
                          placeholder="Telefonnummer"
                          type="tel"
                          className="
                          w-full
                          rounded
                          py-3
                          px-[14px]
                          text-body-color text-base
                          border border-[f0f0f0]
                          outline-none
                          focus-visible:shadow-none
                          focus:border-primary
                          "
                          {...register("phoneNumber")}
                        />
                        {errors.phoneNumber?.message && (
                          <p className="text-sm text-black mt-2 ">
                            {errors.phoneNumber.message}
                          </p>
                        )}
                      </div>
                      <div className="mb-4">
                        <Textarea
                          placeholder="Meddelande"
                          className="
                          w-full
                          rounded
                          py-3
                          px-[14px]
                          text-body-color text-base
                          border border-[f0f0f0]
                          resize-none
                          outline-none
                          focus-visible:shadow-none
                          focus:border-primary grid gap-1.5
                          "
                          {...register("message")}
                        />
                        {errors.message?.message && (
                          <p className="text-sm mt-2  text-black">
                            {errors.message.message}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="
                          flex items-center justify-center
                            w-full
                            text-black
                            bg-blue-500
                            rounded
                            border border-primary
                            p-3
                            transition
                            hover:bg-opacity-90
                            "
                            disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Skickar...' : 'Skicka meddelandet'}
                        <IoIosSend className="ml-2" />
                      </button>
                    </form>
                  </div>
                  {/* <div className="absolute inset-0 h-full w-full rounded-sm bg-[#010922] px-12 text-center text-slate-200 transform duration-2000 rotateY-180 backface-visibility-hidden">
                    <div
                      id="card"
                      className="animated rotateY-180 mx-auto mt-18 w-full text-center font-sans"
                    >
                      <div
                        id="upper-side"
                        className="py-8 bg-green-500 text-white rounded-t-lg"
                      >
                        <svg
                          className="mx-auto mt-4"
                          width={64}
                          height={64}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="#fff"
                            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                          />
                        </svg>

                        <h3
                          id="status"
                          className="text-2xl font-bold font-sans tracking-wider uppercase mt-1"
                        >
                          Skickat
                        </h3>
                      </div>
                      <div
                        id="lower-side z-30"
                        className="py-8 px-4 bg-white rounded-b-lg"
                      >
                        <p id="message" className="text-xl text-gray-600">
                          Tack för ditt meddelande. Vi återkommer så snart som
                          möjligt.
                          <br />
                          <br />
                          👋{" "}
                          <span className="text-blue-500 font-bold">
                            Tayo Förening
                          </span>
                        </p>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
