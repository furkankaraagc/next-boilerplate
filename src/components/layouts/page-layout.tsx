import { cookies, headers } from 'next/headers';

import { AuthContextProvider } from '@/components/auth/auth-context';
import { AuthRedirectionWrapper } from '@/components/auth/auth-redirect-wrapper';
import { verifyUser } from '@/lib/auth';

export async function PageLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();

  const user = await verifyUser(cookieString);

  const requestUrlPathname = (await headers()).get('x-request-url-pathname') || '';
  return (
    <AuthRedirectionWrapper pathname={requestUrlPathname || '/'} user={user}>
      <AuthContextProvider user={user}>{children}</AuthContextProvider>
    </AuthRedirectionWrapper>
  );
}
