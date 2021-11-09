import type { NextPage } from "next";
import Head from "next/head";
// import { useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Dashboardbar from "@/components/Dashboardbar";

const Analytics: NextPage = () => {
  //   const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Enfo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Dashboardbar />
      <div className="layout">Analytics</div>
    </div>
  );
};

export default Analytics;
