import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-gray-50 max-w-full px-10 py-2">
      <div className="flex justify-between items-center">
        <div classname="flex">
          <Link href="/">
            <a>
              <p>Andrew Jarnagin</p>
              <p>Software Developer</p>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div>
          <Link href="/experience">
            <a>Experience</a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
