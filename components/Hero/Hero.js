import { HoverLink } from "components/Generic/HoverLink";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex flex-row items-center p-16 bg-primaryaccent text-textprimary relative h-[500px] justify-center">
      <TextSection></TextSection>
      <AvatarSection></AvatarSection>
    </div>
  );
};

function TextSection(props) {
  return (
    <div
      className="
        flex flex-col animate-fade-in-down space-y-10 p-10 z-10 text-center items-center md:text-left md:items-start"
    >
      <h1 className="text-5xl">{"Hi! I'm Andrew!"}</h1>
      <p className="text-3xl">
        - Full Stack Web-Developer <br /> - Software Engineer
      </p>
      <HoverLink
        href="https://drive.google.com/uc?export=download&id=19zKQZN3cyHFnqbUkQ-sSKbO9zoXrofFu"
        label="Download my CV!"
      ></HoverLink>
    </div>
  );
}

function AvatarSection(props) {
  return (
    <div className="hidden md:block absolute bottom-0 right-0 h-[500px]">
      <Image
        src={"/avatar-removebg.jpg"}
        alt="Avatar"
        height="500px"
        width="500px"
        className=""
      />
    </div>
  );
}
