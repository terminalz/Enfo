import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
// import { useSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import { Shop, User } from ".prisma/client";

interface Props {
  shop?: Shop;
  user?: User;
}

const Settings: NextPage<Props> = ({
  shop,
  // user
}) => {
  //   const { data: session } = useSession();
  // console.log(shop?.description);

  return (
    <div>
      <Head>
        <title>Enfo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <>
        <div
          className="w-full h-44 background_image"
          style={{ backgroundImage: `url(${shop?.banner_url})` }}
        />
        <div className="layout">
          <div className="flex items-center justify-between w-full">
            <h2>{shop?.name}</h2>
            <div className="flex items-center p-3">
              <button
                type="button"
                className="p-2 m-1 rounded-md hover:bg-primary-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z" />
                </svg>
              </button>
              <button
                type="button"
                className="p-2 m-1 rounded-md hover:bg-primary-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <p className="whitespace-pre-wrap">{shop?.description}</p>
          </div>
          <div className="mt-10">
            <h3 className="font-bold">Product</h3>
          </div>
        </div>
      </>
    </div>
  );
};

export default Settings;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let shop: Shop = {
    id: "",
    name: "",
    description: "",
    company_name: null,
    logo_url: null,
    banner_url: null,
    user_id: "",
  };
  let user: User = {
    id: "",
    name: null,
    email: null,
    emailVerified: null,
    image: null,
  };
  try {
    // @ts-ignore
    shop = await prisma.shop.findUnique({
      where: {
        // @ts-ignore
        id: context?.params?.id,
      },
    });
    // @ts-ignore
    user = await prisma.shop
      .findUnique({
        where: {
          // @ts-ignore
          id: context?.params?.id,
        },
      })
      .user();
  } catch (error) {
    //
  }
  return {
    props: { shop, user },
    notFound: false,
  };
};
