import { Sheet } from "@/common/sheets";
import { cn } from "@/common/utils";
import confetti from "canvas-confetti";
import { CalendarHeartIcon } from "lucide-react";
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { BorderBeam } from "../background/BorderBeam";
import { FormInputFloating } from "../form/FormInput";
import FormRadioBtn from "../form/FormRadioBtn";
import { Modal } from "./AnimatedModal";
import { toast } from "sonner";
import { fetchReq, nextAPIUrl } from "@/common/request";
import useSWRMutation from "swr/mutation";

const updateUser = (url: string, { arg }: { arg: Sheet }) => fetchReq(`${nextAPIUrl}${url}`, { method: "PUT", body: JSON.stringify(arg) });

type TModalAcceptProps = { open: boolean; setOpen: (open: boolean) => void; userData: Sheet };
const ModalAccept = ({ open, setOpen, userData }: TModalAcceptProps) => {
  const uid = useId();

  const methodForm = useForm({
    defaultValues: {
      fullName: userData?.fullName || "",
      email: "",
      phoneNumber: "",
      accepted: userData?.accepted || "YES",
      partyName: userData?.partyName || "NhaTrai",
    },
  });
  const UpdateUserReq = useSWRMutation(userData?.id ? `/participants?id=${userData.id}` : null, updateUser);

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
      const { accepted, fullName, partyName, email, phoneNumber } = formData;
      if (userData?.id) await UpdateUserReq.trigger({ id: userData.id, partyName, accepted });
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
      methodForm.reset();
      setOpen(false);
    } catch (error) {
      console.log("error:", error);
      toast.error("Something went wrong!");
    }
  });

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

        <div className="px-4 pb-1 pt-3 text-base uppercase text-amber-500">Hãy dành chút thời gian để nói cho chúng mình biết nhé!</div>

        <form
          onSubmit={handleSubmitForm}
          className="flex min-h-0 flex-[1_1_auto] flex-col overflow-y-auto px-4 pt-0 "
          style={{ scrollbarWidth: "thin" }}
        >
          <div className="mb-1 font-[600] opacity-60"></div>
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
              />
            )}
          />

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
                    className={cn(
                      "flex-col items-stretch px-2 pb-2 pt-4",
                      index === 2 && "border-amber-200",
                      field.value === item.value && "border-amber-600"
                    )}
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
                  { value: "NhaGai", label: "Nhà Gái", icon1: "💐", className: "border-rose-200" },
                ].map((item, index) => (
                  <FormRadioBtn
                    key={uid + index + item.value}
                    name={field.name}
                    value={item.value}
                    onChange={field.onChange}
                    className={cn("flex-col items-stretch px-2 pb-2 pt-4", item?.className, field.value === item.value && "border-amber-600")}
                    disabled={userData?.id && item.value !== userData.partyName}
                  >
                    <div className={cn("leading-none h-9 flex items-center mb-1 text-4xl relative")}>
                      <span>{item.icon1}</span>
                      {!!item?.icon2 && <span className="absolute bottom-0 left-[30px] -mb-1 -ml-2 scale-90">{item.icon2}</span>}
                    </div>
                    <div className={cn("mt-auto text-base text-inherit")}>{item.label}</div>
                  </FormRadioBtn>
                ))}
              </div>
            )}
          />

          <div className="sticky bottom-0 mt-auto bg-white pb-4">
            <button
              type="submit"
              className="relative flex h-[60px] w-full shrink-0 items-center justify-center overflow-hidden rounded-lg border border-amber-500/50 bg-amber-600/10 "
            >
              <span className="pointer-events-none text-xl font-[600] text-amber-600">Tham gia</span>
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
