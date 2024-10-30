import { AuroraBackground } from "@/components/background/AuroraBackground";
import PageLoading from "@/components/background/PageLoading";
import SEO from "@/components/next/SEO";
import dynamic from "next/dynamic";
import React from "react";

const Provider = dynamic(() => import("@/components/animation/Provider"), {
  ssr: false,
  loading: () => <PageLoading />,
});

const SectionAlbum = dynamic(() => import("@/components/sections/SectionAlbum"), {
  ssr: false,
  loading: () => <PageLoading />,
});

const Page = () => {
  return (
    <>
      <SEO title={["Welcome to Our Wedding", "✨ 🎉 🎊"].filter(Boolean).join(" | ")} description={"✨ 🎉 🎊 • ✨ 🎉 🎊 • ✨ 🎉 🎊 • ✨ 🎉 🎊 "} />
      <AuroraBackground className="fixed left-0 top-0 h-dvh w-dvw" />

      <Provider>
        <SectionAlbum />
      </Provider>
    </>
  );
};

export default Page;
