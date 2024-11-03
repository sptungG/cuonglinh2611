import { cn } from "@/common/utils";
import Fonts from "@/styles/fonts";
import { XIcon } from "lucide-react";
import Joyride, { CallBackProps, STATUS, TooltipRenderProps } from "react-joyride";

type TTourProps = { run?: boolean; onStartChange?: (run: boolean) => void };

const Tour = ({ run, onStartChange }: TTourProps) => {
  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      onStartChange?.(false);
    }
  };

  return (
    <Joyride
      callback={handleJoyrideCallback}
      continuous
      run={run}
      scrollToFirstStep={false}
      showProgress
      showSkipButton
      styles={{
        options: {
          primaryColor: "#92400e",
          zIndex: 1000,
          width: 300,
        },
      }}
      tooltipComponent={CustomTooltip}
      locale={{ next: "Tiếp theo", back: "Quay lại", skip: "Bỏ qua", last: "Hoàn thành" }}
      steps={[
        {
          title: "Vị trí tổ chức sự kiện",
          content: "Bấm vào sẽ đi đến bản đồ",
          target: "#FloatingDock0",
          placement: "top",
          disableScrolling: true,
          disableBeacon: true,
        },
        {
          title: "Save the date",
          content: "Hãy cho chúng mình biết bạn tham gia nhé!",
          target: "#FloatingDock1",
          placement: "top",
          disableScrolling: true,
          disableBeacon: true,
        },
        {
          title: "Album chúng mình",
          content: "Danh sách các ảnh",
          target: "#FloatingDock2",
          placement: "top",
          disableScrolling: true,
          disableBeacon: true,
        },
        {
          title: "Hộp Mừng cưới",
          content: "Nếu chúng mình tổ chức sự kiện ở quá xa",
          target: "#FloatingDock3",
          placement: "top",
          disableScrolling: true,
          disableBeacon: true,
        },
        {
          title: "Music",
          content: "UNSECRET X TIM HALPERIN | ONE DAY AT A TIME (2m:44s)",
          target: "#FloatingDock4",
          placement: "top",
          disableScrolling: true,
          disableBeacon: true,
        },
      ]}
    />
  );
};

function CustomTooltip(props: TooltipRenderProps) {
  const { backProps, closeProps, continuous, index, primaryProps, skipProps, step, tooltipProps } = props;

  return (
    <div className="w-[320px] rounded bg-white p-2" {...tooltipProps}>
      <button className="absolute right-1 top-1 flex size-8 items-center justify-center" {...closeProps}>
        <XIcon />
      </button>

      {step.title && <h4 className={cn(Fonts.DancingScript.className, "mb-3 text-3xl font-[600]")}>{step.title}</h4>}
      <div className="min-h-14 text-base leading-[1.2]">{step.content}</div>
      <div className="flex items-center justify-between">
        <button className="flex h-8 items-center justify-center rounded bg-gray-100 px-3 font-[600] leading-[1.1] text-gray-600" {...skipProps}>
          {skipProps.title}
        </button>
        <div className="flex gap-2">
          {index > 0 && (
            <button className="flex h-8 items-center px-1 font-[600] leading-[1.1] text-amber-600" {...backProps}>
              {backProps.title}
            </button>
          )}
          {continuous && (
            <button className="flex h-8 items-center justify-center rounded bg-amber-600 px-2 font-[600] leading-[1.1] text-white" {...primaryProps}>
              {primaryProps.title}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tour;
