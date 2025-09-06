// pages/_app.js
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

import "@/styles/globals.css";
import { PreLoader } from "@/components/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  // Simulated loading delay for PreLoader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll while loading
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.style.overflowY = loading ? "hidden" : "auto";
    }
  }, [loading]);

  const title = "Portfolio | Jappanjot Kaur";
  const description =
    "Hello! I'm Jappanjot Kaur, a deep tech enthusiast shaping the future with intelligent systems and intuitive design. From crafting real-time AI models to building seamless user experiences, I blend machine learning precision with creative vision. Every project I take on is an opportunity to innovate, solve, and make something truly impactful. Let's collaborate to bring your ideas to life!";
  const avatar = "/assets/avatar.jpg";
  const url = "https://jappanjot-kaur.vercel.app/"; // updated canonical

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="desc" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={avatar} />
        <meta property="og:image:width" content="612" />
        <meta property="og:image:height" content="612" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta property="twitter:image" content={avatar} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@Shivam_1_Sharma" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />

        <link rel="canonical" href={url} />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/icons/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/icons/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/icons/favicon/favicon-16x16.png"
        />

        {/* ✅ Correct path for manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <ThemeProvider attribute="class" defaultTheme="dark">
        {loading ? <PreLoader /> : <Component {...pageProps} />}
        <Analytics />
      </ThemeProvider>
    </>
  );
}
