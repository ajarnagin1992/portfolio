import { addBasePath } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="flex flex-row justify-center items-center overflow-hidden bg-black text-white">
      <div className="w-full md:w-1/2 text-center md:text-left p-20 space-y-10 md:pl-40">
        <p className=" text-7xl">{"Hi, I'm Andrew!"}</p>
        <p className="text-3xl">
          {"Full Stack Web-Developer / Software Engineer"}
        </p>
        <div>
          <Link href="https://docs.google.com/document/d/19zKQZN3cyHFnqbUkQ-sSKbO9zoXrofFu/edit?usp=sharing&ouid=105801538895794322757&rtpof=true&sd=true">
            <a className="rounded p-2 bg-blue-600 hover:bg-blue-300">
              {"Check out my CV!"}
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block relative w-full md:w-1/2 p-20 pr-40">
        <img
          src={addBasePath("/placeholder-hero.jpg")}
          alt="Placeholder Image"
        ></img>
      </div>
    </div>
  );
};
