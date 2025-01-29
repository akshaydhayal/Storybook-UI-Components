import type { Meta,StoryObj } from "@storybook/react"
import Button1 from "../components/Button";

const meta:Meta<typeof Button1>={
    title:"Button1",
    component:Button1,
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