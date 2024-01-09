import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and Apple Touch Icon */}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />

          {/* SEO & Metadata */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://rin.contact" />
          <link
            rel="alternate"
            hrefLang="x-default"
            href="https://rin.contact/"
          />
          <link rel="alternate" hrefLang="x" href="https://x.rin.contact/" />

          {/* External CSS and Fonts */}
          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
            rel="stylesheet"
          />

          {/* Schema.org JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "http://schema.org",
                "@type": "Person",
                name: "rNLKJA",
                url: "https://rin.contact",
                sameAs: [
                  "https://github.com/rNLKJA",
                  "https://linkedin.com/in/sunchuangyuhuang",
                  "https://www.instagram.com/chuangyu_hscy/",
                ],
                jobTitle: "Master of Data Science",
                worksFor: {
                  "@type": "Organization",
                  name: "University of Melbourne",
                },
                alumniOf: "University of Melbourne",
                description:
                  "rNLKJA - Data Scientist, Programmer, and Tech Enthusiast. Explore my portfolio, blog posts, and data science projects.",
              }),
            }}
          />

          {/* Add any additional meta tags here as needed */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
