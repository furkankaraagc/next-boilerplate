'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { axios } from '@/lib/api/client/axios';

export default function LoginForm() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
    password: z.string().min(2, {
      message: 'Password must be at least 2 characters.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post(
        '/api/login',
        { username: values.username, password: values.password },
        {
          withCredentials: true,
          headers: { 'Content-Type': 'application/json' },
        },
      );
      toast.success('Login successful');
    } catch (error) {
      toast.error('Login failed');
    }
  }

  return (
    <Card className='mx-auto w-full max-w-md shadow-lg'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-center text-2xl font-bold'>Login</CardTitle>
        <CardDescription className='text-center'>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <User className='text-muted-foreground absolute top-2.5 left-3 h-4 w-4' />
                      <Input className='pl-10' placeholder='Enter your username' {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Lock className='text-muted-foreground absolute top-2.5 left-3 h-4 w-4' />
                      <Input
                        className='pl-10'
                        type='password'
                        placeholder='Enter your password'
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='pt-2'>
              <Button type='submit' className='w-full'>
                Sign In
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <p className='text-muted-foreground text-sm'>
          Dont have an account?{' '}
          <a href='#' className='text-primary hover:underline'>
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
