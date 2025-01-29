import type { Meta,StoryObj } from "@storybook/react";
import Text from "../components/Text";

const meta:Meta<typeof Text>={
    title: 'Components/Text',
    component:Text,
    tags:["autodocs"],
    parameters:{
        layout:"centered"
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