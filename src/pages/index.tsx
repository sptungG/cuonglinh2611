import { cn } from "@/common/utils";
import FlickeringGrid from "@/components/background/FlickeringGrid";
import { RainbowButtonLink } from "@/components/button/RainbowButton";
import { CardsHeader01 } from "@/components/card/CardsHeader";
import { FloatingDock } from "@/components/navigation/FloatingDock";
import NImage from "@/components/next/NextImage";
import SEO from "@/components/next/SEO";
import Fonts from "@/styles/fonts";
import { CalendarHeartIcon, GiftIcon, HeartIcon, ImagesIcon, MapPinIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEO />

      <section className="relative flex h-dvh w-dvw flex-col items-center justify-center overflow-hidden">
        <div className="z-10 flex items-center justify-between">
          <div className="relative flex h-full max-w-xs flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2">
            <NImage src="/assets/image-01.jpg" alt="2611" height={0} width={240} className="size-full rounded-full object-cover" />
            <NImage src="/images/icon-flower-3.png" alt="2611" height={0} width={120} className="absolute bottom-0 left-[-55px]" />
            <NImage src="/images/icon-flower-4.png" alt="2611" height={0} width={100} className="absolute right-[-30px] top-0 rotate-[184deg]" />
          </div>

          <div className="relative flex flex-col items-center justify-center px-20 text-center">
            <div className={cn(Fonts.Manrope.className, "text-xl font-[600] tracking-[4px] mb-8")}>CHÚNG MÌNH CƯỚI</div>
            <h2
              className={cn(Fonts.GreatVibes.className, "text-6xl font-[600] text-balance whitespace-pre-line tracking-[4px]  mb-8 leading-[1.2]")}
            >{`Nguyễn Văn Cường \n&\n Nguyễn Yến Linh`}</h2>
            <div className={cn(Fonts.DancingScript.className, "text-3xl font-[600] tracking-[4px] border-y-2 border-amber-900 py-3 mb-6")}>
              26 Tháng 11, 2024
            </div>

            <div className="mb-2 flex items-center gap-1 text-lg">
              <MapPinIcon />
              <span>71 Nguyễn Chí Thanh, Láng Hạ, Đống Đa, Hà Nội</span>
            </div>

            <RainbowButtonLink
              href="https://www.google.com/maps/search/?api=1&query=21.024022438527897,105.81117814459483"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base uppercase tracking-[2px] text-amber-900 ring-1 ring-amber-300"
            >
              Xem vị trí
            </RainbowButtonLink>
          </div>

          <div className="relative flex h-full max-w-xs flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2">
            <NImage src="/assets/image-02.jpg" alt="2611" height={0} width={240} className="size-full min-h-full rounded-full object-cover" />
            <NImage src="/images/icon-flower-3.png" alt="2611" height={0} width={100} className="absolute left-[-40px] top-0 rotate-[60deg]" />
            <NImage src="/images/icon-flower-4.png" alt="2611" height={0} width={120} className="absolute bottom-0 right-[-30px] rotate-[250deg]" />
          </div>
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
        <div className="px-10 py-5">
          <CardsHeader01 />
        </div>
      </section>

      <section className={cn(Fonts.Questrial.className, "text-lg h-dvh relative flex flex-col items-center justify-center overflow-hidden")}>
        <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-amber-500/20 p-10 pb-12">
          <div className="mb-5 flex items-center">
            <div className="flex flex-col">
              <div className="mb-4 text-center text-xl uppercase">Nhà Trai</div>
              <div className="">Ông: Nguyễn Minh Triết</div>
              <div className="">Bà: Ngô Thu Ngân</div>
            </div>

            <NImage src="/images/flower.png" alt="2611" height={0} width={366} className="mx-10" />

            <div className="flex flex-col ">
              <div className="mb-4 text-center text-xl uppercase">Nhà Gái</div>
              <div className="">Ông: Nguyễn Tuấn Việt</div>
              <div className="">Bà: Nguyễn Ngọc Thanh Ngân</div>
            </div>
          </div>

          <div className="mb-2 text-2xl font-[600]">TRÂN TRỌNG KÍNH MỜI</div>

          <div className="text-lg">Bạn cùng gia đình</div>
          <div className="text-base italic">{`(Tới dự Lễ Thành Hôn của hai con chúng tôi)`}</div>

          <div className="my-10 flex items-center">
            <div className={cn(Fonts.DancingScript.className, "font-[600] text-4xl")}>Nguyễn Tuấn Hải</div>
            <HeartIcon className="mx-10 size-10 text-red-500" fill="currentColor" />
            <div className={cn(Fonts.DancingScript.className, "font-[600] text-4xl")}>Nguyễn Phương Hà</div>
          </div>

          <div className="text-neutral-500">Tổ chức vào lúc 09 giờ 00</div>
          <div className="">Thứ Tư, ngày 09 tháng 06 năm 2023</div>
          <div className="mb-6 text-base italic">{`(Tức ngày 12 tháng 05 năm 2023 Quý Mão)`}</div>

          <div className="text-xl">Tại gia đình Nhà Trai:</div>
          <div className="mb-10">Lê Quang Đạo, An Đông, Thành phố Huế, Thừa Thiên Huế, Vietnam</div>

          <div className={cn(Fonts.DancingScript.className, "text-2xl")}>Sự hiện diện của Quý khách là niềm vinh hạnh của gia đình chúng tôi!</div>

          <NImage
            src="/images/overlay2.jpg"
            alt="2611"
            height={0}
            width={366}
            className="absolute left-0 top-1/2 -z-10 min-h-full min-w-full -translate-y-1/2 rounded-2xl object-cover"
          />

          <NImage
            src="/images/save-the-date.png"
            alt="2611"
            height={0}
            width={330}
            className="absolute bottom-0 left-0 z-10 -translate-x-1/2 object-cover"
          />
        </div>

        <div className="absolute left-0 top-1/2 -z-20 w-dvw -translate-y-1/2 ">
          <FlickeringGrid className="" squareSize={4} gridGap={6} color="#d97706" maxOpacity={0.5} flickerChance={0.1} height={300} width={3000} />
        </div>
      </section>

      <section className="flex h-dvh items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className={cn(Fonts.DancingScript.className, "text-xl text-amber-400 font-[700] uppercase mb-1")}>Cô dâu</div>
          <div className={cn(Fonts.DancingScript.className, "text-5xl mb-3")}>Nguyễn Yến Linh</div>
          <div className="relative flex h-[260px] items-center justify-center">
            <NImage src="/assets/pexels-agung-pandit-wiguna-9827356.jpg" height={0} width={172} className="max-h-[172px] rounded-full object-cover" />
            <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
              <NImage
                src="/images/couple-frame-2.png"
                alt="2611"
                height={260}
                width={260}
                className="max-w-screen-sm animate-[zoomTwo_10s_linear_infinite] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="relative mx-16 flex h-full max-h-[60%] min-w-[400px] max-w-xs shrink-0 flex-col items-center justify-center rounded-full border-2 border-amber-900/50 p-2">
          <NImage src="/assets/image-02.jpg" alt="2611" height={0} width={300} className="size-full min-h-full rounded-full object-cover" />
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
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-3 flex h-[260px] items-center justify-center">
            <NImage src="/assets/image-01.jpg" height={0} width={172} className="max-h-[172px] rounded-full object-cover" />
            <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
              <NImage
                src="/images/couple-frame-2.png"
                alt="2611"
                height={260}
                width={260}
                className="max-w-screen-sm animate-[zoomTwo_10s_linear_infinite] object-cover"
              />
            </div>
          </div>
          <div className={cn(Fonts.DancingScript.className, "text-xl text-amber-400 font-[700] uppercase mb-1")}>Chú rể</div>
          <div className={cn(Fonts.DancingScript.className, "text-5xl ")}>Nguyễn Văn Cường</div>
        </div>
      </section>

      <FloatingDock
        desktopClassName="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        items={[
          {
            title: "Xem vị trí",
            icon: <MapPinIcon className="size-full" />,
            href: "#",
          },

          {
            title: "Save the Date",
            icon: <CalendarHeartIcon className="size-full" />,
            href: "#",
          },

          {
            title: "Wedding Album",
            icon: <ImagesIcon className="size-full" />,
            href: "#",
          },

          {
            title: "Share",
            icon: <GiftIcon className="size-full" />,
            href: "#",
          },
        ]}
      />
    </>
  );
}
