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

// export const normalText:Story={
//     args:{
//         size:"md",
//         weight:"medium",
//         text:"Hello"
//     }
// }
// export const boldText:Story={
//     args:{
//         size:"xl",
//         weight:"extrabold",
//         text:"Hello"
//     }
// }

export const italicText:Story={
    args:{
        size:"md",
        weight:"bold",
        italic:true,
        underline:true,
        styles:"text-green-400 italic",
        text:"Hello",
        variant:"italic"
    }
}
export default meta;