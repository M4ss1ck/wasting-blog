import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import favicon from "../images/favicon.ico";

function SEO({ title, seo }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          keywords
          title
        }
      }
    }
  `);

  const defaultTitle = siteMetadata.title;

  const pageDescription = seo?.description || siteMetadata.description;
  const pageKeywords = seo?.keywords || siteMetadata.keywords;
  const pageTitle = seo?.title || title || "Página Principal";

  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      {seo?.image && <meta property="image" content={seo.image.url} />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      {seo?.image && <meta property="og:image" content={seo.image.url} />}
      <meta name="og:type" content="website" />

      <meta name="twitter:site" content="WastingBlog" />
      <meta name="twitter:title" content={`${pageTitle} | ${defaultTitle}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {seo?.image && <meta name="twitter:image:src" content={seo.image.url} />}

      <link rel="icon" href={favicon} />
    </Helmet>
  );
}

export default SEO;
