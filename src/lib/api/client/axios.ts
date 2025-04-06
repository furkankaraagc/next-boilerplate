import a from 'axios';

export const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const axios = a.create({
  baseURL: API_BASE_URL,
});

// axios.interceptors.request.use(async (config) => {
//   const cookie = document.cookie
//     .split(';')
//     .map((c) => c.split('='))
//     .find(([cookieName]) => cookieName.trim() === 'NEXT_LOCALE');
//   config.headers.set('Accept-Language', (cookie && cookie[1]) ?? defaultLocale);
//   return config;
// });

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 403) {
//       verifyUser().then((user) => {
//         if (!user) {
//           toast.warning('Bu işlemi yapmak için giriş yapmanız gerekmektedir.');
//           window.location.href = '/giris-yap';
//         } else {
//           toast.warning('Bu işlemi yapmak için gerekli izniniz bulunmamaktadır.');
//         }
//       });
//     }

//     return Promise.reject(error);
//   },
// );
