import clsx from "clsx";
import { cva } from "class-variance-authority";

function App() {
  const flag=false;
  const textStyle = clsx("font-medium", flag ? "text-red-400" : "text-green-600");
  const textS=cva('base-class',{
    variants:{
      size:{
        small:"font-base text-lg",
        large:"font-medium text-xl"
      },
      intent:{
        primary:"bg-blue-300 text-black",
        secondary:"bg-yellow-200 text-red-500"
      }
    },
    defaultVariants:{
      size:"small",
      intent:"primary"
    }
  })
  return (
    <div className={textS({intent:"secondary",size:"small"})}>Hello</div>
  )
}

export default App
