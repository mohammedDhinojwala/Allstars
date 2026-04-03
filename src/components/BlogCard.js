import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`}>
    <div className="border-t-2 border-b-2 border-r-2 h-[70vh] px-5 py-10 flex flex-col justify-around gap-3  
    lg:border-t-2 lg:border-b-2 lg:border-r-2 lg:h-[60vh] lg:p-5 lg:flex lg:flex-col lg:justify-around lg:gap-3 ">
      {/* <Image className="bg-pink-500 flex justify-center" src={blog.image} width={200} height={250} alt={blog.title} /> */}
      
      <div className="blog-img-box w-[100%] h-[50%]  flex justify-center  " >
        <img className="bg-gray-200 " src={blog.image}  alt={blog.title} />
      </div>
      <h2 className="  text-[1.3rem]">{blog.title}</h2>
      <p className="  text-[1rem]">{blog.description}</p>
      <p className="  text-[0.9rem]">{blog.date}</p>
    </div>
    </Link>
  );
}

export default BlogCard;