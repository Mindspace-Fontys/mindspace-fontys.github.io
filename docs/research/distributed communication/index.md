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

| Feature           | REST | GrapQL |
| ----------------- | ---- | ------ |
| Maintainability   | o    | +      |
| Complexity        | +    | -      |
| Performance       | +    | -      |
| Flexibility       | -    | +      |
| Schema validation | -    | +      |
| Security          | +    | -      |

# Conclusion

Selecting a communication protocol is a critical decision that requires careful consideration of the project's specific requirements. In this section, we have discussed two possible protocols that were evaluated for MindSpaces, along with their respective advantages.

Both GraphQL and REST were deemed suitable options for MindSpaces. However, after careful evaluation, it was determined that REST would be the optimal choice due to its greater maturity and ease of implementation. While GraphQL offers greater flexibility and built-in schema validation, REST was selected based on its more established track record and the in-house knowledge available for its implementation.

The decision-making process for selecting a communication protocol should be guided by a thorough analysis of the project's needs, considering all relevant factors, and assessing the available options. The ultimate goal is to select a protocol that aligns with the project's specific needs and goals, and can be effectively implemented with the available resources.
