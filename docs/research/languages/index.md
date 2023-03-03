# Language

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

- **Performance:** The performance of a programming language is an important factor to consider when selecting a programming language. It indicates how efficiently the eventual software will run.

- **Scalability (backend):** The scalability of a programming language is an important factor to consider when selecting a programming language. It indicates how well the language can be used to develop large applications.

- **Standard Library:** The standard library of a programming language is an important factor to consider when selecting a programming language. It indicates the level of support that the language has for common tasks such as file I/O, networking, and database access.

- **Available Frameworks (frontend):** Frontend frameworks are a critical part of frontend development. They provide a set of tools that make it easier to develop applications. The availability of frameworks is an important factor to consider when selecting a programming language.

## Frontend

While the frontend is a web application, developing it can be done in a variety of languages. The most common languages for frontend development will be explored in this section.

### Languages Considered

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): JavaScript is the most popular programming language in the world. It is used to develop web applications, mobile applications, desktop applications, and more.

- [TypeScript](https://www.typescriptlang.org/): TypeScript is a superset of JavaScript. It adds static typing and other features to JavaScript. It is used to develop web applications, mobile applications, desktop applications, and more.

- [ELM](https://elm-lang.org/): ELM is a functional programming language that compiles to JavaScript. It is used to develop web applications, mobile applications, desktop applications, and more.

- [Dart](https://dart.dev/): Dart is a programming language developed by Google. It is used to develop web applications, mobile applications, desktop applications, and more.

### Comparison Table

:::info

The criteria in the table below are ordered from most important to least important. If any of the criteria marked as "Terrible", we will not consider the language. Therefore we will stop scoring the criteria from that point on.

:::

\+ = Amazing | - = Terrible | o = Neutral

If you would like more information on how we scored each language, you can click
on the score to see the source.

| Criteria             | JavaScript                              | TypeScript                              | ELM                    | Dart                                                                       |
| -------------------- | --------------------------------------- | --------------------------------------- | ---------------------- | -------------------------------------------------------------------------- |
| Popularity           | +                                       | +                                       | o                      | o                                                                          |
| Ease of Use          | +                                       | o                                       | [-](#elms-ease-of-use) | o                                                                          |
| Performance          | +                                       | +                                       |                        | [+](https://programming-language-benchmarks.vercel.app/dart-vs-javascript) |
| Standard Library     | o                                       | +                                       |                        | +                                                                          |
| Available Frameworks | [+](#typescript--javascript-frameworks) | [+](#typescript--javascript-frameworks) |                        | -                                                                          |

#### ELM's Ease of Use

Due to ELM being a functional language, it is vastly different from the usual
frontend languages. This makes it more difficult to learn and use. For this
reason, we have given it a score of -.

#### TypeScript & JavaScript Frameworks

TypeScript and JavaScript are both popular languages, and as such, they have a
large number of frameworks available. The beauty of TypeScript is that it is
a superset of JavaScript, meaning that any JavaScript framework can be used
with TypeScript.

## Backend

Choosing the right programming language for the backend is a critical decision. It affects maintainability, performance, and scalability. As such, selecting the right programming language is a complex task that requires careful consideration of our criteria. The most common languages for backend development will be explored in this section.

### Languages Considered

- [Rust](https://www.rust-lang.org/): Rust is a general-purpose programming language developed by Mozilla. It is used to develop web applications, mobile applications, desktop applications, and more.

- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/): C# is a general-purpose programming language developed by Microsoft. It is used to develop web applications, mobile applications, desktop applications, and more.

- [Java](https://www.java.com/en/): Java is a general-purpose programming language developed by Oracle. Unlike C#, it follows the "compile once, run anywhere" paradigm. It is used to develop web applications, mobile applications, desktop applications, and more.

- [Go](https://golang.org/): Go is a general-purpose programming language developed by Google. It is used to make scalable network services. It is used to develop web applications, mobile applications, desktop applications, and more.

### Comparison Table

:::info

The criteria in the table below are ordered from most important to least important. If any of the criteria marked as "Terrible", we will not consider the language. Therefore we will stop scoring the criteria from that point on.

:::

\+ = Amazing | - = Terrible | o = Neutral

If you would like more information on how we scored each language, you can click
on the score to see the source.

| Criteria         | Rust | C#  | Java | Go  |
| ---------------- | ---- | --- | ---- | --- |
| Popularity       | +    | +   | +    | +   |
| Ease of Use      | -    | o   | o    | +   |
| Performance      |      | o   | o    | +   |
| Scalability      |      | o   | o    | +   |
| Standard Library |      | o   | +    | +   |

## Conclusion

- **Frontend**: For frontend development TypeScript is the best option. It is the most popular language (next to JavaScript), and as such, it has a large number of resources available. It also has a large number of frameworks available, and it is easy to learn and use. It is extremely popular language, and as such, it has a large number of resources available. It is also easy to learn and use. Finally, type safety is important when working in a team, and therefore JavaScript was not considered for the frontend.

- **Backend:** For backend development, Go is the best option. It is the most popular language for distributed systems, and therefore its standard library contains a plethora of tools for networking, database access, and more. It is also easy to learn and use. Finally, it's slogan is literally "Build simple, secure, scalable systems with Go". And it's mascotte is a gopher. What more could you want?
