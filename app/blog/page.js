// // @flow strict

// import BlogCard from "../components/homepage/blog/blog-card";

// async function getMediumBlogs() {
//   try {
//     // Fetch from your own API route
//     const res = await fetch(
//       `${
//         process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
//       }/api/medium-posts`,
//       {
//         next: { revalidate: 3600 }, // Cache for 1 hour
//       }
//     );

//     if (!res.ok) {
//       throw new Error("Failed to fetch Medium posts");
//     }

//     const data = await res.json();

//     // Return all posts (don't filter by cover_image here since we handle it in the component)
//     return data;
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     return [];
//   }
// }

// async function page() {
//   const blogs = await getMediumBlogs();

//   return (
//     <div className="py-8">
//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
//             All Blog
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
//         {blogs.map(
//           (blog, i) => blog?.cover_image && <BlogCard blog={blog} key={i} />
//         )}
//       </div>

//       {/* Show message if no posts found */}
//       {blogs.length === 0 && (
//         <div className="flex justify-center items-center py-12">
//           <p className="text-gray-500 text-lg">No blog posts found</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default page;
