"use client";

import Image from "next/image";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Simulating form validation
    // Add your own form validation logic here
    const isFormValid = true; // Example: replace this with your validation logic
    if (isFormValid) {
      setSubmitted(true);
    }
  };

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
              <h2 className="
                text-white
                mb-6
                uppercase
                font-bold
                text-[32px]
                sm:text-[40px]
                lg:text-[36px]
                xl:text-[40px]
              ">
                Fråga eller dela dina tankar
              </h2>
              <p className="text-base text-white leading-relaxed mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eius tempor incididunt ut labore et dolore magna aliqua. Ut
                enim adiqua minim veniam quis nostrud exercitation ullamco
              </p>
            </div>
          </div>

          <div className={`group w-full lg:w-1/2 xl:w-5/12 px-4 ${submitted ? 'transform:rotateY(180deg)' : ''}`}>
            <div className="relative  transition-all duration-500 transform-style:preserve-3d group-hover:transform:rotateY(180deg)">
              {!submitted ? (
                <div className="bg-[#FFC52C] rounded-lg p-8 sm:p-12 shadow-lg">

<form onSubmit={handleSubmit} >
                   <div className="mb-6">
                      <input
                        type="text"
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
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="email"
                        placeholder="E-postadress"
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
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="telefonnummer"
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
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        rows={6}
                        placeholder="meddelanden"
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
                  focus:border-primary
                  "
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="
                  w-full
                  text-black
                  bg-blue-500
                  rounded
                  border border-primary
                  p-3
                  transition
                  hover:bg-opacity-90
                  "
                      >
                        Skicka meddelandet
                      </button>
                    </div>
                </form>
                </div>
                
              ) : (
                <div className="relative  inset-0 h-full w-full rounded-sm bg-[#010922] px-12 text-center text-slate-200 transform:rotateY(180deg) backface-visibility:hidden">
                   <div
                      id="card"
                      className="animated fadeIn mx-auto mt-18 w-full text-center font-sans"
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
                        Tack för ditt meddelande. Vi återkommer så snart som möjligt.
                          <br />
                          {''} <br />
                          👋 <span className="text-blue-500 font-bold">Tayo Förening</span>
                        </p>
                      </div>
                    </div>
                </div>
              )}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  </>
  );
};

export default ContactSection;
