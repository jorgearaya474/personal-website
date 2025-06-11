interface TechSkill {
  name: string;
  icon: React.ReactNode;
}

interface WorkProps {
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

interface ToolProps {
  title: string;
  url: string;
  image: string;
  description: string;
}

export type {
  TechSkill,
  WorkProps,
  Post,
  ImageItem,
  ImageGalleryProps,
  IconProps,
  ToolProps,
};
