# Languages

The choice of programming language is a critical decision in software development. It affects the development process, the performance of the resulting software, and the ease of maintenance and expansion. As such, selecting the right programming language is a complex task that requires careful consideration of multiple factors. On this page, we will outline the programming languages that we considered for our project and the reasoning behind our final decision. We will explore the advantages and disadvantages of each language, as well as the criteria that we used to evaluate them.

![Loved Languages Stackoverflow Survey](loved_languages.png)

Chart from [Stackoverflow's Developer Survey 2021](https://insights.stackoverflow.com/survey/2021#technology-most-loved-dreaded-and-wanted)

## Criteria

:::info

The first step in selecting a programming language is to determine whether the language will be used for the backend or the frontend. We will treat them seperately in this research.

:::

Some criteria are specific to the backend, while others are specific to the frontend. If they are specific, that will be noted in the criteria section. The criteria that we used to evaluate the programming languages are as follows:

- [Popularity](https://insights.stackoverflow.com/survey/2021#technology-most-loved-dreaded-and-wanted): Popularity is an important factor to consider when selecting a programming language. It indicates the level of support that the language has, as well as the availability of resources such as documentation and tutorials. It also indicates the level of demand for developers who are proficient in the language.

- **Ease of Use:** The ease of use of a programming language is an important factor to consider when selecting a programming language. It indicates the level of effort required to learn the language and develop applications in it.

- **Type Safety (frontend):** For frontend development, type safety is an important factor to consider when selecting a programming language. It indicates the level of support that the language has for static typing, which can help to catch bugs and errors at compile time.

- **Performance:** The performance of a programming language is an important factor to consider when selecting a programming language. It indicates how efficiently the eventual software will run.

- **Scalability (backend):** The scalability of a programming language is an important factor to consider when selecting a programming language. It indicates how well the language can be used to develop large applications.

- **Standard Library:** The standard library of a programming language is an important factor to consider when selecting a programming language. It indicates the level of support that the language has for common tasks such as file I/O, networking, and database access.

- [Web Frameworks](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-webframe-love-dread): Frontend frameworks are a critical part of frontend development. They provide a set of tools that make it easier to develop applications. The availability of frameworks is an important factor to consider when selecting a programming language.

## Frontend

While the frontend is a web application, developing it can be done in a variety of languages. The most common languages for frontend development will be explored in this section.

### Languages Considered

- [JavaScript](./javascript.md): JavaScript is the most popular programming language in the world. It is used to develop web applications, mobile applications, desktop applications, and more.

- [TypeScript](./typescript.md): TypeScript is a superset of JavaScript. It adds static typing and other features to JavaScript. It is used to develop web applications, mobile applications, desktop applications, and more.

- [ELM](./elm.md): ELM is a functional programming language that compiles to JavaScript. It is used to develop web applications, mobile applications, desktop applications, and more.

- [Dart](./dart.md): Dart is a programming language developed by Google. It is used to develop web applications, mobile applications, desktop applications, and more.

### Comparison Table

:::info

The criteria in the table below are ordered from most important to least important. If any of the criteria marked as "strong disadventage", we will not consider the language. Therefore we will stop scoring the criteria from that point on.

:::

| Criteria             | [JavaScript](./javascript.md) | [TypeScript](./typescript.md) | [ELM](./elm.md) | [Dart](./dart.md) |
| -------------------- | ----------------------------- | ----------------------------- | --------------- | ----------------- |
| Popularity           | +                             | +                             | o               | o                 |
| Ease of Use          | +                             | o                             | -               | o                 |
| Type Safety          | -                             | +                             | +               | o                 |
| Performance          |                               | +                             |                 | +                 |
| Standard Library     |                               | +                             |                 | +                 |
| Available Frameworks |                               | +                             |                 | -                 |

\+ = Strong Advantage | - = Strong Disadvantage | o = Neutral

## Backend

Choosing the right programming language for the backend is a critical decision. It affects maintainability, performance, and scalability. As such, selecting the right programming language is a complex task that requires careful consideration of our criteria. The most common languages for backend development will be explored in this section.

### Languages Considered

- [Rust](./rust.md): Rust is a general-purpose programming language developed by Mozilla. It is used to develop web applications, mobile applications, desktop applications, and more.

- [C#](./csharp.md): C# is a general-purpose programming language developed by Microsoft. It is used to develop web applications, mobile applications, desktop applications, and more.

- [Java](./java.md): Java is a general-purpose programming language developed by Oracle. Unlike C#, it follows the "compile once, run anywhere" paradigm. It is used to develop web applications, mobile applications, desktop applications, and more.

- [Go](./go.md): Go is a general-purpose programming language developed by Google. It is used to make scalable network services. It is used to develop web applications, mobile applications, desktop applications, and more.

### Comparison Table

:::info

The criteria in the table below are ordered from most important to least important. If any of the criteria marked as "strong disadventage", we will not consider the language. Therefore we will stop scoring the criteria from that point on.

:::

| Criteria                   | [Rust](./rust.md) | [C#](./csharp.md) | [Java](./java.md) | [Go](./go.md) |
| -------------------------- | :---------------: | :---------------: | :---------------: | :-----------: |
| Popularity                 |         o         |         +         |         +         |       o       |
| Ease of Use                |         -         |         +         |         +         |       +       |
| Performance                |                   |         o         |         o         |       +       |
| Scalability                |                   |         o         |         o         |       +       |
| Standard Library           |                   |         +         |         +         |       +       |
| Availability of Frameworks |                   |         +         |         +         |       +       |

\+ = Strong Advantage | - = Strong Disadvantage | o = Neutral

## Conclusion

- **Frontend**: For frontend development TypeScript is the best option. It is the most popular language (next to JavaScript), and as such, it has a large number of resources available. It also has a large number of frameworks available, and it is easy to learn and use. It is extremely popular language, and as such, it has a large number of resources available. It is also easy to learn and use. Finally, type safety is important when working in a team, and therefore JavaScript was not considered for the frontend.

- **Backend:** For backend development, Go is the best option. It is the most popular language for distributed systems, and therefore its standard library contains a plethora of tools for networking, database access, and more. It is also easy to learn and use. Finally, it's slogan is literally "Build simple, secure, scalable systems with Go". And it's mascotte is a gopher. What more could you want?

I would like to give some context as to why I originally thought a distributed architecture to not be a good fit, these are the reasons why I wanted to research them:

- Complexity: The more components you have, the more complex your system becomes. This is especially true when you have to manage the communication between the components. This is why I thought that a distributed architecture would be too complex for a small team.

- Performance: The more components you have, the more overhead you have. This is especially true when you have to manage the communication between the components. This is why I thought that a distributed architecture would be too slow for a small team.
