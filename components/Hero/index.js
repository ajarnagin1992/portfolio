import { HoverLink } from "components/Generic";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-primaryaccent text-textprimary relative h-[500px] md:h-[700px]">
      <TextSection></TextSection>
      <AvatarSection></AvatarSection>
    </div>
  );
};

function TextSection(props) {
  return (
    <div
      className="
        animate-fade-in-down text-center space-y-10 p-10 z-10
        lg:w-1/2 lg:text-left"
    >
      <h1 className="text-6xl">{"Hi! I'm Andrew!"}</h1>
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
    <div className="hidden md:block absolute bottom-0 right-0 h-[700px]">
      <Image
        src={"/avatar-removebg.jpg"}
        alt="Avatar"
        height="700px"
        width="700px"
      />
    </div>
  );
}
