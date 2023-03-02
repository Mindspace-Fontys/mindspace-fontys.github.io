---
title: Microservices
---

# Microservices Architecture

Microservices are a distributed architecture where each service is a separate process. The services communicate with each other using a message broker. Microservices are becoming increasingly popular because they allow developers to build and deploy applications faster.

![Microservices Architecture](microservices.png)

## Architecture

First I shall define what I understand by the term 'microservices'. Which I divide up into three parts, the gateway, the services themselves and the message broker. These three integral parts are the foundation of the microservices architecture.

### Gateway

The gateway is its own service. It is the entry point for all requests. It is responsible for routing the requests to the correct service. It also handles authentication and authorization. The gateway is the only service that is exposed to the outside world.

### Services

The services are the core of the microservices architecture. Each service is responsible for a single task. The services communicate with each other using a message broker. The services are not exposed to the outside world.

Each service can also have its own database. These databases are required to
be able to scale themselves as they are shared between multiple instances of the same service. They are not allowed to share data with other services.

### Message Broker

The message broker is responsible for routing messages between the services. It is the glue that holds the system together. The message broker is not exposed to the outside world.

## Advantages

For MindSpaces there are a few advantages to using a microservices architecture. These are:

- **Scalability**: Each service can be scaled independently. This means that I can scale the 'bottlenecks' in the system without having to scale the entire system.

- **Separation of Concerns**: Each service is focused on a single task. Developers will be able to focus on a single service without having to worry about the other services.

- **Fault Tolerance**: If one service fails, the other services will continue to work. This means that the system will be more resilient to failures.

- **Technology Independence**: Each service can be written in a different programming language. This means that developers can choose the best technology for the job.

- **Continuous Delivery**: Each service can be deployed independently. This means that I can deploy new features without
  re-deploying the entire system.

- **Testing**: Each service can be tested independently. This means that I can test the system in a more granular way. And find bugs faster.

## Disadvantages

While there are many advantages to using a microservices architecture, there are also some disadvantages. These are:

- **Complexity**: A distributed architecture is more complex than a monolithic architecture. While each service has its own responsibility (making it easier for the developer to understand a service), it also means that the developer has to understand how the services interact with each other. Additionally, the DevOps team has to manage multiple services instead of a single application.

- **Performance**: A distributed architecture can be sloIr than a monolithic architecture. This is because the services have to communicate with each other using a message broker. This adds an extra layer of complexity and increases the latency.

- **Security**: A distributed architecture can be less secure than a monolithic architecture. This is because the message broker adds an additional attack surface. This means that the message broker has to be secured properly. Additionally, each service has to be secured properly. This means that the developer has to be aware of security issues and vulnerabilities.

- **Business Logic**: A distributed architecture can be more difficult to maintain than a monolithic architecture. This is because the business logic is spread across multiple services. This means that the developer has to understand how the services interact with each other. Additionally, the developer has to understand how the services interact with the database. This can be difficult to grasp.

## Conclusion

In this section, I have discussed the microservices architecture. I have also discussed the advantages and disadvantages of this architecture. Finally, I want
to discuss why I think this architecture is a good fit for MindSpaces.

This architecture is a good fit for MindSpaces because it allows us to scale the project independently. For example, if I want to scale the project to support more users, I can scale the user service without having to scale the other services. This is not possible with a monolithic architecture.

Initially the microservices architecture was thought to be too complex for MindSpaces. I looked at requirements within college, which required us to use a
microservices (or other distributed) architecture. However, the research has
shown that it can actually be a good, great even, fit for MindSpaces.

While there are some disadvantages, I believe that the advantages outweigh the disadvantages. And that is why I recommend that we go with the microservices architecture.
