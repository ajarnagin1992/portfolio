import { addBasePath } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="bg-black text-white max-w-full md:px-10 px-4 md:py-4 py-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex md:flex-row space-x-12 items-center">
          <div className="flex flex-row space-x-4">
            <Link href="/">
              <a className="w-12 h-12">
                <img
                  src={addBasePath("/avatar.jpg")}
                  className="rounded-full object-contain h-12"
                />
              </a>
            </Link>
            <Link href="/">
              <a className="">
                <p className="font-semibold">Andrew Jarnagin</p>
                <p className="font-light">Software Developer</p>
              </a>
            </Link>
          </div>
          <div className="hidden md:block space-x-5">
            <Link href="/about">
              <a>About</a>
            </Link>
            {/* <Link href="/projects">
              <a>Projects</a>
            </Link> */}
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className="flex flex-row space-x-4">
          <a
            href={"https://www.linkedin.com/in/ajarnagin1992/"}
            className="text-base font-normal text-white dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <a
            href={"https://github.com/ajarnagin1992"}
            className="text-base font-normal text-white dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M 8 0 C 3.582031 0 0 3.582031 0 8 C 0 11.535156 2.292969 14.535156 5.472656 15.589844 C 5.871094 15.664062 6 15.417969 6 15.207031 L 6 13.71875 C 3.773438 14.203125 3.3125 12.773438 3.3125 12.773438 C 2.949219 11.847656 2.421875 11.601562 2.421875 11.601562 C 1.695312 11.105469 2.476562 11.117188 2.476562 11.117188 C 3.28125 11.171875 3.703125 11.941406 3.703125 11.941406 C 4.417969 13.164062 5.574219 12.8125 6.03125 12.605469 C 6.101562 12.089844 6.3125 11.734375 6.539062 11.535156 C 4.761719 11.332031 2.894531 10.648438 2.894531 7.582031 C 2.894531 6.707031 3.207031 5.996094 3.71875 5.433594 C 3.636719 5.234375 3.363281 4.417969 3.796875 3.316406 C 3.796875 3.316406 4.46875 3.101562 5.996094 4.136719 C 6.636719 3.960938 7.320312 3.871094 8 3.867188 C 8.679688 3.871094 9.363281 3.960938 10.003906 4.136719 C 11.53125 3.101562 12.203125 3.316406 12.203125 3.316406 C 12.636719 4.421875 12.363281 5.234375 12.28125 5.433594 C 12.792969 5.996094 13.105469 6.710938 13.105469 7.582031 C 13.105469 10.65625 11.234375 11.332031 9.453125 11.53125 C 9.738281 11.777344 10 12.265625 10 13.011719 L 10 15.207031 C 10 15.417969 10.128906 15.667969 10.535156 15.589844 C 13.710938 14.53125 16 11.535156 16 8 C 16 3.582031 12.417969 0 8 0 Z M 8 0 " />
            </svg>
          </a>
        </div>
      </div>
      <div className="space-x-3 block md:hidden mt-4">
        <Link href="/about">
          <a>About</a>
        </Link>
        {/* <Link href="/projects">
          <a>Projects</a>
        </Link> */}
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
};