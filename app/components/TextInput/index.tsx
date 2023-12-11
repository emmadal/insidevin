import React, { HTMLInputTypeAttribute } from "react";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
}
const TextInput = React.forwardRef<HTMLInputElement, IProps>(function TextInput(
  { label, type, name, ...props },
  ref,
) {
  return (
    <div className="my-5">
      <label className="font-light text-black text-sm">{label}</label>
      <input
        type={type}
        name={name}
        autoComplete={type === "password" ? "current-password" : "off"}
        required
        className="flex border bg-transparent px-3 py-2.5 text-sm shadow-sm focus:border-none p-2.5 focus-visible:ring-1 focus:ring-green-1000 focus:outline-none border-gray-200 w-full rounded-2xl mt-1 bg-white focus-visible:outline-none transition-colors file:border-0 file:bg-transparent"
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default TextInput;
