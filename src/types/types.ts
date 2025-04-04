interface HeroSectionProps {
  heading: string;
  className: string;
}

interface CtaButtonProps {
  href: string;
  text: string;
  target?: "_blank" | "_self";
  title: string;
  className: string;
}

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

export type {
  HeroSectionProps,
  CtaButtonProps,
  TechSkill,
  Project,
  Post,
  ImageItem,
  ImageGalleryProps,
};
