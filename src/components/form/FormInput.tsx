import { cn } from "@/common/utils";
import React, { useId } from "react";

type TFormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: React.ReactNode;
  classNameWrapper?: string;
  classNameLabel?: string;
  showCount?: boolean;
  maxCount?: number;
};

export const FormInputFloating = ({ label, classNameWrapper, classNameLabel, className, showCount, maxCount, ...props }: TFormInputProps) => {
  const uid = useId();
  return (
    <div className={cn("relative", classNameWrapper)}>
      <input
        type="text"
        id={uid + "FormInputFloating"}
        className={cn(
          "peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-3.5 pt-5 text-base text-gray-900 focus:border-amber-600 focus:outline-none focus:ring-0 placeholder:text-transparent focus:placeholder:text-gray-400",
          className
        )}
        placeholder=" "
        {...props}
      />
      {!!label && (
        <label
          htmlFor={uid + "FormInputFloating"}
          className={cn(
            "absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-base text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
            classNameLabel
          )}
        >
          {label}
        </label>
      )}

      {showCount && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pr-4 text-sm text-gray-500">
          {[String(props.value)?.length, maxCount].filter(Boolean).join("/")}
        </div>
      )}
    </div>
  );
};
