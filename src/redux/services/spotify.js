import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', 'e96beee599mshaa753d280696b27p11a55fjsn2502f452593f')
            headers.set('x-rapidapi-host', 'spotify23.p.rapidapi.com')

            return headers;
        }
    }),
    endpoints: (builder) => ({
        getBrowse: builder.query({ query: () => '/browse_all' })
    })
})

export const {
    useGetBrowseQuery,
} = spotifyApi;