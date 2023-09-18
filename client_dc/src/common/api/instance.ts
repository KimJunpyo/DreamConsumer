import returnFetch from 'return-fetch';

export const extendedFetch = returnFetch({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: { 'Content-Type': 'application/json' },
  interceptors: {
    request: async (args) => {
      return args;
    },
    response: async (response, requestArgs) => {
      return response;
    },
  },
});
