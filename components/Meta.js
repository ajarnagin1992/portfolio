import Head from "next/head";

export const Meta = ({ ...metadata }) => {
  const meta = {
    title: "Andrew Jarnagin - Software Engineer",
    description: "Andrew Jarnagin's development portfolio",
    ...metadata,
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
    </Head>
  );
};
