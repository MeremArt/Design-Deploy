"use client";
// @flow strict
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";
import { BsHeartFill } from "react-icons/bs";
import { FaCommentAlt, FaClock, FaExternalLinkAlt } from "react-icons/fa";

function BlogCard({ blog }) {
  // Handle cases where blog might be null/undefined
  if (!blog) return null;

  // Check if this is a Medium post or Dev.to post
  const isMediumPost = blog.reading_time_minutes !== undefined;

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog?.cover_image || "/placeholder-blog.jpg"}
          height={1080}
          width={1920}
          alt={blog?.title || "Blog post"}
          className="h-full w-full group-hover:scale-110 transition-all duration-300 object-cover"
          onError={(e) => {
            e.target.src = "/placeholder-blog.jpg";
          }}
        />
      </div>

      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            {/* Dev.to specific metrics */}
            {!isMediumPost && blog.public_reactions_count !== undefined && (
              <p className="flex items-center gap-1">
                <BsHeartFill />
                <span>{blog.public_reactions_count}</span>
              </p>
            )}

            {!isMediumPost &&
              blog.comments_count !== undefined &&
              blog.comments_count > 0 && (
                <p className="flex items-center gap-1">
                  <FaCommentAlt />
                  <span>{blog.comments_count}</span>
                </p>
              )}

            {/* Medium specific metrics */}
            {isMediumPost && blog.reading_time_minutes && (
              <p className="flex items-center gap-1">
                <FaClock />
                <span>{blog.reading_time_minutes} min read</span>
              </p>
            )}
          </div>
        </div>

        <Link target="_blank" href={blog.url || "#"} className="group/link">
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500 line-clamp-2 group-hover/link:text-violet-500 transition-colors duration-200">
            {blog.title || "Untitled"}
          </p>
        </Link>

        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {blog.description || "No description available"}
        </p>

        {/* Tags section */}
        {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-[#16f2b3] bg-opacity-20 text-[#16f2b3] px-2 py-1 rounded-full"
              >
                {typeof tag === "string" ? tag.replace(/^#/, "") : tag}
              </span>
            ))}
            {blog.tags.length > 3 && (
              <span className="text-xs text-[#16f2b3] px-2 py-1">
                +{blog.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Footer section */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-[#1d293a]">
          {/* Author info for Medium posts */}
          {isMediumPost && blog.author && (
            <p className="text-xs text-[#16f2b3] opacity-80">
              By {blog.author}
            </p>
          )}

          {/* Read more link */}
          <Link
            target="_blank"
            href={blog.url || "#"}
            className="flex items-center gap-1 text-xs text-[#16f2b3] hover:text-violet-500 transition-colors duration-200 ml-auto"
          >
            <span>Read more</span>
            <FaExternalLinkAlt size={10} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
