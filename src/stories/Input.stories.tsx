import type { Meta,StoryObj } from "@storybook/react";
import { lazy } from "react";
// import Input from "../components/Input";
const Input=lazy(()=>import("../components/Input"));

const meta:Meta<typeof Input>={
    title:"Components/Input",
    component:Input,
    tags:["autodocs"],
    parameters:{
        layout:"centered"
    }
}
type Story=StoryObj<typeof meta>;
export default meta;

export const normalInput:Story={
    args:{
        type:"text",
        placeholder:"Enter your name",
        tailwindStyles:""
    }
}

export const disableInput:Story={
    args:{
        placeholder:"Disabled button",
        type:"text",
        tailwindStyles:"",
        disabled:true
    }
}
export const fileInput:Story={
    args:{
        placeholder:"Upload file",
        type:"file",
        tailwindStyles:"file:rounded-md file:px-2 file:border-slate-200"
    }
}

export const Password:Story={
    args:{
        type:"password",
        placeholder:"Enter Password",
        tailwindStyles:""
    }
}
export const Date:Story={
    args:{
        type:"date",
        placeholder:"Enter Date",
        tailwindStyles:""
    }
}