import { addBasePath } from "next/dist/shared/lib/router/router";
import React from "react";
import Head from "next/head";

export const Meta = ({ ...metadata }) => {
  const meta = {
    title: "Andrew Jarnagin - Software Developer",
    description: "Andrew Jarnagin's development portfolio",
    type: "memed",
    site_name: "Andrew Jarnagin - Software Developer",
    description: "Andrew Jarnagin's development portfolio",
    image: "/avatar.jpg",
    ...metadata,
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.site_name} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={addBasePath(meta.image)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ajarnagin1992" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={addBasePath(meta.image)} />
    </Head>
  );
};
