import NextLink from "next/link";
import React, { useEffect, useState } from "react";
// import { useTheme } from "next-themes";

const Navbar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  //   const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white border-b sticky_nav dark:border-gray-700 dark:bg-gray-900">
      <nav className="nav">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
            </svg>
          </div>
        </div>
        <div className="flex">
          <NextLink href="/archive">
            <a className="m-3">
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m21.706 5.291-2.999-2.998A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.294 5.291A.994.994 0 0 0 2 5.999V19c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5.999a.994.994 0 0 0-.294-.708zM6.414 4h11.172l.999.999H5.415L6.414 4zM4 19V6.999h16L20.002 19H4z" />
                  <path d="M15 12H9v-2H7v4h10v-4h-2z" />
                </svg>
              )}
            </a>
          </NextLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
