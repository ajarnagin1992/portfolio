import { addBasePath } from "next/dist/shared/lib/router/router";

export const HeroSection = () => {
  return (
    <div className="flex flex-row justify-center items-center overflow-hidden">
      <div className="w-full md:w-1/2 text-center md:text-left p-20 space-y-4">
        <p className="text-4xl">{"Hi, I'm Andrew!"}</p>
        <p className="text-xl">Full Stack Web-Developer / Back End Developer</p>
      </div>
      <div className="hidden lg:block relative w-full md:w-1/2 p-20">
        <img src={addBasePath("/placeholder-hero.jpg")}></img>
      </div>
    </div>
  );
};
