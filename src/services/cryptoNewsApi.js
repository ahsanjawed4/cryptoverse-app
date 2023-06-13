import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Note: Change v1 to v2 on rapid api
const cryptoNewsApiHeaders = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  "X-RapidAPI-Key": "a08f68dcc5msh61d2962acced696p19bbadjsnb5e94e257a51",
};
const createRequest = (url) => ({ url: url, headers: cryptoNewsApiHeaders });
const baseUrl = "https://bing-news-search1.p.rapidapi.com";
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCryptoNewsApi: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
      /*
      query: (abc) =>
        createRequest(
          `/news/search?q=${abc.newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${abc.count}`
        ),*/
    }),
  }),
});
export const { useGetCryptoNewsApiQuery } = cryptoNewsApi;
