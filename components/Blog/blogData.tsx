import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Starting Your Business: Legal Structures Explained",
    paragraph:
      "Explore the differences between sole proprietorships, partnerships, LLCs, and corporations to choose the best fit for your new business.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Common Tax Filing Mistakes and How to Avoid Them",
    paragraph:
      "Avoid costly errors on your tax return with these tips on how to prevent common filing mistakes.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Understanding Tax Deductions",
    paragraph:
      "Discover the various tax deductions available to individuals and businesses, and learn how to maximize your savings.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
