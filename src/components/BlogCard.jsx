
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <Link to={`/post/${post.id}`} className="block rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition">
      <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
        <p className="text-sm mt-2 text-gray-500">By {post.author}</p>
      </div>
    </Link>
  );
}
