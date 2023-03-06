---
sidebar_position: 10
---

# Architecture

This section contains information about the architecture of MindSpaces. For our
research, we are considering two different architectures:

- [Microservices](microservices.md): This architecture is based on the
  microservices architecture. It is a distributed architecture where each
  service is a separate process. The services communicate with each other
  using a message broker.

- [Serverless](serverless.md): This architecture is based on the serverless
  architecture. It is a distributed architecture where each service is a
  separate function. It allows developers to focus on writing and deploying code without having to manage the underlying infrastructure. Instead of provisioning and managing servers, serverless architecture leverages cloud computing services to automatically allocate and manage the resources needed to run the code

## Distributed Architectures

For MindSpaces we chose to go with a distributed architecture. This
is for a few reasons. Initially due to the requirement from school, however, the research has shown that this is a good fit for MindSpaces.

Distributed architectures are a good fit for MindSpaces because it allows us to scale the project independently. For example, if we want to scale the project to support more users, we can scale the user service without having to scale the other services. This is not possible with a monolithic architecture.

Another reason why a distributed architecture is a good fit for MindSpaces, is because it allows us to make each service independent. This means that we can
keep them simple and focused on a single task. This makes it easier to understand
and maintain the codebase.

Finally, a monolithic architecture is not a good fit for MindSpaces because it
is not a good fit for a distributed team. Our team contains more than five members that work both on-site and remotely. Synchronizing the work of a monolithic architecture can be difficult. Certainly not impossible, but it is easier to work with a distributed architecture when you have a distributed team.

## Serverless & Microservices vs Monolithic

- += good fit | - = bad fit | o = neutral | x = not applicable

| Feature          | Serverless | Microservices | Monolithic |
| ---------------- | ---------- | ------------- | ---------- |
| Scalability      | +          | +             | -          |
| Maintainability  | +          | +             | -          |
| Complexity       | -          | o             | +          |
| Performance      | o          | o             | o          |
| Security         | +          | o             | +          |
| Cost             | o          | +             | -          |
| Team Development | o          | +             | -          |

## Conclusion

In this section, we have discussed the two different architectures that we are
considering for MindSpaces. We have also discussed why these architectures are
a good fit for MindSpaces.

Our final choice is ...
