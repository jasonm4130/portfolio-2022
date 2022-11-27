export interface MarkdownFileContent {
  title: string;
  link: string;
  excerpt: string;
  technologies?: string[];
  tags?: string[];
  date?: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  content?: string;
}
