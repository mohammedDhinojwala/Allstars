import { useRouter } from "next/router";
import { blogs } from "../../data/blogData";

function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="p-10">

      <h1 className="text-3xl mb-5">{blog.title}</h1>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover mb-5"
      />

      <p>{blog.date}</p>

      <p className="mt-5">
        This is your blog content page...
      </p>

    </div>
  );
}

export default BlogPage;