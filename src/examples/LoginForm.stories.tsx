import type { Meta,StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";

const meta:Meta<typeof LoginForm>={
    title:'Examples/LoginForm',
    component:LoginForm,
    parameters:{
        layout:"centered"
    }
}

export const login:StoryObj<typeof meta>={}

export default meta;