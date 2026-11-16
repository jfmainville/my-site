import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SITE_URL, profile } from "./content";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.scss";

config.autoAddCss = false;

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${profile.firstName} ${profile.lastName}`,
  description: profile.pitch,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
