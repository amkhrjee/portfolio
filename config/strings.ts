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
  "software-engg-label": string;
  "machine-learning-label": string;
  "sort-by": string;
  latest: string;
  popularity: string;
  "tinypy-desc": string;
  "wp-desc": string;
  "pathfinder-desc": string;
  "ghlines-desc": string;
  "bytecalcweb-desc": string;
  "fontonic-desc": string;
  "ocwd-desc": string;
  "pygraphia-desc": string;
  "lipika-desc": string;
  "bmi-guesser-desc": string;
  "users-label": string;
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
    "tinypy-desc":
      "A tiny linear algebra library. Supports core matrix functionalities of NumPy, including QR decompositions, determining rank, eigenvalues etc.",
    "wp-desc":
      "Super-fast scraping and parsing library written in Rust. Made with the aim of scraping Wikipedia data for training LLMs.",
    "pathfinder-desc":
      "Visualizer for pathfinding algorithms such as Dijkstra & local beam. Written in Golang with Raylib. Got semi-viral on Reddit.",
    "fontonic-desc":
      "Browser extension for changing typography of any website. Written in TypeScript, styled with DaisyUI. No frameworks used. Cross-browser compatible.",
    "ocwd-desc":
      "CLI tool for bulk downloading course resources from MIT OpenCourseWare. Even people from MIT use this tool. Written in shell scripts. Cross-OS compatible.",
    "pygraphia-desc":
      "Python library for working with graph data structures. Made while taking Graph Theory course at university.",
    "ghlines-desc":
      "A Chrome extension that shows line counts of files in the GitHub source tree.",
    "bytecalcweb-desc":
      "A full-fledged calculator aimed towards CS students. Based on my tree-walk interpreter written in TypeScript.",
    "lipika-desc":
      "Built a GPT-2 based LLM from scratch. Pre-trained on Assamese data scraped using my tool wp on RTX 4090 for 70+ hours. Built as a university project.",
    "bmi-guesser-desc":
      "Trained a model on images for predicting BMIs using MTCNN. Built as a university project.",
    "software-engg-label": "Software Engineering",
    "sort-by": "Sort by",
    "machine-learning-label": "Machine Learning",
    latest: "Latest",
    popularity: "Popularity",
    "users-label": "users",
  },
  1: {
    "hero-hi": "নমস্কার, 🙏🏻",
    "hero-intro": "আমি অনিরুদ্ধ",
    "hero-title": "আমি সফ্টয়্যার ইঞ্জিনিয়ার এবং ডিজাইনার।",
    "hero-desc":
      "আমি একজন সদ্য কম্পিউটার বিজ্ঞান স্নাতক। ওয়েব, ডাটাবেস, ডিস্ট্রিবিউটেড সিস্টেম, ডেটা এবং এগুলো সম্বন্ধিত সবকিছুতে আমার গভীর আগ্রহ রয়েছে। আপনি আমার সমস্ত ডিটেইল দেখতে পারেন এখানে -",
    "resume-label": "রেজুমে",
    "contact-label": "যোগাযোগ করুন",
    "view-work-label": "আমার কাজ দেখুন",
    "connect-with-me-title": "আমার সাথে অনলাইনে সংযুক্ত হন",
    "outro-desc":
      "যদিও আমি খুব অনিয়মিত, আমি মাঝে মাঝে এক-আধটা ব্লগ-পোস্ট লেখার চেষ্টা করি। যে সমস্ত বই, অনলাইন কোর্স বা টিউটোরিয়াল আমার ভালো লাগে আমি সেগুলোর একটা আমার রিসোর্স পেইজে লিখে রাখি।",
    "tinypy-desc":
      "একটি ছোট লিনিয়ার অ্যালজেব্রা লাইব্রেরি। NumPy এর মূল ম্যাট্রিক্স কার্যকারিতা সমর্থন করে, যার মধ্যে QR ডিকম্পোজিশন, র‍্যাঙ্ক নির্ধারণ, আইগেনভ্যালু ইত্যাদি অন্তর্ভুক্ত।",
    "wp-desc":
      "রাস্টে লেখা একটি সুপার-দ্রুত স্ক্র্যাপিং এবং পার্সিং লাইব্রেরি। LLM-এর জন্য উইকিপিডিয়া ডেটা স্ক্র্যাপ করার লক্ষ্যে তৈরি।",
    "pathfinder-desc":
      "ডিজিকস্ট্রা এবং লোকাল বিমের মতো পথ অনুসন্ধান অ্যালগরিদমগুলির জন্য ভিজ্যুয়ালাইজার। গো-ল্যাঙ্গ এবং রেইলিব দিয়ে লেখা। রেডিটে সেমি-ভাইরাল হয়েছে।",
    "fontonic-desc":
      "যেকোনো ওয়েবসাইটের টাইপোগ্রাফি পরিবর্তনের জন্য ব্রাউজার এক্সটেনশন। টাইপস্ক্রিপ্টে লেখা এবং ডেইজি ইউআই দিয়ে স্টাইল করা হয়েছে। কোনো ফ্রেমওয়ার্ক ব্যবহার করা হয়নি। ক্রস-ব্রাউজার সামঞ্জস্যপূর্ণ।",
    "ocwd-desc":
      "MIT OpenCourseWare থেকে কোর্স রিসোর্সগুলি বাল্ক ডাউনলোড করার জন্য CLI টুল। MIT-এর লোকেরাও এই টুল ব্যবহার করে। শেল স্ক্রিপ্টে লেখা। ক্রস-ওএস সামঞ্জস্যপূর্ণ।",
    "pygraphia-desc":
      "গ্রাফ ডেটা স্ট্রাকচারের সাথে কাজ করার জন্য পাইথন লাইব্রেরি। বিশ্ববিদ্যালয়ে গ্রাফ থিওরি কোর্স করার সময় তৈরি করা হয়েছে।",
    "ghlines-desc":
      "GitHub সোর্স ট্রিতে ফাইলগুলির লাইন গণনা প্রদর্শন করার জন্য একটি ক্রোম এক্সটেনশন।",
    "bytecalcweb-desc":
      "কম্পিউটার বিজ্ঞান শিক্ষার্থীদের জন্য একটি পূর্ণাঙ্গ ক্যালকুলেটর। টাইপস্ক্রিপ্টে লেখা একটি ট্রি-ওয়াক ইন্টারপ্রেটারের উপর ভিত্তি করে।",
    "lipika-desc":
      "শূন্য থেকে একটি GPT-2 ভিত্তিক LLM তৈরি করা হয়েছে। আমার টুল wp ব্যবহার করে স্ক্র্যাপ করা অসমীয়া ডেটাতে প্রি-ট্রেইন করা হয়েছে। RTX 4090 এ ৭০+ ঘন্টা প্রশিক্ষণ। বিশ্ববিদ্যালয় প্রকল্প হিসাবে তৈরি।",
    "bmi-guesser-desc":
      "MTCNN ব্যবহার করে BMI অনুমানের জন্য ইমেজে প্রশিক্ষিত একটি মডেল। বিশ্ববিদ্যালয় প্রকল্প হিসাবে তৈরি।",
    "users-label": "ব্যবহারকারী",
    "sort-by": "সাজান",
    popularity: "জনপ্রিয়তা",
    latest: "কালানুক্রম",
    "software-engg-label": "সফ্টয়্যার ইঞ্জিনিয়ারিং",
    "machine-learning-label": "মেশিন লার্নিং",
  },
};
