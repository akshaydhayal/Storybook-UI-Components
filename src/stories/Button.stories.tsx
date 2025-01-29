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
    },
    argTypes:{
        variant:{
            control:{
                type:"inline-radio",
            },
            options:["primary","secondary","outline"]
        },
        size:{
            control:{type:"inline-radio"},
            options:["sm","md","lg"]
        }
    }
}

export const Primary:StoryObj<typeof meta>={
    args:{
        text:"Primary",
        variant:"primary",
        size:"sm",
        tailwindStyles:""
    }
}
export const Secondary:StoryObj<typeof meta>={
    args:{
        text:"Secondary",
        variant:"secondary",
        size:"md",
        tailwindStyles:""
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