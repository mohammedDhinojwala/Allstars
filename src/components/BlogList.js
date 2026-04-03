import BlogCard from "./BlogCard";

function BlogList({ blogs, active }) {

  const filteredBlogs =
    active === "all"
      ? blogs
      : blogs.filter(blog => blog.category === active);

  return (
    <div className="lg:grid lg:grid-cols-3   lg:mt-10 ">
      {filteredBlogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;