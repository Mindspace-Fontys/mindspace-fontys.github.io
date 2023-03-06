---
sidebar_position: 20
---

# GraphQL
GraphQL is a query language and runtime for APIs that allows clients to request and receive only the data they need. It does this by having a strict schema from which the client selects each field they want from a request. This allows the client to fetch exactly what they need and they don't over- or under-fetch the data. Because of this, GraphQL is a very powerful tool, but with powerful tools, there are often other drawbacks.

# Advantages of GraphQL
- **Maintainability**: GraphQL is very maintainable because it has a strict schema, which means that the client and the back-end can both adhere to the same schema. This means that the client and the back-end can both be developed separately, because they both know exactly what data they can request and send.
- **Flexibility**: GraphQL is very flexible because it allows the client to select exactly what they need. This means that the client can fine-tune their queries to get a smaller payload, which results in a faster query.
- **Schema validation**: GraphQL has a strict schema, which means that the client and the back-end can both adhere to the same schema. This means that the client and the back-end can both be developed separately, because they both know exactly what data they can request and send.

# Disadvantages of GraphQL
- **Performance**: GraphQL is not very performant because it has to go through more steps than a REST request. This means that GraphQL queries take longer than similar REST queries.
- **Complexity**: GraphQL adds a lot of complexity by adding things like queries, mutators, resolvers, and higher-order components. This might be a problem for some more inexperienced developers.
- **Security**: GraphQL is not as popular as REST, which means that there are less security tools for GraphQL. This means often means that you have to create your own security tools for GraphQL.

# Conclusion
GraphQL definitely has good use cases, but we still have to see if the use case fits our project. The best use case for GraphQL is when you need a defined schema to which both the client and the back-end can adhere. For instance, when the front-end and back-end teams are two separate teams, GraphQL can be very useful. Because there doesn't need to be any communication between the 2 teams once the schema is defined and honored. GraphQL could also be very useful for creating public APIs because it allows unknown clients to fetch exactly what they want, not the predefined set of data that you would get from a REST API.

# Sources
- [GraphQL Complexity](https://blog.logrocket.com/graphql-vs-rest-api-why-you-shouldnt-use-graphql)
- [GraphQL Security](https://research.aimultiple.com/graphql-vs-rest/)