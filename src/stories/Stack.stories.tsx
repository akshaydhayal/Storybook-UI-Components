import type { Meta,StoryObj } from "@storybook/react";
import { lazy } from "react";
// import Stack from "../components/Stack";
const Stack=lazy(()=>import("../components/Stack"));

const meta:Meta<typeof Stack>={
    title: "Components/Stack",
    component:Stack,
    tags:["autodocs"],
    argTypes:{
        direction:{
            control:{
                type:"inline-radio",
            },
            options:["row","column"]
        },
        justify:{
            control:{type:"inline-radio"},
            options:['center','start','between','end']
        },
        align:{
            control:{type:"inline-radio"},
            options:['center','start','end']
        },
        size:{
            control:{type:"inline-radio"},
            options:['fit','full']
        }
    },
    parameters:{
        layout:"centered",
    }
}

type Story=StoryObj<typeof meta>;

export const rowStack:Story={
    args:{
        direction:"row",
        justify:"center",
        align:"center",
        tailwindStyles:"",
        size:"full",
        children:["Item 1","Item 2","Item 3"]
    }
} 
export const colStack:Story={
    args:{
        direction:"column",
        justify:"center",
        align:"center",
        size:"full",
        tailwindStyles:"",
        children:['a','b','c']
    }
} 
export default meta;