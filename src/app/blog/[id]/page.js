import getSingleBlog from "@/lib/getSingleBlog";
import Link from "next/link";


// dynamic metaData
export async function generateMetadata({ params }){
  const { id } = params;
  const blog = await getSingleBlog(id);
  return {
    title: `Nextify | Blog-${blog.id}`,
    description: `${blog.body}`
  }
}

const Blog = async ({ params }) => {
  const { id } = params;
  const blog = await getSingleBlog(id);


  return (
    <div className="max-w-lg mx-auto min-h-[85vh] flex justify-center items-center">
      <div>
        <h1 className="text-5xl font-bold underline pl-5">Blog-{blog.id}</h1>

        <div className="card bg-base-100 mt-10  border">
          <div className="card-body">
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="py-4">{blog.body}</p>
            <div className="card-actions justify-end">
              <Link href="/">
                <button className="btn btn-neutral">Back Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
