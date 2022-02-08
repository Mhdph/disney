import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      ></Image>
      {session && (
        <div className="ml-10 md:flex hidden items-center space-x-6 ">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span onClick={() => router.push("/")} className="span">
              Home
            </span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" className="h-5" alt="Movie" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" className="h-5" alt="Series" />
            <span className="span">Seris</span>
          </a>
        </div>
      )}
      {!session ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={() => signIn()}
        >
          Login
        </button>
      ) : (
        <img
          className="rounded-full ml-auto w-12 h-12 hover:cursor-pointer"
          src={session.user.image}
          alt="userimage"
          onClick={() => signOut()}
        ></img>
      )}
    </header>
  );
}

export default Header;
