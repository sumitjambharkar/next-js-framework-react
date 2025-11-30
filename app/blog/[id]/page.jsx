import { useParams } from "react-router-dom";

export default function BlogPostPage() {
  const { id } = useParams();

  return (
    <div className="p-4 mt-80">
      <h1 className="text-2xl font-bold">Blog Post ID: {id}</h1>
    </div>
  );
}
