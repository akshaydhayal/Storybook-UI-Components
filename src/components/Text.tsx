import { cva, VariantProps } from "class-variance-authority"
import clsx from "clsx";
import { ClassValue } from "clsx";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const textStyles=cva("",{
  variants:{
    variant:{italic:"italic"},
    size:{
      sm:"text-sm",
      md:"text-base",
      lg:"text-xl",
      xl:"text-3xl"
    },
    weight:{
      medium:"font-normal",
      bold:"font-bold",
      extrabold:"font-extrabold"
    },
    italic:{
      true:"italic",
    },
    underline:{
      true:"underline"
    }
  },
  defaultVariants:{
    size:"md",
    weight:"medium",
    italic:false,
    underline:false
  }
});

function cn(...classes:ClassValue[]){
  const a=twMerge(clsx(...classes));
  console.log(a);
  return a;

}

type textTypes=VariantProps<typeof textStyles> & ComponentProps<"span"> & {tailwindStyles?:string,text:string};

export default function Text({variant,size,weight,italic,underline,tailwindStyles,text,...props}:textTypes){
  return <span className={cn(textStyles({variant,size,weight,'italic':italic,'underline':underline}),tailwindStyles)} {...props}>{text}</span>
}