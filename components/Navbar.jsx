import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div class="bg-gray-800">
        <div class="h-16 mx-auto px-5 flex items-center justify-between">
          <Link
            class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer"
            href="/"
          >
            <Image src="/logo.png" alt="logo" width="50" height="60" />
          </Link>

          <ul class="flex items-center gap-5">
            <li>
              <Link className="hover:text-cyan-500 transition-colors" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link class="hover:text-cyan-500 transition-colors" href="/films">
                Films
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
