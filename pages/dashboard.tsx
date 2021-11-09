import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Shop } from ".prisma/client";
import Navbar from "@/components/Navbar";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [createNewShop, setCreateNewShop] = useState(0);
  const [shops, setShops] = useState<Shop[]>();
  const [form, setForm] = useState<Shop>();

  useEffect(() => {
    if (status !== "loading") {
      if (!session) {
        router.push("/");
      }
      const getAllShops = async () => {
        const fetcher = await fetch("/api/db/shop/findByEmail", {
          method: "POST",
          body: JSON.stringify({
            // @ts-ignore
            email: session?.user?.email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await fetcher.json();
        setShops(res.shops);
      };
      getAllShops();
    }
  }, [router, session, status]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value }: any = e.target;
    // @ts-ignore
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetcher = await fetch("/api/db/shop/create", {
      method: "POST",
      body: JSON.stringify({
        shop: form,
        email: session?.user?.email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (fetcher.ok) {
      // @ts-ignore
      setShops((prev) => [...prev, form]);
    }
    setCreateNewShop(0);
  };

  return (
    <div>
      <Head>
        <title>Enfo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="layout">
        <div className="flex items-center w-full gap-5 mb-10">
          <div className="flex items-center justify-center w-full px-3 py-2 bg-white border rounded-md focus:border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-gray-400"
            >
              <path
                fill="currentColor"
                d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
              />
            </svg>
            <input
              type="text"
              className="w-full px-3 focus:border-gray-500 focus:outline-none"
              placeholder="Search"
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setCreateNewShop(1);
            }}
            className="px-5 py-2 font-medium text-white transition-all duration-150 bg-black border border-black rounded-md cursor-pointer whitespace-nowrap hover:bg-white hover:text-black"
          >
            New Shop
          </button>
        </div>
        {createNewShop !== 0 && (
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full py-5 bg-gray-200 bg-opacity-50">
            <div className="relative w-full max-w-3xl max-h-full px-10 py-10 mx-auto overflow-y-auto text-black bg-white rounded-lg shadow-2xl 2xl:max-w-5xl">
              <h3 className="mb-5 font-bold">Creating New Shop</h3>
              <button
                type="button"
                onClick={() => setCreateNewShop(0)}
                className="absolute top-0 right-0 px-3 py-1 text-black hover:bg-primary-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"
                  />
                </svg>
              </button>
              <form onSubmit={handleSubmit}>
                <h5 className="mb-2 font-semibold">Shop Name:</h5>
                <input
                  type="text"
                  placeholder="(E.g: Popular Book Store)"
                  className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                  name="name"
                  onChange={handleChange}
                  required
                />
                <h5 className="mb-2 font-semibold">About the Shop:</h5>
                <textarea
                  placeholder="Describe..."
                  className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                  name="description"
                  onChange={handleChange}
                  required
                />
                <h5 className="mb-2 font-semibold">Logo URL (optional):</h5>
                <input
                  type="text"
                  placeholder="https://"
                  className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                  name="logo_url"
                  onChange={handleChange}
                />
                <h5 className="mb-2 font-semibold">Banner URL (optional):</h5>
                <input
                  type="text"
                  placeholder="https://"
                  className="w-full px-4 py-2 mb-8 border rounded-md focus:outline-none focus:border-gray-400"
                  name="banner_url"
                  onChange={handleChange}
                />
                <div className="flex justify-end w-full gap-5">
                  <button
                    type="submit"
                    className="px-5 py-2 font-medium text-white transition-all duration-150 bg-black border-2 border-black rounded-md hover:bg-white hover:text-black"
                  >
                    Create
                  </button>
                  <button
                    type="button"
                    className="px-5 py-2 font-medium text-red-500 transition-all duration-150 bg-white border-2 border-red-500 rounded-md hover:bg-red-500 hover:text-white"
                    onClick={() => {
                      setCreateNewShop(0);
                    }}
                  >
                    Discard
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <div className="grid w-full gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {shops?.map((shop) => (
            <Link key={shop.id} href={`/shop/${shop.id}`}>
              <a className="w-full bg-white border rounded-md">
                {shop.banner_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={shop.banner_url}
                    alt="banner"
                    className="object-cover w-full h-32"
                  />
                )}
                <div className="p-6">
                  <h3 className="mb-3 font-bold">{shop.name}</h3>
                  <p className="text-justify">{shop.description}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// function shuffleArray(array: Shop[]) {
//   // eslint-disable-next-line no-plusplus
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     // eslint-disable-next-line no-param-reassign
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// export const getServerSideProps: GetServerSideProps = () => {
//   const shops: Shop[] = await prisma.shop.findMany();
//   shuffleArray(shops);
// };