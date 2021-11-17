export const Footer = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="h-0.5 w-full bg-gray-600"></div>
      <div className="flex flex-row space-x-10 p-5 justify-between font-light text-sm md:text-base  px-10 md:px-40">
        <p>{"© 2021 Andrew Jarnagin. All rights reserved."}</p>
        <p>
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
