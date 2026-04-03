import { useState } from "react";
import { blogs } from "../../data/blogData";
import FilterTabs from "../../components/FilterTabs";
import BlogList from "../../components/BlogList";

export default function Blogs() {

  const [active, setActive] = useState("all");

  return (
    <div className=" w-full">

      <h1 className=" text-3xl mt-30 px-10
      lg:text-6xl lg:mt-30 lg:px-10">BLOGS - PEDIA</h1>

      <FilterTabs active={active} setActive={setActive} />
      

      <BlogList blogs={blogs} active={active} />

    </div>
  );
}