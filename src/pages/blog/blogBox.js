import React, { useState } from 'react'

// Import your components
import Genre1 from '../../pages/blog/genre/genre1';


function BlogBox() {

  // Which genre is selected?
  const [activeGenre, setActiveGenre] = useState("development")

  // Function to render the correct component
  const renderGenre = () => {
    if (activeGenre === "development") return <Genre1 />
    // if (activeGenre === "designing") return <Genre2 />
    // if (activeGenre === "seo") return <Genre3 />
    // if (activeGenre === "marketing") return <Genre4 />
  }

  return (
    <div className="blogMain bg-white-300 h-auto w-[100vw]">

      {/* Genre Headings */}
      <div className="blogHeadings h-[10vh] w-[100vw] flex justify-center items-center !mt-20
                                  lg:h-[10vh] lg:w-[100vw] lg:flex lg:justify-center lg:items-center">
        <ul className="flex h-full w-[100%] justify-around items-center  text-black
                        lg:h-full lg:!w-[30%] lg:justify-between lg:items-center  lg:text-black">
        
        
        <li onClick={() => setActiveGenre("development")} className=" text-[0.8rem]  cursor-pointer
                                                                      lg:!text-[0.9rem]">
            Blogs
          </li>

          {/* <li onClick={() => setActiveGenre("designing")} className=" text-[0.8rem]  cursor-pointer
                                                                        lg:!text-[0.9rem]">
            Designing
          </li> */}


          {/* <li onClick={() => setActiveGenre("seo")} className=" text-[0.8rem]  cursor-pointer
                                                                        lg:!text-[0.9rem]">
            Seo
          </li> */}

          {/* <li onClick={() => setActiveGenre("marketing")} className=" text-[0.8rem]  cursor-pointer
                                                                        lg:!text-[0.9rem]">
            Digital Marketing
          </li> */}
          
        </ul>
      </div>

      {/* Render the correct genre component */}
      {renderGenre()}

    </div>
  )
}

export default BlogBox