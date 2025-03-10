import { Language } from "./definitions";

type Translation = {
  "hero-hi": string;
  "hero-intro": string;
  "hero-title": string;
  "hero-desc": string;
  "resume-label": string;
  "contact-label": string;
  "view-work-label": string;
  "connect-with-me-title": string;
  "outro-desc": string;
};

export const strings: Record<Language, Translation> = {
  0: {
    "hero-hi": "Hi,👋🏻",
    "hero-intro": "I'm Aniruddha.",
    "hero-title": "I'm a _software engineer_ with an eye for design.",
    "hero-desc":
      "I'm a fresh CS graduate with deep interests in web, databases, distributed systems, data and everything in-between. You can view my",
    "resume-label": "resume",
    "contact-label": "Contact me",
    "view-work-label": "View my work",
    "connect-with-me-title": "Connect with me",
    "outro-desc":
      "Although extremely irregular, I try to write a blog post every once in a while. I also maintain a collection of helpful learning resources.",
  },
  1: {
    "hero-hi": "নমস্কার,👋🏻",
    "hero-intro": "আমি অনিরুদ্ধ",
    "hero-title": "আমি *সফ্টয়্যার ইঞ্জিনিয়ার* এবং ডিজাইনার।",
    "hero-desc":
      "আমি একজন সদ্য কম্পিউটার বিজ্ঞান স্নাতক। ওয়েব, ডাটাবেস, ডিস্ট্রিবিউটেড সিস্টেম, ডেটা এবং এগুলো সম্বন্ধিত সবকিছুতে আমার গভীর আগ্রহ রয়েছে। আপনি আমার সমস্ত ডিটেইল দেখতে পারেন এখানে -",
    "resume-label": "রেজুমে",
    "contact-label": "যোগাযোগ করুন",
    "view-work-label": "আমার কাজ দেখুন",
    "connect-with-me-title": "আমার সাথে অনলাইনে সংযুক্ত হন",
    "outro-desc":
      "যদিও আমি খুব অনিয়মিত, আমি মাঝে মাঝে এক-আধটা ব্লগ-পোস্ট লেখার চেষ্টা করি। যে সমস্ত বই, অনলাইন কোর্স বা টিউটোরিয়াল আমার ভালো লাগে আমি সেগুলোর একটা আমার রিসোর্স পেইজে লিখে রাখি।",
  },
};
