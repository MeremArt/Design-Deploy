// // app/api/medium-posts/route.js
// import Parser from "rss-parser";

// const parser = new Parser({
//   customFields: {
//     item: ["creator", "isoDate"],
//   },
// });

// function extractImageFromContent(content) {
//   const imgRegex = /<img[^>]*src="([^"]*)"[^>]*>/i;
//   const match = content.match(imgRegex);
//   return match ? match[1] : null;
// }

// function estimateReadingTime(content) {
//   const wordsPerMinute = 200;
//   const textContent = content.replace(/<[^>]*>/g, "");
//   const wordCount = textContent.split(/\s+/).length;
//   return Math.ceil(wordCount / wordsPerMinute);
// }

// function normalizeTags(categories) {
//   if (!categories) return [];
//   if (Array.isArray(categories)) return categories;
//   if (typeof categories === "string") {
//     // Handle comma-separated tags or single tag
//     return categories
//       .split(",")
//       .map((tag) => tag.trim())
//       .filter((tag) => tag.length > 0);
//   }
//   return [];
// }

// async function getMediumPosts(username) {
//   try {
//     const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);

//     return feed.items.map((item, index) => ({
//       id: index,
//       title: item.title,
//       description:
//         item.contentSnippet ||
//         item.content?.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
//       cover_image: extractImageFromContent(item.content || ""),
//       url: item.link,
//       published_at: item.isoDate || item.pubDate,
//       tags: normalizeTags(item.categories),
//       reading_time_minutes: estimateReadingTime(item.content || ""),
//       author: item.creator || item["dc:creator"],
//     }));
//   } catch (error) {
//     console.error("Error fetching Medium posts:", error);
//     return [];
//   }
// }

// export async function GET() {
//   try {
//     const posts = await getMediumPosts("ugofranklin22");
//     return Response.json(posts);
//   } catch (error) {
//     console.error("API Error:", error);
//     return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
//   }
// }
