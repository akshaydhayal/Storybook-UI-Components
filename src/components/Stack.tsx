import { cva, VariantProps } from "class-variance-authority"
import clsx from "clsx"
import { ClassValue } from "clsx"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const stackStyles=cva("py-4 px-10 w-full flex rounded-lg shadow-xl border border-slate-300 bg-slate-100",{
    variants:{
        direction:{
            row:"flex-row",
            column:"flex-col",
        },
        justify:{
            center:"justify-center",
            start:"justify-start",
            between:"justify-between",
            end:"justify-end",
        },
        align:{
            center:"items-center",
            start:"items-start",
            end:"items-end",
        },
        size:{
            fit:"w-full",
            full:"w-screen",
        }
    },
    defaultVariants:{
        direction:"row",
        justify:"center",
        align:"center"
    }
})

function cn(...classes:ClassValue[]){
    const a=twMerge(clsx(...classes));
    console.log(a);
    return a;
}

type stackType=VariantProps<typeof stackStyles> & ComponentProps<"div"> & {tailwindStyles?:string};
const Stack = ({direction,justify,align,size,children,tailwindStyles,...props}:stackType) => {
  return (
    <div className={cn(stackStyles({direction,justify,align,size}),tailwindStyles)} {...props}>
        {children && Array.isArray(children) && children.map((i)=><div className=" text-black py-2 px-4 border-slate-700 text-xl font-semibold">{i}</div>)}
    </div>
  )
}

export default Stack