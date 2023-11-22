import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tinta Negra Studios",
  description: "A room Studio in Catamarca",
  keywords: [
    "freelance",
    "fullstack",
    "developer",
    "desarrollador web",
    "argentina",
    "catamarca",
    "agustin",
    "avellaneda",
    "front-end",
    "back-end",
    "testing",
    "liderazgo",
    "studio",
    "estudio",
    "mix",
    "mastering",
    "ágil",
  ],
  ogImage:
    "https://res.cloudinary.com/draig/image/upload/v1694114443/tns/zcbd2pk5rwxa0kxbzv8s.webp",
  images: [
    {
      url: "https://res.cloudinary.com/draig/image/upload/v1694114443/tns/zcbd2pk5rwxa0kxbzv8s.webp",
      width: 800,
      height: 600,
      alt: "Tinta Negra Studios",
      name: "Tinta Negra Studios",
    },
    {
      url: "https://res.cloudinary.com/draig/image/upload/v1694114443/tns/zcbd2pk5rwxa0kxbzv8s.webp",
      width: 1800,
      height: 1600,
      alt: "Tinta Negra Studios",
      name: "Tinta Negra Studios",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "Tinta Negra Studios",
    description: "A room Studio in Catamarca",
    creator: "Avellaneda Agustín",
    images: [
      "https://res.cloudinary.com/draig/image/upload/v1694114443/tns/zcbd2pk5rwxa0kxbzv8s.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    images:
      "https://res.cloudinary.com/draig/image/upload/v1694114443/tns/zcbd2pk5rwxa0kxbzv8s.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
