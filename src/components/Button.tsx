import { cva, VariantProps } from "class-variance-authority"
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const buttonStyles=cva("w-full font-medium rounded-md",{
  variants:{
    variant:{
      primary:"bg-slate-950 text-slate-200 hover:bg-slate-700",
      // secondary:"bg-slate-100 hover:bg-slate-300 text-black",
      secondary:"text-black bg-white",
      outline:"bg-white hover:bg-slate-100 outline outline-slate-300 text-black"
    },
    size:{
      sm:"px-6 py-1",
      md:"px-8 py-2",
      lg:"px-10 py-3"
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

type buttonTypes=VariantProps<typeof buttonStyles> &{text:string,tailwindStyles?:string};
const Button = ({variant,size,text,tailwindStyles}:buttonTypes) => {
  return (
    <button className={cn(buttonStyles({size,variant}),tailwindStyles)}>{text}</button>
  )
}

export default Button;