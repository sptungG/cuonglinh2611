import { Sheet } from "@/common/sheets";
import { cn } from "@/common/utils";
import confetti from "canvas-confetti";
import { ArrowRightIcon, CalendarHeartIcon, CheckCircle, CheckIcon } from "lucide-react";
import { useEffect, useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { BorderBeam } from "../background/BorderBeam";
import { FormInputFloating } from "../form/FormInput";
import FormRadioBtn from "../form/FormRadioBtn";
import { Modal } from "./AnimatedModal";
import { toast } from "sonner";
import { fetchReq, nextAPIUrl } from "@/common/request";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/router";
import CircleLoading from "../animation/CircleLoading";
import useSWR from "swr";
import Link from "next/link";

const getUser = (url: string) => fetchReq<{ data: Sheet }>(`${nextAPIUrl}${url}`);
const appendUser = (url: string, { arg }: { arg: Sheet }) => fetchReq(`${nextAPIUrl}${url}`, { method: "POST", body: JSON.stringify(arg) });
const updateUser = (url: string, { arg }: { arg: Sheet }) => fetchReq(`${nextAPIUrl}${url}`, { method: "PUT", body: JSON.stringify(arg) });

type TModalAcceptProps = { open: boolean; setOpen: (open: boolean) => void; userData: Sheet };
const ModalAccept = ({ open, setOpen, userData }: TModalAcceptProps) => {
  const uid = useId();
  const router = useRouter();

  const methodForm = useForm({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      invitedTime: "",
      partyDay: "",
      accepted: "YES",
      partyName: "NhaTrai",
    },
  });
  const AppendUserReq = useSWRMutation(`/participants`, appendUser);
  const UpdateUserReq = useSWRMutation(userData?.id ? `/participants?id=${userData.id}` : null, updateUser);
  const isLoading = methodForm.formState.isSubmitting || AppendUserReq?.isMutating || UpdateUserReq?.isMutating;

  const acceptItems = [
    { value: "NO", label: "Ko đi đc", icon: "😐" },
    { value: "MAYBE", label: "Có thể đi...", icon: "🤔" },
    { value: "YES", label: "YESSS", icon: "🎉" },
  ];
  const selectedAcceptItem = acceptItems.find((item) => item.value === methodForm.watch("accepted")) || acceptItems[2];

  const handleFire = () => {
    const scalar = 2;
    const triangle = confetti.shapeFromPath({
      path: "M0 10 L5 0 L10 10z",
    });
    const square = confetti.shapeFromPath({
      path: "M0 0 L10 0 L10 10 L0 10 Z",
    });
    const coin = confetti.shapeFromPath({
      path: "M5 0 A5 5 0 1 0 5 10 A5 5 0 1 0 5 0 Z",
    });
    const tree = confetti.shapeFromPath({
      path: "M5 0 L10 10 L0 10 Z",
    });

    const defaults = {
      spread: 360,
      ticks: 60,
      gravity: 0,
      decay: 0.96,
      startVelocity: 20,
      shapes: [triangle, square, coin, tree],
      scalar,
      origin: { x: 0.5, y: 0.99 },
    };

    const shoot = () => {
      confetti({
        ...defaults,
        particleCount: 30,
      });

      confetti({
        ...defaults,
        particleCount: 5,
      });

      confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ["circle"],
      });
    };

    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    setTimeout(shoot, 300);
  };

  const handleSubmitForm = methodForm.handleSubmit(async (formData) => {
    try {
      const { accepted, fullName, partyName, phoneNumber, invitedTime, partyDay } = formData;

      let res;
      if (userData?.id) {
        res = await UpdateUserReq.trigger({ id: userData.id, phoneNumber, partyName, accepted });
      } else {
        res = await AppendUserReq.trigger({ fullName, phoneNumber, invitedTime, partyDay, partyName, accepted });
      }
      setOpen(false);
      methodForm.reset();

      if (formData.accepted === "YES") {
        handleFire();
        toast.success(`Your answer is "YES" 🎉`, { description: `Thank youu${formData?.fullName ? ", " + formData?.fullName : ""}! See you soon!` });
      } else if (formData.accepted === "MAYBE") {
        toast(`Your answer is "MAYBE" 🤔`, { description: "Hope to see you soon!" });
      } else {
        toast(`Your answer is "NO" 😐`, {
          description: ":<<<",
          action: {
            label: "Try again",
            onClick: () => {
              setOpen?.(true);
            },
          },
        });
      }

      if (userData?.id) {
        router.replace(`/${userData.partyName === "NhaGai" ? "l" : "c"}/${userData.id}#invitation`);
      } else if (res?.data?.id) {
        router.replace(`/${res.data.partyName === "NhaGai" ? "l" : "c"}/${res.data.id}#invitation`);
      }
    } catch (error) {
      console.log("error:", error);
      toast.error("Something went wrong!");
    }
  });

  useEffect(() => {
    methodForm.reset({
      fullName: userData?.fullName || "",
      phoneNumber: userData?.phoneNumber || "",
      invitedTime: userData?.invitedTime || "",
      partyDay: userData?.partyDay || "",
      accepted: userData?.accepted || "YES",
      partyName: userData?.partyName || "NhaTrai",
    });
  }, [userData]);

  return (
    <>
      <Modal open={open} setOpen={setOpen} className="max-sm:mt-auto md:max-w-[600px]">
        <div className="flex items-center gap-4 bg-amber-50 p-4 pr-10 text-amber-500">
          <CalendarHeartIcon className="shrink-0" />
          <div className="-mb-1 flex items-baseline">
            <h4 className="mr-0.5 text-2xl font-bold leading-[1.1]">26</h4>
            <div className="leading-[1.1]">/11/2024</div>
          </div>
        </div>

        <div className="px-4 pb-4 pt-3 text-base uppercase leading-[1.2] text-amber-500">Hãy dành chút thời gian để nói cho chúng mình biết nhé!</div>

        <form
          onSubmit={handleSubmitForm}
          className="relative flex min-h-0 flex-[1_1_auto] flex-col overflow-y-auto px-4 pt-0 "
          style={{ scrollbarWidth: "thin" }}
        >
          {isLoading && (
            <div className="absolute left-0 top-0 z-50 flex size-full flex-col items-center justify-center bg-white/50 backdrop-blur-sm">
              <CircleLoading className="size-10" />
            </div>
          )}
          <Controller
            name="fullName"
            control={methodForm.control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInputFloating
                label="Họ và tên *"
                autoComplete="off"
                value={field.value}
                name={field.name}
                onChange={(e) => field.onChange(e.target.value)}
                classNameWrapper="mb-4"
                required
                disabled={userData?.id && userData.fullName}
                placeholder="Bạn ABC và ny..."
              />
            )}
          />

          <Controller
            name="phoneNumber"
            control={methodForm.control}
            render={({ field }) => (
              <FormInputFloating
                label="Số điện thoại"
                autoComplete="off"
                value={field.value}
                name={field.name}
                onChange={(e) => field.onChange(e.target.value)}
                classNameWrapper="mb-4"
                type="tel"
                placeholder="84xxxyyyzzz"
                showCount
                disabled={userData?.id && userData.phoneNumber}
              />
            )}
          />

          <div className="mb-4 flex flex-col">
            <div className="mb-2 italic leading-[1.2] text-amber-600">Trân trọng kính mời bạn tham dự Bữa tiệc chung vui của gia đình chúng mình</div>
            {userData?.partyName === "NhaGai" ? (
              <>
                <div className="mb-1 flex items-baseline text-neutral-500">
                  <span>Tổ chức vào lúc</span>
                  <span className="ml-1 font-[600] ">{"17 giờ 00"}</span>
                </div>
                <div className="text-base ">Thứ Bảy, ngày 23 tháng 11 năm 2024</div>
                <div className="mb-2 text-base italic">{`(Tức ngày 23 tháng 10 năm 2024 Giáp Thìn)`}</div>

                <div className="text-base opacity-60">Tại gia trung tâm tiệc cưới:</div>
                <div className="">Trống Đồng Place Lãng Yên, Hà Nội</div>
              </>
            ) : (
              <>
                <div className="mb-1 flex items-baseline text-neutral-500">
                  <span>Tổ chức vào lúc</span>
                  <span className="ml-1 font-[600] ">
                    {userData?.invitedTime ? `${userData?.invitedTime.split(":")[0]} giờ ${userData?.invitedTime.split(":")[1]}` : "09 giờ 00"}
                  </span>
                </div>
                {userData?.partyDay === "25/11/2024" || userData?.partyName === "NhaTraiChieu" ? (
                  <>
                    <div className="text-base ">Thứ Hai, ngày 25 tháng 11 năm 2024</div>
                    <div className="mb-2 text-base italic">{`(Tức ngày 25 tháng 10 năm 2024 Giáp Thìn)`}</div>
                  </>
                ) : (
                  <>
                    <div className="text-base ">Thứ Ba, ngày 26 tháng 11 năm 2024</div>
                    <div className="mb-2 text-base italic">{`(Tức ngày 26 tháng 10 năm 2024 Giáp Thìn)`}</div>
                  </>
                )}

                <div className="text-base opacity-60">Tại gia đình Nhà Trai:</div>
                <div className="">Đội 5, Phú Thịnh, Kim Động, Hưng Yên</div>
              </>
            )}
          </div>

          <div className="mb-1 font-[600] opacity-60">Bạn sẽ đến chứ? </div>
          <Controller
            name="accepted"
            control={methodForm.control}
            render={({ field }) => (
              <div className="mb-4 flex flex-nowrap justify-between gap-4 [&>*]:w-[33%]">
                {acceptItems.map((item, index) => (
                  <FormRadioBtn
                    key={uid + index + item.value}
                    name={field.name}
                    value={item.value}
                    onChange={field.onChange}
                    classNameWrapper="relative"
                    className={cn(
                      "flex-col items-stretch px-2 pb-2 pt-4",
                      index === 2 && "border-amber-200",
                      field.value === item.value && "border-amber-600"
                    )}
                    extra={field.value === item.value && <CheckIcon className="absolute right-2 top-2 size-5 fill-amber-50 text-amber-600" />}
                  >
                    <div
                      className={cn(
                        "leading-none h-9 flex items-center mb-1",
                        index === 0 && "text-2xl opacity-60",
                        index === 1 && "text-2xl",
                        index === 2 && "text-4xl"
                      )}
                    >
                      {item.icon}
                    </div>
                    <div className="mt-auto text-base text-inherit">{item.label}</div>
                  </FormRadioBtn>
                ))}
              </div>
            )}
          />
          <div className="font-[600] opacity-60">Bạn là khách của?</div>
          <Controller
            name="partyName"
            control={methodForm.control}
            render={({ field }) => (
              <div className="mb-8 flex flex-nowrap justify-between gap-4 [&>*]:w-1/2">
                {[
                  { value: "NhaTrai", label: "Nhà Trai", icon1: "💍", icon2: "💍", className: "border-slate-300" },
                  { value: "NhaGai", label: "Nhà Gái", icon1: "💐", className: "border-rose-300" },
                ].map((item, index) => (
                  <FormRadioBtn
                    key={uid + index + item.value}
                    name={field.name}
                    value={item.value}
                    onChange={field.onChange}
                    classNameWrapper="relative"
                    className={cn("flex-col items-stretch px-2 pb-2 pt-4", item?.className, field.value === item.value && "border-amber-600")}
                    disabled={item.value !== userData?.partyName}
                    extra={
                      item.value === userData?.partyName ? (
                        <CheckIcon className="absolute right-2 top-2 size-5 fill-amber-50 text-amber-600" />
                      ) : (
                        !!userData?.id || (
                          <Link
                            href={item.value === "NhaTrai" ? "/c#invitation" : "/l#invitation"}
                            className="absolute right-2 top-2 flex items-center text-gray-600 underline hover:text-amber-600"
                            onClick={() => setOpen?.(false)}
                          >
                            <span className="mr-1 text-xs">Xem thiệp mời</span>
                            <ArrowRightIcon className="size-5" />
                          </Link>
                        )
                      )
                    }
                  >
                    <div className={cn("leading-none h-9 flex items-center mb-1 text-4xl relative")}>
                      <span>{item.icon1}</span>
                      {!!item?.icon2 && <span className="absolute bottom-0 left-[30px] -mb-1 -ml-2 scale-90">{item.icon2}</span>}
                    </div>
                    <div className={cn("mt-auto text-[17px] text-inherit", field.value === item.value && "text-amber-600 font-[600]")}>
                      {item.label}
                    </div>
                  </FormRadioBtn>
                ))}
              </div>
            )}
          />

          <div className="sticky bottom-0 mt-auto flex flex-col bg-white pb-4 pt-0.5">
            {!!userData?.accepted && !!userData?.updatedAt && (
              <div className="mb-1 text-sm">
                <span className="font-[600] text-amber-600">{`"${userData?.accepted}"`}</span>
                <span className="mx-1 opacity-60">at</span>
                <span className="font-[600] opacity-60">{userData?.updatedAt}</span>
              </div>
            )}
            <button
              disabled={isLoading}
              type="submit"
              className="relative flex h-[60px] w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-amber-500/50 bg-amber-600/10 "
            >
              <span className="pointer-events-none text-xl font-[600] text-amber-600">{"Tham gia"}</span>
              <span className="ml-2 text-xl">{selectedAcceptItem.icon}</span>
              <BorderBeam size={100} duration={6} delay={2} />
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ModalAccept;
