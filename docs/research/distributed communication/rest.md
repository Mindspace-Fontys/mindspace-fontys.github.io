---
sidebar_position: 10
---

# REST
REST (Representational State Transfer) is a software architectural style that is commonly used for creating web services. It is based on the HTTP protocol and uses HTTP methods and responses to enable communication between client and server. REST provides a standard interface for accessing and manipulating resources.

# Advantages of REST
- **Performance**: REST is very performant because it is very simple. This means that REST queries take less time than similar GraphQL queries.
- **Widespread adoption**: REST is used by 93.4% of API developers according to Nordic API's, which means that there are a lot of tools for REST. This means that you don't have to create your own security tools for REST.
- **Complexity**: REST is a software architectural style, it does have a lot of features, so it is not as complex as GraphQL.

# Disadvantage of REST
- **Flexibility**: REST is not very flexible because it doesn't allow the client to select exactly what they need. This means that the client can't fine-tune their queries to get a smaller payload, which results in a slower query.
- **Type safety**: REST is not very type safe because it doesn't have a strict schema. This means that the client and the back-end can differ from schema. This might be a source of bugs.

# Conclusion
In conclusion, REST is a widely adopted software architectural style used for creating web services. It is simple, performant, and has a lot of tools available. However, it does lack flexibility and type safety, which can result in slower queries and potential bugs. Despite its limitations, REST remains a popular choice for API developers due to its simplicity and performance. It is important for developers to carefully consider the trade-offs between REST and other options such as GraphQL when choosing the best solution for their specific needs. For example if you need a defined schema to which both the client and the back-end can adhere, GraphQL might be a better choice. However, if you need a simple, performant, and widely adopted solution, REST might be a better choice.

- [REST Complexity](https://blog.logrocket.com/graphql-vs-rest-api-why-you-shouldnt-use-graphql)
- [Nordic API's](https://nordicapis.com/20-impressive-api-economy-statistics/#:~:text=93.4%25%20of%20API%20Developers%20Are%20Still%20Using%20RESTtext=However%2C%20REST%20remains%20the%20most,a%20staggering%2093.4%25%20adoption%20rate.)