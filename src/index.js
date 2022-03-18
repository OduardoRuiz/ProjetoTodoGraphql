import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://correct-maggot-75.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'YKKOTAyD4vHCe81H4ZRvBT6bXLNCg2mxIv9q0WkIokzD7247zmrQpUzjol0G2lJ2'
    },
    cache: new InMemoryCache()
});

console.log(client)

ReactDOM.render(<ApolloProvider client={client}>
    <App/>
</ApolloProvider>, document.getElementById('root'))