import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
});

export const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
