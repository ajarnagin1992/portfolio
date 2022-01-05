export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row space-x-10 p-5 justify-between font-light text-sm md:text-base  px-10 md:px-40 text-textprimary bg-primary">
        <p>{"© 2021 Andrew Jarnagin. All rights reserved."}</p>
        <p>
          {"Built with "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="text-tertiary-normal"
          >
            Next.js
          </a>
          {" and "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="text-tertiary-normal"
          >
            Tailwindcss
          </a>
        </p>
      </div>
    </div>
  );
};
