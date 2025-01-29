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
        children:<><div>1</div><div>2</div><div>3</div></>
    }
} 
export default meta;