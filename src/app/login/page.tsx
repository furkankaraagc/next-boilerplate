'use client';
import React from 'react';
import { toast } from 'sonner';

import LoginForm from '@/components/login/login-form';
import { Button } from '@/components/ui/button';
import { axios } from '@/lib/api/client/axios';

export default function LoginPage() {
  const onClickHandler = async () => {
    try {
      await axios.get('/api/protected', {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      });
      toast.success('Protected route accessed');
    } catch (error) {
      toast.error('Access denied');
    }
  };
  return (
    <div>
      <div className='flex min-h-screen items-center justify-center bg-slate-50'>
        <LoginForm />
        <Button onClick={onClickHandler}>protected</Button>
      </div>
    </div>
  );
}
