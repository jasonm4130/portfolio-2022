export interface MarkdownFileContent {
  title: string;
  link: string;
  exerpt: string;
  technologies?: string[];
  tags?: string[];
  date?: string;
  featured?: boolean;
  content?: string;
}
