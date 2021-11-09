import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Dashboardbar = () => {
  const router = useRouter();
  return (
    <div className="mb-5 bg-white">
      <div className="flex items-center justify-between w-full max-w-3xl px-4 py-3 mx-auto my-0 text-sm text-gray-600 border-b 2xl:max-w-5xl">
        <div>
          <Link href="/dashboard">
            <a
              className={
                router.pathname === "/dashboard"
                  ? "border-b-2 border-black px-3 py-3 mr-3 hover:bg-primary-100 rounded-t-md"
                  : "px-3 py-3 mr-3 hover:bg-primary-100 rounded-t-md"
              }
            >
              Overview
            </a>
          </Link>
          <Link href="/dashboard/analytics">
            <a
              className={
                router.pathname === "/dashboard/analytics"
                  ? "border-b-2 border-black px-3 py-3 mr-3 hover:bg-primary-100 rounded-t-md"
                  : "px-3 py-3 mr-3 hover:bg-primary-100 rounded-t-md"
              }
            >
              Analytics
            </a>
          </Link>
          <Link href="/dashboard/settings">
            <a
              className={
                router.pathname === "/dashboard/settings"
                  ? "border-b-2 border-black px-3 py-3 hover:bg-primary-100 rounded-t-md"
                  : "px-3 py-3 hover:bg-primary-100 rounded-t-md"
              }
            >
              Settings
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboardbar;
