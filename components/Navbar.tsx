import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { data: session } = useSession();

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white sticky_nav dark:border-gray-700 dark:bg-gray-900">
      <nav className="nav">
        <div>
          <Link href="/">
            <a>
              <h3 className="font-bold font-handwriting">Enfo</h3>
            </a>
          </Link>
        </div>
        <div className="flex">
          <Link href="/">
            <a className="flex items-center justify-center m-3">
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
                </svg>
              )}
            </a>
          </Link>
          <Link href="/shop">
            <a className="flex items-center justify-center m-3">
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z" />
                </svg>
              )}
            </a>
          </Link>
          {mounted && session ? (
            <Link href="/dashboard">
              <a className="m-3">
                {session.user?.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    // @ts-ignore
                    src={session.user?.image}
                    alt="profile images"
                    className="w-5 h-5 border rounded-full"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="https://images.unsplash.com/photo-1579546928937-641f7ac9bced?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80"
                    alt="profile images"
                    className="w-5 h-5 border rounded-full"
                  />
                )}
              </a>
            </Link>
          ) : (
            <button
              type="button"
              className="flex items-center justify-center m-3 cursor-pointer"
              onClick={() => signIn("google", { callbackUrl: `/dashboard` })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="m13 16 5-4-5-4v3H4v2h9z" />
                <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z" />
              </svg>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
