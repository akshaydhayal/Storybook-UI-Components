import { lazy } from 'react'

const Stack=lazy(()=>import("../components/Stack"));
const Text=lazy(()=>import("../components/Text"));
const Input=lazy(()=>import("../components/Input"));
const Button=lazy(()=>import("../components/Button"));

const LoginForm = () => {
  return (
    <Stack direction='column' size='fit'>
        <Text text='Login' size='xl' weight='bold' ></Text>
        <Text text='Enter your credentials to login' size='md' weight='medium' variant='italic' tailwindStyles='text-black'></Text>
        <Input type='text' placeholder='Enter your Email'></Input>
        <Input type='password' placeholder='Enter Password'></Input>
        <Button text='Login' variant='primary' size='md'></Button>
    </Stack>
  )
}

export default LoginForm