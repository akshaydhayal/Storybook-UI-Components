import { cva } from "class-variance-authority";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const inputStyles = cva([
  "px-8 py-2",
  "w-full",
  "border",
  "border-slate-400",
  "focus:outline-slate-400",
  "rounded-md",
  "font-normal",
  "text-base",
  "placeholder:text-slate-600",
]);

// function cn(...classes: ClassValue[]) {
function cn(...classes: ClassValue[]) {
  const a = twMerge(clsx(...classes));
  console.log(a);
  return a;
}
export default function Input({ type, placeholder,className, ...props }) {
  return <input className={cn(inputStyles(),className)} type={type} placeholder={placeholder} {...props} />;
}
