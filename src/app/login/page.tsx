import React from 'react';

import { PageLayout } from '@/components/layouts/page-layout';
import LoginForm from '@/components/login/login-form';

export default function LoginPage() {
  return (
    <PageLayout>
      <div className='flex min-h-screen items-center justify-center bg-slate-50'>
        <LoginForm />
      </div>
    </PageLayout>
  );
}
