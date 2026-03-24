export interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
}

export interface NavbarLink {
  name: string;
  path: string;
}

export interface FooterLink {
  name: string;
  url: string;
}