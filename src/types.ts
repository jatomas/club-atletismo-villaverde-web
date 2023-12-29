export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface PatrocinadorItem {
  image: ImageMetadata;
  title: string;
  description: string;
  url: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
  target: string;
}

export interface NavItem {
  title: string;
  url: string;
  target: string;
}
