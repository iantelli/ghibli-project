import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="bg-gray-800">
        <div className="h-16 mx-auto px-5 flex items-center justify-between">
          <Link
            className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
            href="/"
          >
            <Image src="/logo.png" alt="logo" width="50" height="60" />
          </Link>

          <ul className="flex items-center gap-5">
            <li>
              <Link classNameName="hover:text-cyan-500 transition-colors" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-cyan-500 transition-colors" href="/films">
                Films
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
