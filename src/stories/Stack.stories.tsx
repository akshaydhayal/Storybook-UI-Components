import type { Meta,StoryObj } from "@storybook/react";
import Stack from "../components/Stack";

const meta:Meta<typeof Stack>={
    title: "Components/Stack",
    component:Stack,
    tags:["autodocs"],
    argTypes:{
        direction:{
            control:{
                type:"select",
            },
            options:["row","column"]
        }
    }
}

type Story=StoryObj<typeof meta>;

export const rowStack:Story={
    args:{
        direction:"row",
        justify:"center",
        align:"center",
        tailwindStyles:"",
        children:["Item 1","Item 2","Item 3"]
    }
} 
export const colStack:Story={
    args:{
        direction:"column",
        justify:"center",
        align:"center",
        tailwindStyles:"",
        children:['a','b','c']
    }
} 
export default meta;