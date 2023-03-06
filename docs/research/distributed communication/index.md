---
sidebar_position: 20
---

# Distributed Communication
This section contains research about the communication between our distributed system (backend) and our front-end, in the research we are considering three options:
 - [REST](rest): Is an architectural style for designing web services that use HTTP methods and responses to enable communication between client and server.
 - [GraphQL](graphql): Is a query language and runtime for APIs that allows clients to request and receive only the data they need, and enables powerful developer tools.
 - [tRPC](trpc): Is an alternative to REST and GraphQL that uses TypeScript and Protocol Buffers to provide type safety, performance, and ease of use.

# Why tRPC is not an option
In the section tRPC we researched the viability of using tRPC for the communication between our backend and our front-end. In this research we came to a conclusion that tRPC is not a viable option to use for Mindspaces. Our backend uses Golang which tRPC does not support, so tRPC would only be an option if we would use typescript as our backend, which we chose not to do.

# REST vs GraphQL

- += good fit | - = bad fit | o = neutral | x = not applicable

| Feature          | REST       | GrapQL        |
| ---------------- | ---------- | ------------- |
| Maintainability  | o          | +             |
| Complexity       | +          | -             |
| Performance      | +          | -             |
| Flexibility      | -          | +             |
| Schema validation| -          | +             |
| Security         | +          | -             |

# Conclusion
