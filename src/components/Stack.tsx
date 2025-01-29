import { cva, VariantProps } from "class-variance-authority"
import clsx from "clsx"
import { ClassValue } from "clsx"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const stackStyles=cva("p-4 flex gap-4 border-2 border-black bg-blue-300 ",{
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

type stackType=VariantProps<typeof stackStyles> & ComponentProps<"div"> & {tailwindStyles:string};
const Stack = ({direction,justify,align,children,tailwindStyles,...props}:stackType) => {
  return (
    <div className={cn(stackStyles({direction,justify,align}),tailwindStyles)} {...props}>
        {children && Array.isArray(children) && children.map((i)=><div className="bg-yellow-300 text-black border py-2 px-4 border-slate-700 text-xl font-semibold">{i}</div>)}
    </div>
  )
}

export default Stack