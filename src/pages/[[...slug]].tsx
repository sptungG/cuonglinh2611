import { fetchReq, nextAPIUrl } from "@/common/request";
import { Sheet } from "@/common/sheets";
import { cn } from "@/common/utils";
import FlickeringGrid from "@/components/background/FlickeringGrid";
import { GradientButtonLink } from "@/components/button/GradientButton";
import { RainbowButton, RainbowButtonLink } from "@/components/button/RainbowButton";
import ImageRotate from "@/components/card/ImageRotate";
import ModalAccept from "@/components/modal/ModalAccept";
import ModalQR from "@/components/modal/ModalQR";
import NImage from "@/components/next/NextImage";
import SEO from "@/components/next/SEO";
import Fonts from "@/styles/fonts";
import { CalendarHeartIcon, GiftIcon, HeartIcon, ImagesIcon, MapPinIcon, PartyPopperIcon } from "lucide-react";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import useSWR, { SWRConfig } from "swr";
import useSWRMutation from "swr/mutation";

const FadeWrapper = dynamic(() => import("@/components/animation/Fade"), { ssr: false });
const TimelineDating = dynamic(() => import("@/components/timeline/TimelineDating"), { ssr: false });
const TimerCountDown = dynamic(() => import("@/components/card/TimerCountDown"), { ssr: false });
const CardsHeader01 = dynamic(() => import("@/components/card/CardsHeader"), { ssr: false });
const FloatingDock = dynamic(() => import("@/components/navigation/FloatingDock"), { ssr: false });

const updateUser = (url: string, { arg }: { arg: Sheet }) => fetchReq(`${nextAPIUrl}${url}`, { method: "PUT", body: JSON.stringify(arg) });
const getUser = (url: string) => fetchReq<{ data: Sheet }>(`${nextAPIUrl}${url}`);

const Page = (props: { data: Sheet }) => {
  const id = props.data?.id;
  const { data: getUserRes } = useSWR(id ? `/participants?id=${id}` : null, getUser);
  const UpdateUserReq = useSWRMutation(id ? `/participants?id=${id}` : null, updateUser);

  const userData = getUserRes?.data || props.data;
  const mapParty =
    userData?.partyName === "NhaGai"
      ? "https://www.google.com/maps/search/?api=1&query=21.009745980494834,105.86708485767026"
      : "https://www.google.com/maps/search/?api=1&query=20.748664750735944,105.97718142951669";

  const [isOpenSaveDate, setIsOpenSaveDate] = useState(false);
  const [isOpenQR, setIsOpenQR] = useState(false);

  const mediaAbove640 = useMediaQuery({ minWidth: 640 });

  const handleAccept = () => {
    UpdateUserReq.trigger({ ...props.data, accepted: "YES" });
  };

  return (
    <>
      <SEO />

      <section className="relative flex min-h-dvh max-w-[100dvw] flex-col items-center justify-center overflow-hidden sm:max-h-[1000px]">
        <div className="z-10 flex items-center max-sm:flex-col sm:justify-between">
          <FadeWrapper className="relative hidden h-[476px] max-w-xs flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2 sm:flex">
            <NImage src="/assets/image-01.jpg" alt="2611" height={0} width={240} className="size-full rounded-full object-cover" />
            <NImage
              src="/images/icon-flower-3.png"
              alt="2611"
              height={0}
              width={120}
              className="absolute bottom-[-10px] left-[-55px] animate-[bounceY_12s_linear_infinite]"
            />
            <NImage
              src="/images/icon-flower-4.png"
              alt="2611"
              height={0}
              width={100}
              className="absolute right-[-20px] top-0 animate-[bounceY_12s_linear_infinite]"
            />
          </FadeWrapper>

          <div className="relative flex flex-col items-center justify-center px-0 text-center max-sm:-order-1 sm:px-20">
            <div className={cn(Fonts.Manrope.className, "text-base sm:text-xl font-[600] tracking-[4px] mb-4 sm:mb-8")}>CHÚNG MÌNH CƯỚI</div>
            <h2
              className={cn(
                Fonts.GreatVibes.className,
                "text-4xl sm:text-6xl font-[600] text-center whitespace-pre-line tracking-[4px]  mb-8 leading-[1.2]"
              )}
            >{`Nguyễn Văn Cường \n&\n Nguyễn Yến Linh`}</h2>
            <div
              className={cn(Fonts.DancingScript.className, "text-2xl sm:text-3xl font-[600] tracking-[4px] border-y-2 border-amber-900 py-3 mb-6")}
            >
              26 Tháng 11, 2024
            </div>

            <div className="mb-2 flex items-center gap-1 text-base leading-[1.2] sm:text-lg">
              <MapPinIcon className="shrink-0" />
              <span>
                {userData?.partyName === "NhaGai"
                  ? "Nhà Gái: Trống Đồng Place, 2 P. Lãng Yên, Hai Bà Trưng, Hà Nội"
                  : "Nhà Trai: Đội 5, Phú Thịnh, Kim Động, Hưng Yên"}
              </span>
            </div>

            <RainbowButtonLink
              href={mapParty}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base uppercase tracking-[2px] text-amber-900 ring-1 ring-amber-300"
            >
              Xem vị trí
            </RainbowButtonLink>
          </div>

          <FadeWrapper className="relative h-[367px] max-w-xs flex-col items-center justify-center rounded-xl border-2 border-amber-900/50 p-2 max-sm:mt-10 sm:flex sm:h-[476px] sm:rounded-full">
            <NImage
              src="/assets/image-02.jpg"
              alt="2611"
              height={0}
              width={240}
              style={{ height: "100%" }}
              className="size-full min-h-full rounded-md object-cover sm:rounded-full"
            />
            <NImage
              src="/images/icon-flowers-3.png"
              alt="2611"
              height={0}
              width={100}
              className="absolute left-[-20px] top-0 animate-[bounceY_12s_linear_infinite]"
            />
            <NImage
              src="/images/icon-flowers-4.png"
              alt="2611"
              height={0}
              width={120}
              className="absolute bottom-[-40px] right-[-40px] animate-[bounceY_12s_linear_infinite] sm:bottom-[-10px] sm:right-[-50px]"
            />
          </FadeWrapper>
        </div>

        <NImage
          src="/images/icon-flowers-1.png"
          alt="2611"
          height={420}
          width={240}
          className="absolute bottom-10 left-0 animate-[bounceY_10s_linear_infinite] opacity-50"
        />
        <NImage
          src="/images/icon-flowers-2.png"
          alt="2611"
          height={420}
          width={260}
          className="absolute right-0 top-4 animate-[bounceY_10s_linear_infinite] opacity-50"
        />
      </section>

      <section className="relative mb-20 flex max-w-[100dvw] items-center justify-center overflow-hidden">
        <FadeWrapper className="sm:px-10 sm:py-5">
          <CardsHeader01 />
        </FadeWrapper>
      </section>

      <section
        className={cn(
          Fonts.Questrial.className,
          "text-lg min-h-dvh sm:max-h-[1000px] relative flex flex-col items-center justify-center overflow-hidden"
        )}
      >
        <div className="relative flex flex-col items-center justify-center border-2 border-amber-500/20 p-4 pb-0 sm:rounded-2xl sm:p-10 sm:pb-12">
          <div className="mb-10 flex items-center max-sm:flex-col sm:mb-5">
            <FadeWrapper direction="left" className="flex flex-col max-sm:mb-4 max-sm:text-center">
              <div className="text-center text-xl uppercase sm:mb-4">Nhà Trai</div>
              <div className="">Ông: Nguyễn Văn Linh</div>
              <div className="">Bà: Nguyễn Thị Hoàn</div>
            </FadeWrapper>

            <NImage src="/images/flower.png" alt="2611" height={0} width={366} className="max-sm:-order-1 sm:mx-10" />

            <FadeWrapper direction="right" className="flex flex-col max-sm:text-center">
              <div className="text-center text-xl uppercase sm:mb-4">Nhà Gái</div>
              <div className="">Ông: Nguyễn Phương Dũng</div>
              <div className="">Bà: Nguyễn Thị Minh</div>
            </FadeWrapper>
          </div>

          <FadeWrapper className="mb-2 text-lg font-[600]">TRÂN TRỌNG KÍNH MỜI</FadeWrapper>

          <FadeWrapper
            className={cn(
              "text-2xl font-[700] px-1 text-center",
              "[--bg-size:300%] animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent"
            )}
          >
            {userData?.fullName || "Bạn cùng gia đình"}
          </FadeWrapper>
          <div className="text-base italic">{`(Tới dự Lễ Thành Hôn của hai con chúng tôi)`}</div>

          <div className="my-10 flex items-center max-sm:flex-col">
            <FadeWrapper direction="left" className={cn(Fonts.DancingScript.className, "font-[600] text-4xl")}>
              Nguyễn Văn Cường
            </FadeWrapper>
            <HeartIcon className="size-10 text-red-500 max-sm:my-4 sm:mx-10" fill="currentColor" />
            <FadeWrapper direction="right" className={cn(Fonts.DancingScript.className, "font-[600] text-4xl")}>
              Nguyễn Yến Linh
            </FadeWrapper>
          </div>

          {userData?.partyName === "NhaGai" ? (
            <>
              <FadeWrapper className="text-neutral-500">Tổ chức vào lúc 10 giờ 00</FadeWrapper>
              <FadeWrapper className="">Thứ Ba, ngày - tháng 11 năm 2024</FadeWrapper>
              <FadeWrapper className="mb-6 text-base italic">{`(Tức ngày 26 tháng 10 năm 2024 Giáp Thìn)`}</FadeWrapper>

              <FadeWrapper className="text-xl">Tại gia đình Nhà Gái:</FadeWrapper>
              <FadeWrapper className="mb-10">Trống Đồng Place, Hà Nội</FadeWrapper>
            </>
          ) : (
            <>
              <FadeWrapper className="text-neutral-500">Tổ chức vào lúc 10 giờ 00</FadeWrapper>
              <FadeWrapper className="">Thứ Ba, ngày 26 tháng 11 năm 2024</FadeWrapper>
              <FadeWrapper className="mb-6 text-base italic">{`(Tức ngày 26 tháng 10 năm 2024 Giáp Thìn)`}</FadeWrapper>

              <FadeWrapper className="text-xl">Tại gia đình Nhà Trai:</FadeWrapper>
              <FadeWrapper className="mb-10">Đội 5, Phú Thịnh, Kim Động, Hưng Yên</FadeWrapper>
            </>
          )}

          <FadeWrapper className={cn(Fonts.DancingScript.className, "text-center text-2xl")}>
            Sự hiện diện của Quý khách là niềm vinh hạnh của gia đình chúng tôi!
          </FadeWrapper>

          <NImage
            src="/images/overlay2.jpg"
            alt="2611"
            height={0}
            width={366}
            className="absolute left-0 top-1/2 -z-10 min-h-full min-w-full -translate-y-1/2 object-cover sm:rounded-2xl"
          />

          <NImage
            src="/images/save-the-date.png"
            alt="2611"
            height={0}
            width={330}
            className="bottom-0 left-0 z-10 object-cover sm:absolute sm:-translate-x-1/2"
          />
        </div>

        {mediaAbove640 && (
          <div className="absolute left-0 top-1/2 -z-20 w-dvw -translate-y-1/2 ">
            <FlickeringGrid className="" squareSize={4} gridGap={6} color="#d97706" maxOpacity={0.5} flickerChance={0.1} height={300} width={3000} />
          </div>
        )}
      </section>

      <section className="relative flex min-h-dvh items-center justify-center max-sm:flex-col max-sm:py-40 sm:max-h-[1000px]">
        <div className="flex flex-col items-center justify-center max-sm:mt-20">
          <FadeWrapper direction="left" className={cn(Fonts.DancingScript.className, "text-xl text-amber-400 font-[700] uppercase mb-1")}>
            Cô dâu
          </FadeWrapper>
          <FadeWrapper direction="left" className={cn(Fonts.DancingScript.className, "text-5xl mb-3")}>
            Nguyễn Yến Linh
          </FadeWrapper>
          <FadeWrapper direction="left" className="relative flex size-[300px] items-center justify-center max-sm:mt-4 sm:size-[260px]">
            <NImage
              src="/assets/pexels-agung-pandit-wiguna-9827356.jpg"
              height={0}
              width={172}
              className="max-h-full rounded-xl object-cover max-sm:w-full sm:max-h-[172px] sm:rounded-full"
            />
            <div className="absolute bottom-[-60px] right-[-40px] -z-10 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
              <NImage
                src="/images/couple-frame-2.png"
                alt="2611"
                height={260}
                width={260}
                className="-ml-1 -mt-1 size-[300px] max-w-screen-sm animate-[zoomTwo_5s_linear_infinite] object-cover sm:size-[260px]"
              />
            </div>
          </FadeWrapper>
        </div>

        <FadeWrapper className="relative mx-16 hidden h-full max-h-[60%] min-w-[400px] max-w-xs shrink-0 flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2 max-sm:-order-1 sm:flex">
          <NImage src="/assets/image-02.jpg" alt="2611" height={0} width={300} className="size-full rounded-full object-cover sm:min-h-[600px]" />
          <NImage
            src="/images/icon-flowers-3.png"
            alt="2611"
            height={0}
            width={100}
            className="absolute left-[-10px] top-0 animate-[bounceY_10s_linear_infinite]"
          />
          <NImage
            src="/images/icon-flowers-4.png"
            alt="2611"
            height={0}
            width={120}
            className="absolute bottom-0 right-[-40px] animate-[bounceY_10s_linear_infinite]"
          />
        </FadeWrapper>

        <div className="flex flex-col items-center justify-center max-sm:-order-1">
          <FadeWrapper
            direction="right"
            className="relative mb-3 flex size-[300px] items-center justify-center max-sm:order-3 max-sm:mt-6 sm:size-[260px]"
          >
            <NImage
              src="/assets/image-01.jpg"
              height={0}
              width={172}
              className="max-h-full rounded-xl object-cover max-sm:w-full sm:max-h-[172px] sm:rounded-full"
            />
            <div className="absolute bottom-[-60px] left-[-40px] -z-10 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
              <NImage
                src="/images/couple-frame-2.png"
                alt="2611"
                height={260}
                width={260}
                className="-ml-1 -mt-1 size-[300px] max-w-screen-sm animate-[zoomTwo_5s_linear_infinite] object-cover sm:size-[260px]"
              />
            </div>
          </FadeWrapper>
          <FadeWrapper direction="right" className={cn(Fonts.DancingScript.className, "text-xl text-amber-400 font-[700] uppercase mb-1")}>
            Chú rể
          </FadeWrapper>
          <FadeWrapper direction="right" className={cn(Fonts.DancingScript.className, "text-5xl ")}>
            Nguyễn Văn Cường
          </FadeWrapper>
        </div>

        <NImage
          src="/images/icon-flowers-1.png"
          alt="2611"
          height={400}
          width={200}
          className="absolute -bottom-16 left-0 -z-10 animate-[bounceY_10s_linear_infinite] opacity-50"
        />
        <NImage
          src="/images/icon-flowers-2.png"
          alt="2611"
          height={320}
          width={160}
          className="absolute right-0 top-0 -z-10 animate-[bounceY_10s_linear_infinite] opacity-50"
        />
      </section>

      <section className="relative flex min-h-[80dvh] max-w-[100dvw] flex-col items-center justify-center overflow-x-hidden px-4 pb-10 sm:max-h-[800px] sm:px-6">
        <FadeWrapper direction="left" className="text-center text-xl uppercase text-amber-500">
          Cho đến ngày
        </FadeWrapper>
        <FadeWrapper direction="left" className={cn(Fonts.DancingScript.className, "text-5xl sm:text-6xl text-center font-[600] mb-4")}>
          Về chung một nhà
        </FadeWrapper>
        <FadeWrapper direction="left" className="text-center text-lg text-neutral-500">
          Cùng chúng mình đếm ngược nhé!
        </FadeWrapper>

        <TimerCountDown targetDate={new Date("2024-11-26T00:00:01")} />

        <div className="absolute left-0 top-1/2 -z-10 w-full -translate-y-1/2">
          <NImage
            src="/images/pattern-4.png"
            alt="2611"
            height={0}
            width={366}
            className="-z-10 size-full animate-[bounceY_10s_linear_infinite] object-cover"
          />
        </div>
      </section>

      <section className="relative flex min-h-dvh flex-col items-center justify-center ">
        <FadeWrapper direction="right" className="text-center text-xl uppercase text-amber-500">
          Chuyện chúng mình
        </FadeWrapper>
        <FadeWrapper direction="right" className={cn(Fonts.DancingScript.className, "text-5xl sm:text-6xl text-center font-[600] mb-4")}>
          Đã bắt đầu như thế nào
        </FadeWrapper>

        <TimelineDating />

        <NImage
          src="/images/icon-flowers-1.png"
          alt="2611"
          height={400}
          width={200}
          className="absolute -bottom-16 left-0 animate-[bounceY_10s_linear_infinite] opacity-50"
        />
        <NImage
          src="/images/icon-flowers-2.png"
          alt="2611"
          height={320}
          width={160}
          className="absolute right-0 top-0 animate-[bounceY_10s_linear_infinite] opacity-50"
        />
      </section>

      <section className="relative flex min-h-fit max-w-[100dvw] flex-col items-center justify-center overflow-x-hidden py-40">
        <FadeWrapper direction="left" className="mb-1 text-center text-base uppercase text-amber-500 max-sm:px-8">
          Hãy dành chút thời gian để nói cho chúng mình biết nhé!
        </FadeWrapper>
        <FadeWrapper direction="left" className={cn(Fonts.DancingScript.className, "text-4xl text-center font-[600] mb-4")}>
          Chúng mình rất mong bạn/anh/chị đến chung vui với chúng mình
        </FadeWrapper>

        <div className="z-50 flex items-center justify-center sm:px-8">
          <RainbowButton
            onClick={() => setIsOpenSaveDate(true)}
            className="items-center text-base uppercase tracking-[2px] text-amber-900 ring-1 ring-amber-300"
          >
            <PartyPopperIcon className="mr-2 size-6" />
            <span>Bạn sẽ đến chứ?</span>
          </RainbowButton>
        </div>

        <div className="relative min-h-fit w-full overflow-hidden">
          <div className="flex items-center justify-center py-8">
            {[
              "/assets/pexels-tran-long-13114541.jpg",
              "/assets/pexels-tuan-anh-nguyen-1806361.jpg",
              "/assets/pexels-nguyen-xuan-trung-17586999.jpg",
              "/assets/pexels-san-wedding-5544662.jpg",
              "/assets/pexels-san-wedding-5544650.jpg",
            ].map((image, index) => (
              <ImageRotate key={"ImageRotate" + index} src={image} style={index === 2 ? { width: 320, height: 320 } : {}} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-dvh max-w-[100dvw] flex-col items-center justify-center overflow-x-hidden pb-28">
        <FadeWrapper direction="right" className="text-center text-xl uppercase text-amber-500">
          Kỉ niệm cưới
        </FadeWrapper>
        <FadeWrapper direction="right" className={cn(Fonts.DancingScript.className, "text-4xl sm:text-6xl text-center font-[600] mb-8 ")}>
          Những khoảnh khắc đáng nhớ
        </FadeWrapper>

        <div className="flex max-w-screen-lg items-stretch gap-4 px-4 max-sm:flex-col">
          <div className="grid flex-1 grid-cols-2 items-stretch gap-4">
            <div className="col-span-2 flex items-center">
              <div className={cn(Fonts.DancingScript.className, "text-3xl text-left font-[600] col-span-2 text-amber-600")}>Album chúng mình</div>

              <GradientButtonLink
                href="/albums"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto rounded-full py-1.5 pl-3 pr-4 font-[600]"
                icon={<ImagesIcon className="mr-2 text-[#ffaa40]" />}
              >
                Xem tất cả
              </GradientButtonLink>
            </div>
            <NImage
              className="rounded-xl object-cover"
              src="/assets/pexels-san-wedding-5544662.jpg"
              width={300}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
            <NImage
              className="rounded-xl object-cover"
              src="/assets/pexels-trung-nguyen-9517421.jpg"
              width={300}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
            <NImage
              className="col-span-2 rounded-xl object-cover"
              src="/assets/pexels-san-wedding-5544650.jpg"
              width={300}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
          </div>
          <div className="grid flex-1 grid-cols-2 items-stretch gap-4">
            <NImage
              className="col-span-2 rounded-xl object-cover max-sm:order-3"
              src="/assets/pexels-san-wedding-5544650.jpg"
              width={300}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
            <NImage
              className="rounded-xl object-cover"
              src="/assets/pexels-san-wedding-5544662.jpg"
              width={300}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
            <NImage
              className="rounded-xl object-cover"
              src="/assets/pexels-trung-nguyen-9517421.jpg"
              width={300}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt=""
            />
            <div className={cn(Fonts.DancingScript.className, "text-3xl text-left font-[600] col-span-2 text-neutral-500")}>
              “ Hãy để tình yêu diễn biến thật tự nhiên, đã là duyên thì cũng chẳng sợ lạc đường. ”
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-1/2 -z-10 w-full -translate-y-1/2">
          <NImage
            src="/images/pattern-5.png"
            alt="2611"
            height={0}
            width={366}
            className="-z-10 size-full animate-[bounceY_10s_linear_infinite] object-cover"
          />
        </div>
      </section>

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
            icon: <GiftIcon className="size-full text-amber-500" />,
            onClick: () => {
              setIsOpenQR(true);
            },
          },
        ]}
      />

      <ModalQR open={isOpenQR} setOpen={setIsOpenQR} />

      <ModalAccept open={isOpenSaveDate} setOpen={setIsOpenSaveDate} />
    </>
  );
};

export const getStaticPaths = (async () => {
  return { paths: [], fallback: "blocking" };
}) satisfies GetStaticPaths;

export const getStaticProps = (async ({ params }) => {
  const [partyType, id] = (params?.slug || []) as string[];

  if (!partyType || !id) return { props: { data: { partyName: partyType === "l" ? "NhaGai" : "NhaTrai" } as Sheet } };

  const sheetRow = await fetchReq<{ data: Sheet }>(`${nextAPIUrl}/participants?id=${id}`);
  if (!sheetRow?.data) return { props: { data: { partyName: partyType === "l" ? "NhaGai" : "NhaTrai" } as Sheet } };

  return { props: { data: sheetRow.data }, revalidate: 1 };
}) satisfies GetStaticProps<{ data: Sheet }>;

const PageWrapper = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig value={{ fallback: data?.id ? { [`/participants?id=${data.id}`]: data } : {} }}>
      <Page data={data} />
    </SWRConfig>
  );
};

export default PageWrapper;
