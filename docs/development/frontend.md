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

For managing state we are using [Jotai]("https://jotai.org/"), because it is a simple and lightweight state management library. It is also very easy to use, and it is very well documented. We recommend that you read the [Getting Started](https://jotai.org/docs/getting-started) section of the Jotai docs to get started. It uses the atom pattern, which is a simple pattern that allows you to create stateful values, and then use them in your components. It also allows you to scope your state to children of components using stores.  In the example below we will show you how to use atoms.

```tsx
import { atom, useAtom } from "jotai";

//First we define an atom, with a default value of 0.
const countAtom = atom(0);

const Counter = () => {
  //In the counter component we will use the atom, and get the current value of the atom, and a function to set the value of the atom.
  const [count, setCount] = useAtom(countAtom);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

In the example below we will showw you how to create scoped state using stores.

```tsx
import { atom, createStore, Provider } from "jotai";


//First we define an atom, we want to use in our store.
export const countAtom = atom(0);

//Then we create a store.
export const CounterStore = createStore();

//Now we will add the atom to the store, with the actual default value.
CounterStore.set(countAtom, 83);

const CounterPage = () => {
    return <Provider store={CounterStore}></Provider>
}

const Counter = () => {
  //In the counter component we will use the store to get the local value of the atom.
  const store = useStore();
  //By using store.get we will get the local value of the atom, which is 83.
  const count = store.get(countAtom);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => store.set(countAtom, count + 1)}>Increment</button>
    </div>
  );
};

```

## Data fetching

For a better developer experience, we are using [React Query](https://react-query.tanstack.com/) for fetching data. It is a simple library that allows you to fetch data from the backend, and then use that data in your components. It also allows you to cache the data, and invalidate the cache when needed. In the example below we will show you how to use the useQuery which is maily used to get data. In the second example we will show you how to use the useMutation hook, which is mainly used to send data to the backend.

```tsx
import { useQuery } from 'react-query';

const UserList = () => {
  const { isLoading, error, data } = useQuery('users', () =>
    fetch('https://api.endpoint').then((res) =>
    {
        if (!res.ok) {
            throw new Error('Failed to fetch users')

        return res.json()
    })
  );

  if (isLoading)
    return <div>Loading...</div>;

  if (error)
    return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

In this example, we're using the useQuery hook to fetch a list of users from a remote API. The first argument to useQuery is a unique key for this query (in this case, 'users'), and the second argument is a function that returns a promise which resolves with the data for this query.

The hook returns an object with three properties: isLoading (a boolean indicating whether the query is currently loading), error (an error object if the query failed), and data (the data returned by the query).

We're rendering different content depending on the state of the query. If isLoading is true, we're showing a "Loading..." message. If error is truthy, we're showing an error message. Otherwise, we're rendering the list of users returned by the query.

```tsx
import { useMutation } from 'react-query';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const {mutate, isLoading, error } = useMutation(
    (newUser) => fetch('https://api.endpoint', {
      method: 'POST',
      body: JSON.stringify(newUser),
    }),
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('users')
      },
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    mutate({ name, email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
      {error && <div>{error.message}</div>}
    </form>
  )
}
```

For fetching the data itself we are using ZodFetch which is a small wrapper around the default fetch function. It allows you to validate the data that you get from the backend. In the example below we will show you how to use ZodFetch.

```ts
import { z } from "zod";
import { SafeFetch } from "../utils"

//Here we define a schema for a user, a user is an object that has an id, name, and optionally an email.
const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().optional(),
});

//Here we define a function that will fetch a user from the backend, and validate the data that we get from the backend.
export const FetchUser = async () => {
    //Here we call the SafeFetch function, and pass in the schema, and the url of the endpoint. 
    //The SafeFetch will throw an error if the data does not match the schema, and if the request fails.
    return await SafeFetch(userSchema, "https://api.endpoint")
}

```

## Routing

For routing we are using [React Router](https://reactrouter.com/). We will be using the browser router, this means that we will be using the url to navigate between pages. In the example below we will show you how to use the browser router.

```tsx
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";

export const createBrowserRouter([{
    path: "/",
    component: <HomePage />,
    exact: true,
}, 
{
    path: "/about",
    component: <AboutPage />,
    exact: true,
}])
```

As you can is it is very easy to add new routes to the application. You just need to add a new object to the array. The path is the url that you want to navigate to, the component is the component that you want to render when you navigate to that url, and the exact is a boolean that tells the router if it should match the exact url or not.

## Styling
We are using Mantine for styling our components. We chose mantine because it is easy to extend, and it is very customizable. It also has a lot of components that we can use to build our application. In the example below we will show you how to use the Button component from Mantine, we will override the styles of the button, and we will add a custom class to the button.


```tsx
import { Button } from "@mantine/core";

export const MyButton = () => {
    return <Button 
        styles={(theme) => ({
          root: {
            backgroundColor: theme.colors.blue[1],
            border: 0,
            height: rem(42),
            paddingLeft: rem(20),
            paddingRight: rem(20),
          }
        })}
        >
        custom styled button
    </Button>
}
```