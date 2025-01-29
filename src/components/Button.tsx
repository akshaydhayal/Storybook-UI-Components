import { cva } from "class-variance-authority"
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const buttonStyles=cva("w-full font-medium",{
  variants:{
    variant:{
      primary:"bg-red-500 text-slate-200",
      secondary:"bg-green-200 text-black",
      outline:"border bg-slate-100 text-black"
    },
    size:{
      sm:"px-4 py-2",
      md:"px-6 py-3",
      lg:"px-8 py-4"
    }
  },
  defaultVariants:{
    size:"md",
    variant:"primary"
  }
});

function cn(...props:ClassValue[]){
  return twMerge(clsx(...props))
}

const Button1 = ({variant,size,text}) => {
  return (
    <button className={cn(buttonStyles({size,variant}))}>{text}</button>
  )
}

export default Button1