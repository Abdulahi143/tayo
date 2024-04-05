const ContactSection = () => {
    return ( 
        <>
            <h1 className="text-center py-4 text-amber-400 text-[35px] font-bold font-montserrat leading-[56px]">
Kontakta oss
</h1>
         <section className=" py-12 lg:py-[40px] overflow-hidden relative z-10 border-[#FFC52C] border-b-[1px]">
  <div className="container">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
        <div className="bg-[#FFC52C] relative rounded-lg p-8 sm:p-12 shadow-lg">
          <form>
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
      </div>
    </div>
  </div>
</section>
        </>
       

     );
}
 
export default ContactSection;