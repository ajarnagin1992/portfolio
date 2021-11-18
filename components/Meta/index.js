import Head from "next/head";

export const Meta = ({ ...metadata }) => {
  const meta = {
    title: "Andrew Jarnagin - Software Developer",
    description: "Andrew Jarnagin's development portfolio",
    og: {
      type: "memed",
      site_name: "Andrew Jarnagin - Software Developer",
      description: "Andrew Jarnagin's development portfolio",
      image: "/avatar.jpg",
    },
    ...metadata,
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
    </Head>
  );
};
