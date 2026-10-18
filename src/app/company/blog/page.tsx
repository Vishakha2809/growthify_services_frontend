"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  User,
  Tag,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { blogAPI, type BlogPost } from "@/services/api";

// Hardcoded featured post (fallback)
const hardcodedFeaturedPost = {
  title: "The Future of AI in Enterprise Software Development",
  excerpt:
    "Explore how artificial intelligence is transforming the way businesses build and deploy software solutions. From automated testing to intelligent code generation, AI is reshaping the development landscape.",
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=60",
  author: "Rahul Sharma",
  date: "Jan 15, 2024",
  category: "AI/ML",
  readTime: "8 min read",
};

// Hardcoded posts (fallback)
const hardcodedPosts = [
  {
    title: "10 Best Practices for Building Scalable Web Applications",
    excerpt:
      "Learn the key principles and practices for building web applications that can handle millions of users.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
    author: "Priya Patel",
    date: "Jan 12, 2024",
    category: "Web Development",
    readTime: "6 min read",
  },
  {
    title: "Mobile App Development Trends to Watch in 2024",
    excerpt:
      "Stay ahead of the curve with these emerging trends in mobile app development.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60",
    author: "Amit Kumar",
    date: "Jan 10, 2024",
    category: "App Development",
    readTime: "5 min read",
  },
  {
    title: "The Complete Guide to UI/UX Design Systems",
    excerpt:
      "Everything you need to know about creating and maintaining design systems for your organization.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=60",
    author: "Sneha Reddy",
    date: "Jan 8, 2024",
    category: "UI/UX Design",
    readTime: "10 min read",
  },
  {
    title: "How to Implement CI/CD Pipeline for Your Project",
    excerpt:
      "A step-by-step guide to setting up continuous integration and deployment for faster releases.",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop&q=60",
    author: "Vikram Singh",
    date: "Jan 5, 2024",
    category: "DevOps",
    readTime: "7 min read",
  },
  {
    title: "Introduction to Machine Learning for Business Leaders",
    excerpt:
      "A non-technical guide to understanding machine learning and its business applications.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&auto=format&fit=crop&q=60",
    author: "Rahul Sharma",
    date: "Jan 3, 2024",
    category: "AI/ML",
    readTime: "8 min read",
  },
  {
    title: "Security Best Practices for Modern Web Applications",
    excerpt:
      "Protect your applications from common vulnerabilities with these security best practices.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=60",
    author: "Priya Patel",
    date: "Dec 28, 2023",
    category: "Security",
    readTime: "9 min read",
  },
];

const categories = [
  "All",
  "Web Development",
  "App Development",
  "AI/ML",
  "UI/UX Design",
  "DevOps",
  "Security",
];

// Helper function to format date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Helper to convert category slug to display name
const categorySlugToDisplay: Record<string, string> = {
  "web-development": "Web Development",
  "app-development": "App Development",
  "ai-ml": "AI/ML",
  "ui-ux-design": "UI/UX Design",
  devops: "DevOps",
  security: "Security",
  other: "Other",
};

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [apiPosts, setApiPosts] = useState<BlogPost[]>([]);

  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Fetch blog posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch all posts
        const response = await blogAPI.getAll();

        // 🔥 ONLY THIS LINE IS IMPORTANT
        setApiPosts(response.results);

        console.log("Fetched posts from API:", allPosts);

        // Fetch featured post
        const featured = await blogAPI.getFeatured();
        if (featured.length > 0) {
          setFeaturedPost(featured[0]);
        }
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load some blog posts from server.");
        // Don't block UI, hardcoded posts will still show
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Combine API posts with hardcoded posts - FIX: Ensure apiPosts is always an array
  const allPosts = [
    ...apiPosts,
    ...hardcodedPosts.map((post, index) => ({
      id: -(index + 1), // Negative IDs for hardcoded posts
      title: post.title,
      slug: post.title.toLowerCase().replace(/\s+/g, "-"),
      excerpt: post.excerpt,
      content: post.excerpt,
      image_url: post.image,
      category: post.category
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/\//g, "-"),
      category_display: post.category,
      tags: "",
      tags_list: [],
      author_name: post.author,
      author_bio: "",
      read_time: post.readTime,
      views_count: 0,
      is_featured: false,
      is_published: true,
      published_date: post.date,
      updated_date: post.date,
    })),
  ];

  // Filter posts by category
  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter(
          (post) =>
            post.category_display?.toLowerCase() ===
              selectedCategory.toLowerCase() ||
            categorySlugToDisplay[post.category]?.toLowerCase() ===
              selectedCategory.toLowerCase(),
        );

  // Display featured post (API or hardcoded)
  const displayFeaturedPost = featuredPost || {
    ...hardcodedFeaturedPost,
    id: -1,
    slug: "ai-enterprise-software",
    content: hardcodedFeaturedPost.excerpt,
    image_url: hardcodedFeaturedPost.image,
    category: "ai-ml",
    category_display: hardcodedFeaturedPost.category,
    tags: "",
    tags_list: [],
    author_name: hardcodedFeaturedPost.author,
    author_bio: "",
    read_time: hardcodedFeaturedPost.readTime,
    views_count: 0,
    is_featured: true,
    is_published: true,
    published_date: hardcodedFeaturedPost.date,
    updated_date: hardcodedFeaturedPost.date,
  };

  return (
    <div
      className="pt-8 md:pt-10 pb-24 md:pb-32
 overflow-x-hidden w-full"
    >
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] mt-4 mb-4 sm:mb-6">
            Insights &{" "}
            <span className="bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent">
              Ideas
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#6B7280]">
            Stay updated with the latest trends, insights, and best practices in
            technology and software development.
          </p>
        </div>
      </section>

      {/* Error Message */}
      {error && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8">
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">{error}</p>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8 sm:mb-12">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                selectedCategory === category
                  ? "bg-[#6D28D9] text-white hover:bg-[#5B21B6]"
                  : "bg-[#F9FAFB] text-[#333333] hover:bg-[#E5E7EB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl hover:border-[#6D28D9] transition-all duration-300">
          <div className="grid lg:grid-cols-2">
            <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={
                  displayFeaturedPost.image_url || hardcodedFeaturedPost.image
                }
                alt={displayFeaturedPost.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#6B7280] mb-3 sm:mb-4 flex-wrap">
                <span className="bg-[#F3E8FF] text-[#6D28D9] px-3 py-1 rounded-full font-medium">
                  {displayFeaturedPost.category_display}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />{" "}
                  {displayFeaturedPost.read_time}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-3 sm:mb-4">
                {displayFeaturedPost.title}
              </h2>
              <p className="text-[#6B7280] text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                {displayFeaturedPost.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#E5E7EB] rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-[#111111] text-sm sm:text-base">
                      {displayFeaturedPost.author_name}
                    </p>
                    <p className="text-xs sm:text-sm text-[#6B7280]">
                      {typeof displayFeaturedPost.published_date === "string" &&
                      displayFeaturedPost.published_date.includes("-")
                        ? formatDate(displayFeaturedPost.published_date)
                        : displayFeaturedPost.published_date}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-[#6D28D9] font-medium hover:gap-3 transition-all text-sm sm:text-base">
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {isLoading && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12">
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-[#6D28D9] mr-3" />
            <span className="text-gray-600">Loading latest posts...</span>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-xl hover:border-[#6D28D9] transition-all duration-300 group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={
                    post.image_url ||
                    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60"
                  }
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[#6B7280] mb-2 sm:mb-3 flex-wrap">
                  <span className="bg-[#F9FAFB] px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                    {post.category_display}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" /> {post.read_time}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#111111] mb-2 sm:mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#6B7280] text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-[#E5E7EB]">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-[#6B7280] flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#6B7280] truncate">
                      {post.author_name}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#6B7280] flex-shrink-0">
                    {typeof post.published_date === "string" &&
                    post.published_date.includes("-")
                      ? formatDate(post.published_date)
                      : post.published_date}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No posts found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-[#111111] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
            Get the latest insights, tips, and trends delivered straight to your
            inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (!email) {
                alert("Please enter your email");
                return;
              }

              setIsSubscribed(!isSubscribed);
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#6D28D9] text-sm sm:text-base"
            />

            <button
              type="submit"
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all whitespace-nowrap text-sm sm:text-base
    ${
      isSubscribed
        ? "bg-red-500 hover:bg-red-600"
        : "bg-[#6D28D9] hover:bg-[#5B21B6]"
    }
  `}
            >
              {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
