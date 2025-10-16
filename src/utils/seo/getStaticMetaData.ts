import { Metadata } from "next";

interface MetaData {
    title?: string;
    description?: string;
    isRobotFollow?: boolean;
    image?: string;
    url?: string;
  }
  
  const DEFAULTS = {
    title: "Brackets | Building the Future",
    description: "High-performance websites & digital experiences.",
    image: "/og-default.jpg",
    url: "https://company.com",
    isRobotFollow: true,
  };
  
  export const getStaticMetaData = (meta: Partial<MetaData> = {}): Metadata => {
    const { title, description, image, url, isRobotFollow } = {
      ...DEFAULTS,
      ...meta,
    };
  
    return {
      title,
      description,
      metadataBase: new URL(DEFAULTS.url),
  
      openGraph: {
        title,
        description,
        url,
        siteName: "Company Name",
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
        type: "website",
      },
  
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
  
      robots: {
        index: isRobotFollow,
        follow: isRobotFollow,
        googleBot: {
          index: isRobotFollow,
          follow: isRobotFollow,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
  
      icons: {
        icon: [
          { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
          { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
        shortcut: "/favicon.ico",
      },
  
      other: {
        viewport:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
    };
  };
  
  export default getStaticMetaData;
  