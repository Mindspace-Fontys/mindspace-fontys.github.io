---
sidebar_position: 10
---

# tRPC
tRPC, or Typescript Remote Procedure Call, is an alternative to REST or GraphQL that provides type safety between the front-end and back-end.

# Advantages of tRPC
 - **Fullstack typesafety**: tRPC uses typescript to provide fullstack typesafety. This means that the front-end and back-end can both use typescript to ensure that the data is correct.
 - **Easy to use**: tRPC is very easy to use, because it is based on typescript, it is very easy to use typescript to define the data that is sent and received.
 - **Framework agnostic**: tRPC is framework agnostic, which means that it can be used with any framework, such as React, Vue, Svelte, Next.js, etc.

# Disadvantages of tRPC
 - **Monorepo required**: tRPC requires a monorepo, which means that both the front-end and back-end have to be in the same repository.
 - **Slow and big payloads**: tRPC is slower and has bigger payloads than both REST and GraphQL, because it encodes the type of the data in each request.
 - **No Golang support**: tRPC is based on typescript so it does not support Golang, which is the language we use in the back-end.

# Conclusion
To conclude the research on whether tRPC is a good fit for mindspaces, tRPC is not a good fit for mindspaces because we want to use Golang in the back-end, which tRPC does not support. REST and GraphQL both support the use of Golang.

# Sources
- [tRPC](https://trpc.io/)