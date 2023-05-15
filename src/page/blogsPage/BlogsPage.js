import React from "react";
import RequireAuth from "../../auth/RequireAuth";
import RequireVerification from "../../auth/RequireVerification";
import ProfileAuth from "../../auth/ProfileAuth";
import AadharAuth from "../../auth/AadharAuth";
import BlogCard from "../../component/blogCard/BlogCard";

const BlogsPage = () => {
  return (
    <RequireAuth>
      <RequireVerification>
        <ProfileAuth>
          <AadharAuth>
            <section className="container mx-auto py-10 px-4">
              <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <BlogCard genre="Beach" />
                <BlogCard genre="Mountain" />
                <BlogCard genre="Forest" />
                <BlogCard genre="Lake" />
                <BlogCard genre="WaterFall" />
                <BlogCard genre="Antarctica" />
                <BlogCard genre="Iceland" />
                <BlogCard genre="Mount,Fuji" />
                <BlogCard genre="Park" />
              </div>
            </section>
          </AadharAuth>
        </ProfileAuth>
      </RequireVerification>
    </RequireAuth>
  );
};

export default BlogsPage;
