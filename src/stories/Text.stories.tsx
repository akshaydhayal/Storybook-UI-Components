import type { Meta,StoryObj } from "@storybook/react";
import { lazy } from "react";
// import Text from "../components/Text";
const Text=lazy(()=>import("../components/Text"));

const meta:Meta<typeof Text>={
    title: 'Components/Text',
    component:Text,
    tags:["autodocs"],
    parameters:{
        layout:"centered"
    },
    argTypes:{
        size:{
            control:"inline-radio",
            options:["sm","md","lg","xl"]
        },
        weight:{
            control:"inline-radio",
            options:["medium","bold","extrabold"]
        },
        italic:{
            control:"boolean",
            // options:["italic","normal"]
        },
        underline:{
            control:"boolean",
            // options:["underline","normal"]
        }
    }
}

type Story=StoryObj<typeof meta>;

export const normalText:Story={
    args:{
        size:"md",
        weight:"medium",
        text:"Lorem ipsum dolor elit. Soluta eos itaque aperiam accusamus quidem at ratione tenetur atque suscipit expedit"
    }
}
export const boldText:Story={
    args:{
        size:"xl",
        weight:"extrabold",
        text:"Lorem ipsum dolor elit. Soluta eos itaque aperiam accusamus quidem at ratione tenetur atque suscipit expedit"
    }
}

export const italicText:Story={
    args:{
        size:"md",
        weight:"bold",
        // italic:true,
        // underline:true,
        tailwindStyles:"text-red-400",
        text:"Lorem ipsum dolor  elit. Soluta eos itaque aperiam accusamus quidem at ratione tenetur atque suscipit expedit",
        variant:"italic"
    }
}
export default meta;