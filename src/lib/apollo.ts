import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohqt4703of01xt2gta95y1/master',
    cache: new InMemoryCache()
})