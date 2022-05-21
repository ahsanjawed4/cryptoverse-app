import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "a08f68dcc5msh61d2962acced696p19bbadjsnb5e94e257a51",
};
const createRequest = (url) => ({ url: url, headers: cryptoApiHeaders });
const baseUrl = "https://coinranking1.p.rapidapi.com";
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`/exchange/-zdvbieRdZ/coins`),
    }),
    getCrytpoDetail: builder.query({
      query: (coin__id) => createRequest(`/coin/${coin__id}`),
    }),
  }),
});
export const {
  useGetCryptoQuery,
  useGetExchangesQuery,
  useGetCrytpoDetailQuery,
} = cryptoApi;
/*
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "a08f68dcc5msh61d2962acced696p19bbadjsnb5e94e257a51",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";
const ApiRequest = (url) => ({ url: url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
  reducerPath: "cryptoAhsan",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => ApiRequest("/exchanges"),
    }),
  }),
});
export const { usegetCryptosQuery } = cryptoApi;*/
/*import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const cryptoApiHeader = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "a08f68dcc5msh61d2962acced696p19bbadjsnb5e94e257a51",
};

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeader,
});
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: (builder) => {
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    });
  },
});
export const { usegetCryptosQuery } = cryptoApi;*/
