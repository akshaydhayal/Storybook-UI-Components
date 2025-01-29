import type { Meta,StoryObj } from "@storybook/react"
// import Button1 from "../components/Button";
import { lazy } from "react";

const Button=lazy(()=>import("../components/Button"));
// 
const meta:Meta<typeof Button>={
    title:"Components/Button",
    component:Button,
    tags:["autodocs"],
    parameters:{
        layout:"centered"
    }
}

export const Primary:StoryObj<typeof meta>={
    args:{
        text:"Primary",
        variant:"primary",
        size:"sm"
    }
}
export const Secondary:StoryObj<typeof meta>={
    args:{
        text:"Secondary",
        variant:"secondary",
        size:"md"
    }
}

export const OutlineBtn:StoryObj<typeof meta>={
    args:{
        text:"Outline",
        variant:"outline",
        size:"lg"
    }
}
export default meta;