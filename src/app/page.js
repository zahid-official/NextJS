import getBlogs from "@/lib/getBlogs";
import Link from "next/link";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main className="pt-24 pb-28 max-w-screen-lg mx-auto">
      <h1 className="text-5xl font-semibold pl-8">Total Blogs: {blogs.length}</h1>

      <div className="mt-10 pl-4">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <div className="mb-5 flex items-center justify-between gap-3 border p-4 rounded-md">
              <p className="text-xl font-semibold">{blog.id}. {blog.title}</p>
              <Link href={`/blog/${blog.id}`}><button className="btn btn-neutral w-32">View Details</button></Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
