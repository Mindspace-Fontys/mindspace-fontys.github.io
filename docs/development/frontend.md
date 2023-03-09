---
sidebar_position: 20
---

# Web Application

This article will cover architecture of the web app, we will go over which framework we are using, how we are managing state, how we are fetching data, how we handle routing, and how we are styling our components.

## Framework

We are using [React](https://reactjs.org/) as the framework for our web application. We are using [Vite](https://vitejs.dev/) as the build tool for a better development experience. We are also using [Typescript](https://www.typescriptlang.org/) on top of React to make our code more robust and maintainable.

For learning React, we recommend using the improved [Beta Docs](https://beta.reactjs.org/), although not everything is supported in the Beta Docs, it is still a great resource to learn React. And if a subject is not available in the Beta Docs, you can always check the [Legacy Docs](https://reactjs.org/). We suggest that you use the "Get Started" and "Learn React" sections of the Beta Docs to start off.

## Schema Validation

As for schema validation, we are using [Zod](https://github.com/colinhacks/zod), Zod allows you to define a schema for your data, and then validate your data against that schema. This is useful for validating data that is coming from the backend, or data that is being sent to the backend. Zod also allows you to get the type of the schema, which is useful in collaboration with Typescript.

In the example below we will show you how to work with zod, and how to get the type of the schema.

```ts
import { z } from "zod";

//Here we define a schema for a user, a user is an object that has an id, name, and optionally an email.
const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().optional(),
});

// Here we extract the type of the schema, this will give us the type User, 
// which is an object with the same properties as the schema.
// This will result in the following type:
// type User = {
//   id: string;
//   name: string;
//   email?: string;
// };
type User = z.infer<typeof userSchema>;

// Now we will define a user, and validate it against the schema.
const user = {
  id: "123",
  name: "John Doe",
};

const parsedUser = userSchema.safeParse(user);
if (!parsedUser.success) {
  // If the user does not match the schema, we will throw an error.
  throw new Error(parsedUser.error);
}

// If the parse is succesfull we can get the data from the parsedUser object.
const parsedUserValue = parsedUser.data;
```

## Managing State

## Data fetching

## Routing

## Styling