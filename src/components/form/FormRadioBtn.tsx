import { cn } from "@/common/utils";
import React, { useId } from "react";

type TFormRadioBtnProps = {
  name: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
  classNameWrapper?: string;
  onChange?: (v: string) => void;
};

const FormRadioBtn = ({ children, extra, classNameWrapper, name, value, required, className, onChange, disabled }: TFormRadioBtnProps) => {
  const uid = useId();
  return (
    <div className={classNameWrapper}>
      <input
        type="radio"
        id={uid}
        name={name}
        value={value}
        className="peer hidden"
        required={required}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
      <label
        htmlFor={uid}
        className={cn(
          "inline-flex w-full relative cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-amber-600 peer-checked:text-amber-600 peer-checked:font-[600] peer-disabled:cursor-not-allowed peer-disabled:pointer-events-none",
          className
        )}
      >
        {children}
      </label>
      {extra}
    </div>
  );
};

export default FormRadioBtn;
