const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
export const customFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`${BASE_URL}${url}`, options);

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  const data = await res.json();
  return data;
};
