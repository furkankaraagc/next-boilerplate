import { customFetch } from '@/lib/api/fetch';

export async function verifyUser(cookieString: string) {
  try {
    const response = await customFetch(`/api/me`, {
      headers: {
        'Content-Type': 'application/json',
        cookie: cookieString,
      },
      next: {
        revalidate: 0,
      },
    });
    return response as any;
  } catch (error) {
    return null;
  }
}
