import { redirect } from 'next/navigation';

interface AuthRedirectionWrapperProps {
  pathname: string;
  children: React.ReactNode;
  user: any;
}

export function AuthRedirectionWrapper({ pathname, children, user }: AuthRedirectionWrapperProps) {
  const protectedRoutes = ['/protected'];
  const redirectIfAuthenticatedRoutes = ['/login'];

  const getRedirectUrl = (pathname: string, user: any) => {
    const isRouteProtected = protectedRoutes.some((route) => pathname.startsWith(route));
    if (isRouteProtected && !user) {
      return '/login';
    }

    const isRedirectIfAuthenticated = redirectIfAuthenticatedRoutes.some((route) =>
      pathname.startsWith(route),
    );
    if (isRedirectIfAuthenticated && user) {
      return `/`;
    }

    return null;
  };
  const redirectUrl = getRedirectUrl(pathname, user);
  if (redirectUrl) {
    redirect(redirectUrl);
  }

  return <>{children}</>;
}
