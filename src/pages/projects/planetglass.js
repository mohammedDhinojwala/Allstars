import React from 'react'


function Planetglass() {
  return (
    <div>
      <div className="projectMain w-[100%] h-auto bg-[#ffffff]">

        

        <div className="projectHeroPhoto-DescriptionMain h-[130vh] w-[100vw] flex flex-col  gap-1 !px-3
        lg:!h-[90vh]  lg:!w-[100vw] lg:!flex lg:!flex-wrap-reverse lg:gap-1 lg:!px-4">

          <div className="projectPhotoBox w-[100%] h-[70%] flex justify-center items-center bg-red-700 rounded-md
          lg:!w-[50%] lg:!h-[100%] lg:flex lg:justify-center lg:items-center  lg:rounded-md">
            <img 
              className=" bg-amber-800 h-[100%] w-[100%] object-cover   rounded-md" 
              src="/assets/images/project1.jpg"
              alt="" 
            />
          </div>

          <div className="projectHeroDescriptionBox bg-amber-0 h-[30%] w-[100%] flex flex-col items-start justify-between !py-2  bg-amber-0
          lg:!h-[100%] lg:!w-[50%] lg:flex lg:flex-col lg:items-start lg:!justify-start lg:gap-15 lg:!py-2  lg:bg-amber-0">

            <div className="projectTitlebox flex flex-col gap-0.5">

              <div className="projectDate text-[1rem] 
                              lg:!text-[0.9rem]  ">2025</div>
              <div className="projectTitle !pr-30  
                              lg:!pr-100  "> 
                <h1 className='text-[1.4rem] 
                                lg:!text-[1.6rem]   '>Pep Bestard | Visual Identity</h1> 
                </div>

            </div>

            <div className="projectDescriptionBox  bg-amber-0 h-auto  !pr-30 
                             lg:!h-[60vh] lg:!pr-100 ">
              <p className='text-[0.85rem]
                              lg:!text-[1rem]  '>
                Visual identity for photographer Pep Bestard, based in Mallorca. This project focuses on building a bold, cinematic and minimal brand expression aligned with his narrative style and artistic vision. This visual identity for the photographer was designed to support a timeless, emotional and editorial photographic approach
              </p>

            </div>

            <div className="projectPillBox flex gap-2.5">
              <div className="projectPill bg-amber-200 !px-3 !py-0.5 flex justify-center items-center rounded-md text-[0.8rem]">Branding</div>
              <div className="projectPill bg-pink-200 !px-3 !py-0.5 flex justify-center items-center rounded-md text-[0.8rem]">Visual Identity</div>
              <div className="projectPill bg-green-200 !px-3 !py-0.5 flex justify-center items-center rounded-md text-[0.8rem]">Graphic Design</div> 
            </div>
            
          </div>

        </div>


          <div className="projectImages  h-auto w-[100vw] flex flex-col gap-4 !px-2 !py-4
          lg:!h-auto lg:!w-[100vw] lg:!flex lg:!flex-col lg:items-center lg:gap-4 lg:!px-4 lg:!py-3">

              <div className="imgblock1 h-[26vh] w-[100%] bg-amber-0 flex gap-3 
                lg:!h-[70vh] lg:!w-[65%]  lg:!flex lg:!gap-3">

                <div className="img1 bg-yellow-300 w-[50%] h-[100%]  rounded-md">
                  <img className='h-[100%] w-[100%] object-cover rounded-md' src="/assets/images/project2.png" alt="" />
                </div>
                
                <div className="img1 bg-red-700 w-[50%] h-[100%] rounded-md">
                  <img className='h-[100%] w-[100%] object-cover rounded-md' src="/assets/images/project3.png" alt="" />
                </div>

              </div>

              <div className="imgblock2 h-[66vh] w-[100%] bg-amber-0 ">
                      <div className="img1 bg-emerald-300 w-[100%] h-[100%] rounded-md">
                  <img className='h-[100%] w-[100%] object-cover rounded-md'  src="/assets/images/project6.png" alt="" />
                </div>
              </div>

              <div className="imgblock h-[26vh] w-[100%] bg-amber-0 flex gap-3 
              lg:!h-[80vh] lg:!w-[100%]    lg:!flex lg:!gap-3 ">
                <div className="img1 bg-blue-300 w-[50%] h-[100%] rounded-md">
                  <img className='h-[100%] w-[100%] object-cover rounded-md' src="/assets/images/project4.png" alt="" />
                </div>
                
                <div className="img1 bg-red-300 w-[50%] h-[100%] rounded-md">
                  <img className='h-[100%] w-[100%] object-cover rounded-md' src="/assets/images/project5.png" alt="" />
                </div>
              </div>


              <div className="imgblock">

              </div>
          </div>

      </div>

    </div>
  )
}

export default Planetglass
