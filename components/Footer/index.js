export const Footer = () => {
  return (
    <div className="m-auto flex flex-col pt-10 md:pt-20 md:px-40">
      <div className="h-0.5 w-full bg-gray-600"></div>
      <div className="flex flex-row space-x-10 p-5 justify-between">
        <p className=" font-extralight">
          {"© 2021 Andrew Jarnagin. All rights reserved."}
        </p>
        <p className=" font-extralight">
          {"Built with "}
          <a href="https://nextjs.org/" className="text-blue-400">
            Next.js
          </a>
          {" and "}
          <a href="https://tailwindcss.com/" className="text-blue-400">
            Tailwindcss
          </a>
        </p>
      </div>
    </div>
  );
};