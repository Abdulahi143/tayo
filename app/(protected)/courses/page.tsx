import Image from 'next/image'
import React from 'react'

const CoursesPage = () => {
  return (
    <>
      {/* Course1 */}
      <div className='space-y-16 mt-36'>
        <div className=" flex items-center">
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-3xl font-medium mb-6">Handledarskap och övningskörning</h1>
              <p className="text-xl mb-12">
Man behöver ett giltigt körkortstillstånd för att få övningsköra. Vid privat övningskörning krävs även en godkänd handledare för den specifika eleven. Både handledare och elev behöver ha gått en introduktionsutbildning om övningskörningen ska ske med personbil eller lätt lastbil (behörighet B).
              </p>
            </div>
            <div className="w-1/2 pl-16">
             <Image
                src="/images/course1.jpg"
                className="h-64 w-full object-cover rounded-xl"
                alt="Layout Image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course2 */}
      <div className="container mx-auto text-left text-white">
        <div className="flex items-center">
          <div className="w-1/2 pr-16">
           <Image
              src="/images/course2.jpg"
              className="h-64 w-full object-cover rounded-xl"
              alt="Layout Image"
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-medium mb-6">Samhällsorienterande/Integration kurser</h1>
            <p className="text-xl mb-12">
            Samhällsorienterande ämnen för grundlärarutbildningen årskurs 4-6, Historia, Religionskunskap, Samhällskunskap, Geografi
            </p>

          </div>
        </div>
      </div>

      {/* Space between courses */}
      <div className="my-8"></div>

      {/* Course3 */}
      <div className="container mx-auto text-left text-white">
        <div className="flex items-center">
          <div className="w-1/2">
            <h1 className="text-3xl font-medium mb-6">kunskapsprov</h1>
            <p className="text-xl mb-12">
            Teoriprovet är det prov som Transportstyrelsen använder sig av för att bedöma dina teoretiska trafikkunskaper. Teoriprovet kostar 325 kronor och utförs hos Trafikverket. Officiellt kallas teoriprovet för kunskapsprov. Du måste ha gjort riskettan och halkbanan för att få göra teoriprovet.
            </p>
          </div>
          <div className="w-1/2 pl-16">
           <Image
              src="/images/course3.jpg"
              className="h-64 w-full object-cover rounded-xl"
              alt="Layout Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default CoursesPage