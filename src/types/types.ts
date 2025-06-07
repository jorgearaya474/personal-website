interface TechSkill {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  title: string;
  order: number;
  image: string;
  link: string;
  technologies: string[];
  description: string;
}

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

interface IconProps {
  className: string;
}

export type {
  TechSkill,
  Project,
  Post,
  ImageItem,
  ImageGalleryProps,
  IconProps,
};
