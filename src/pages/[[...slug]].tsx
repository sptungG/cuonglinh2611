import { fetchReq, nextAPIUrl } from "@/common/request";
import { Sheet } from "@/common/sheets";
import PageLoading from "@/components/background/PageLoading";
import ModalAccept from "@/components/modal/ModalAccept";
import ModalQR from "@/components/modal/ModalQR";
import SEO from "@/components/next/SEO";
import { CalendarHeartIcon, GiftIcon, ImagesIcon, MapPinIcon } from "lucide-react";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import useSWR, { SWRConfig } from "swr";

const Provider = dynamic(() => import("@/components/animation/Provider"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const Section01 = dynamic(() => import("@/components/sections/Section01"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const Section02 = dynamic(() => import("@/components/sections/Section02"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const Section03 = dynamic(() => import("@/components/sections/Section03"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const Section04 = dynamic(() => import("@/components/sections/Section04"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const Section05 = dynamic(() => import("@/components/sections/Section05"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const Section06 = dynamic(() => import("@/components/sections/Section06"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const Section07 = dynamic(() => import("@/components/sections/Section07"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const Section08 = dynamic(() => import("@/components/sections/Section08"), {
  ssr: false,
  loading: () => <PageLoading />,
});
const FloatingDock = dynamic(() => import("@/components/navigation/FloatingDock"), { ssr: false, loading: () => <div>Loading...</div> });

const getUser = (url: string) => fetchReq<{ data: Sheet }>(`${nextAPIUrl}${url}`);

const Page = (props: { data: Sheet }) => {
  const id = props.data?.id;
  const { data: getUserRes } = useSWR(id ? `/participants?id=${id}` : null, getUser);

  const userData = getUserRes?.data || props.data;
  const mapParty =
    userData?.partyName === "NhaGai"
      ? "https://www.google.com/maps/search/?api=1&query=21.009745980494834,105.86708485767026"
      : "https://www.google.com/maps/search/?api=1&query=20.748664750735944,105.97718142951669";

  const [isOpenSaveDate, setIsOpenSaveDate] = useState(false);
  const [isOpenQR, setIsOpenQR] = useState(false);

  return (
    <>
      <SEO
        title={[userData?.fullName ? "✨ " + userData?.fullName + " ✨" : "", "Welcome to Our Wedding", "✨ 🎉 🎊"].filter(Boolean).join(" | ")}
        description={"✨ 🎉 🎊 • ✨ 🎉 🎊 • ✨ 🎉 🎊 • ✨ 🎉 🎊 "}
      />

      <Provider>
        <Section01 userData={userData} />

        <Section03 userData={userData} />

        <Section02 userData={userData} />

        <Section04 />

        <Section05 />

        <Section06 />

        <Section07
          onClickBtn01={() => {
            setIsOpenSaveDate(true);
          }}
        />

        <Section08 />

        <FloatingDock
          desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
          items={[
            {
              title: `Xem vị trí ${userData?.partyName === "NhaGai" ? "Nhà Gái" : "Nhà Trai"}`,
              icon: <MapPinIcon className="size-full" />,
              href: mapParty,
              target: "_blank",
              rel: "noreferrer noopenner",
            },

            {
              title: "Save the Date",
              icon: <CalendarHeartIcon className="size-full" />,
              onClick: () => {
                setIsOpenSaveDate(true);
              },
            },

            {
              title: "Album chúng mình",
              icon: <ImagesIcon className="size-full" />,
              href: "/albums",
              target: "_blank",
              rel: "noreferrer noopenner",
            },

            {
              title: "Mừng Cưới",
              icon: <GiftIcon className="size-full !min-h-[40px] !min-w-[40px] text-amber-500" />,
              onClick: () => {
                setIsOpenQR(true);
              },
            },
          ]}
        />

        <ModalQR open={isOpenQR} setOpen={setIsOpenQR} />

        <ModalAccept open={isOpenSaveDate} setOpen={setIsOpenSaveDate} userData={userData} />
      </Provider>
    </>
  );
};

export const getStaticPaths = (async () => {
  return { paths: [], fallback: "blocking" };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const [partyType, id] = (params?.slug || []) as string[];

  if (!partyType || !id)
    return {
      props: {
        data: { partyName: partyType === "l" ? "NhaGai" : "NhaTrai" } as Sheet,
      },
    };

  const sheetRow = await fetchReq<{ data: Sheet }>(`${nextAPIUrl}/participants?id=${id}`);
  if (!sheetRow?.data)
    return {
      props: {
        data: { partyName: partyType === "l" ? "NhaGai" : "NhaTrai" } as Sheet,
      },
    };

  return { props: { data: sheetRow.data }, revalidate: 1 };
}) satisfies GetStaticProps<{ data: Sheet }>;

const PageWrapper = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig
      value={{
        fallback: data?.id ? { [`/participants?id=${data.id}`]: data } : {},
      }}
    >
      <Page data={data} />
    </SWRConfig>
  );
};

export default PageWrapper;
