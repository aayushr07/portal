/*'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import heroImg from "@/assets/EveHero.png";
import { fetchAllBlogs, createBlog, updateBlog } from "@/utils/blog";
import Heading from "@/components/ui/heading";
import Image from "next/image";
import BlogList from "./BlogList";
import BlogCard from "./BlogCard";

export default function BlogPage() {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const router = useRouter(); 

    useEffect(() => {
        const loadBlogs = async () => {
            setLoading(true);
            try {
                await fetchAllBlogs(setBlogs, setLoading);
            } catch (error) {
                console.error("Error fetching blogs:", error);
                alert("Failed to load blogs. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        loadBlogs();
    }, []);

    const handleViewMore = (blog) => {
        router.push(`/blogs/${blog.id}`); // Navigate 
    };

    const handleEdit = (blog) => {
        if (isAdmin) setEditingBlog(blog);
        else alert("Only admin can edit blog");
    };

    return (

        <>
            <section className=" bg-contain pt-5 md:py-10">
                <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                    <div className="flex flex-col justify-center gap-8">
                        <h1 className="font-bold text-6xl">

                            Stay Informed, Stay Ahead: Notices, Updates, Research Paper!                    </h1>
                        <p className="text-lg md:text-xl">

                            Your one-stop platform for the latest announcements, groundbreaking research papers, and news updates. Join us to keep informed and stay at the forefront of innovation and discovery!
                        </p>
                        <div className="flex gap-4 items-center justify-between">
                            <BlogList />
                        </div>
                    </div>

                    <Image
                        src={heroImg}
                        alt="hero"
                        width={1000}
                        height={1000}
                        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                    />
                </div>
            </section>

            <section
                id="events"
                className="wrapper my-8 flex flex-col gap-8 md:gap-12">
                <div className="grid items-center justify-center">
                    <Heading heading={"Recent Blogs"} />
                </div>
            </section>
            <div className="container mx-auto px-4">
                <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            {blogs.length > 0 ? (
                                blogs.map((blog) =>
                                    blog ? (
                                        <BlogCard
                                            key={blog.id} // Safe access to id
                                            blog={blog}
                                            onViewMore={() => handleViewMore(blog)}
                                            onEdit={() => handleEdit(blog)}
                                        />
                                    ) : null
                                )
                            ) : (
                                <p>No blogs available.</p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>

    );
}
*/

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import heroImg from "@/assets/EveHero.png";
import { fetchAllBlogs, updateBlog } from "@/utils/blog"; // Import updateBlog
import Heading from "@/components/ui/heading";
import Image from "next/image";
import BlogList from "./BlogList";
import BlogCard from "./BlogCard";

export default function BlogPage() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null); // Manage editingBlog state here
  const router = useRouter();

  useEffect(() => {
    const loadBlogs = async () => {
      setLoading(true);
      try {
        await fetchAllBlogs(setBlogs, setLoading);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        alert("Failed to load blogs. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  const handleViewMore = (blog) => {
    router.push(`/blogs/${blog.id}`);
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
  };

  const handleSave = async (updatedBlog) => {
    try {
      const updatedBlogs = blogs.map((b) =>
        b.id === updatedBlog.id ? updatedBlog : b
      );
      setBlogs(updatedBlogs);
      setEditingBlog(null);
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog. Please try again.");
    }
  };

  const handleCancelEdit = () => {
    setEditingBlog(null);
  };

  return (
    <>
      <section className=" bg-contain pt-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-6xl">
              Stay Informed, Stay Ahead: Notices, Updates, Research Paper!{" "}
            </h1>
            <p className="text-lg md:text-xl">
              Your one-stop platform for the latest announcements,
              groundbreaking research papers, and news updates. Join us to keep
              informed and stay at the forefront of innovation and discovery!
            </p>
            <div className="flex gap-4 items-center justify-between">
              {/* <BlogList /> */}
              <BlogList
                editingBlog={editingBlog}
                onSave={handleSave}
                onCancel={handleCancelEdit}
              />
            </div>
          </div>

          <Image
            src={heroImg}
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <div className="grid items-center justify-center">
          <Heading heading={"Recent Blogs"} />
        </div>
      </section>
      <div className="container mx-auto px-4">
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {blogs.length > 0 ? (
                blogs.map((blog) =>
                  blog ? (
                    <BlogCard
                      key={blog.id}
                      blog={blog}
                      onViewMore={() => handleViewMore(blog)}
                      onEdit={() => handleEdit(blog)}
                    />
                  ) : null
                )
              ) : (
                <p>No blogs available.</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
