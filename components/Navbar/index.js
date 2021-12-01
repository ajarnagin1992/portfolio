import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaLinkedin, FaGithub, FaGit } from "react-icons/fa";

export const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-8">
            <AvatarSection />
            <LinkSection className="hidden md:flex" />
          </div>
          <SocialLinks />
        </div>
        <LinkSection className="mt-4 flex md:hidden" />
      </div>
    </NavContainer>
  );
};

function MobileNav(props) {
  return;
}

function Nav(props) {
  return;
}

function SocialLinks(props) {
  return (
    <div className="flex flex-row space-x-4">
      <a
        href={"https://www.linkedin.com/in/ajarnagin1992/"}
        target="_blank"
        rel="noreferrer"
        className="text-base font-normal text-textprimary"
      >
        <FaLinkedin className="h-6 w-6 md:h-8 md:w-8" />
      </a>
      <a
        href={"https://github.com/ajarnagin1992"}
        target="_blank"
        rel="noreferrer"
        className="text-base font-normal text-textprimary"
      >
        <FaGithub className="h-6 w-6 md:h-8 md:w-8" />
      </a>
    </div>
  );
}

function NavContainer(props) {
  return (
    <nav
      className={`
      bg-primary text-textprimary max-w-full px-4 py-2 
      md:px-10 md:py-4 ${props.className}`}
    >
      {props.children}
    </nav>
  );
}

function LinkSection(props) {
  const router = useRouter();
  const hoverstyle = "bg-tertiary-normal text-texttertiary rounded ";

  return (
    <div className={props.className}>
      <Link href="/about">
        <a
          className={`text-base p-3 ${
            router.asPath === "/about" ? hoverstyle : ""
          }`}
        >
          About
        </a>
      </Link>
      {/* <Link href="/projects">
              <a>Projects</a>
            </Link> */}
      <Link href="/contact">
        <a
          className={`text-base p-3 ${
            router.asPath === "/contact" ? hoverstyle : ""
          }`}
        >
          Contact
        </a>
      </Link>
    </div>
  );
}

function AvatarSection(props) {
  return (
    <div className="flex flex-row space-x-4">
      <Link href="/">
        <a className="h-12 w-12">
          <Image
            src="/avatar.jpg"
            alt="AvatarIcon"
            height="48px"
            width="48px"
            className="rounded-full"
          />
        </a>
      </Link>
      <Link href="/">
        <a>
          <p className="font-semibold">Andrew Jarnagin</p>
          <p className="font-light">Software Developer</p>
        </a>
      </Link>
    </div>
  );
}
