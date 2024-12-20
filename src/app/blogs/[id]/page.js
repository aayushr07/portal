"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DOMPurify from "dompurify";
import { fetchBlogById } from "@/utils/blog";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadBlogData = async () => {
      if (id) {
        setLoading(true);
        try {
          await fetchBlogById(id, setBlog, setLoading);
        } catch (error) {
          console.error("Error fetching blog:", error);
          setError("Blog not found");
        } finally {
          setLoading(false);
        }
      }
    };
    loadBlogData();
  }, [id]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (loading) return <p>Loading...</p>;

  const sanitizedContent = DOMPurify.sanitize(blog.content).replace(
    /<\/?p>/g,
    ""
  );

  const renderFileContent = (files) => {
    return files.map((file, index) => {
      const fileExtension = file.type.split("/").pop().toLowerCase();

      if (file.type.includes("image")) {
        return (
          <img
            key={file._id}
            src={file.url}
            alt="Uploaded content"
            className="mt-4 w-96 h-auto rounded shadow cursor-pointer"
            onClick={() => setSelectedImage(file.url)}
          />
        );
      } else if (fileExtension === "pdf") {
        return (
          <div key={file._id} className="mt-4 flex flex-col items-start">
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center flex-col"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow">
                <img src="/PDF-icon.png" alt="PDF Icon" className="w-8 h-8" />
              </div>
              <span className="text-sm text-blue-400 underline mt-2">
                {file.url.split("/").pop()}
              </span>
            </a>
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center ">
      <Card className="my-4 shadow-lg bg-white text-black min-h-[50vh] min-w-[80vw]  ">
        <CardHeader className="text-2xl font-bold">{blog.title}</CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500 mb-2">
            {new Date(blog.date).toLocaleDateString()}
          </div>
          <p
            className="text-lg mb-4"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />
          {blog.files && blog.files.length > 0 && renderFileContent(blog.files)}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap space-x-2 mt-4">
              {blog.tags.map((tag, index) => (
                <span key={index} className="text-sm text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/**** Image Preview Modal ****/}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-screen-lg max-h-screen-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
