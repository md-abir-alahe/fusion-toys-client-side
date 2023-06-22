import React from 'react';
import useTitle from '../../features/Title/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='my-10'>
            <div className='mb-11'>
                <h2 className='text-center text-6xl font-boogaloo font-semibold text-back'>Blog</h2>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-quaternary">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content bg-quaternary">
                    <p>Access Token and Refresh Token are commonly used in authentication systems to secure and manage user sessions. Here's an explanation of what they are, how they work, and where they should be stored on the client-side:

                        Access Token:

                        An Access Token is a credential that represents the authorization granted to a client (such as a web or mobile application) to access protected resources on behalf of a user.
                        It is typically a string of characters issued by an authentication server after the user successfully logs in or authorizes the application.
                        The Access Token is usually short-lived and has an expiration time. It contains information like the user's identity and permissions.
                        When making API requests to access protected resources, the client includes the Access Token in the request's headers or as a parameter to authenticate and authorize the request.
                        Refresh Token:

                        A Refresh Token is a long-lived credential used to obtain a new Access Token when the current one expires.
                        It is issued alongside the Access Token and is stored securely on the client-side, often as an HTTP-only cookie or in a secure storage mechanism like browser's local storage or device's keychain.
                        Unlike the Access Token, the Refresh Token is typically not sent with every request to the server. Instead, it is used to obtain a new Access Token when needed.
                        When the Access Token expires, the client sends a request to the authentication server, presenting the Refresh Token. If the Refresh Token is valid and not expired, the server issues a new Access Token without requiring the user to re-enter their credentials.
                        Storage on the Client-side:

                        Access Tokens should be stored securely on the client-side to prevent unauthorized access.
                        It is recommended to store the Access Token in memory (e.g., as a variable) rather than persistently storing it in insecure locations like browser's local storage.
                        The Refresh Token should be stored securely, as it has a longer lifespan and provides more significant access. Common practices include storing it as an HTTP-only cookie or in a secure storage mechanism like browser's local storage or device's keychain.
                        Storing tokens securely helps mitigate risks such as cross-site scripting (XSS) attacks, where an attacker could potentially steal the tokens and impersonate the user.
                        It's important to follow security best practices and consider the specific requirements and risks of your application when implementing and storing access and refresh tokens on the client-side.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium ">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL and NoSQL databases are two distinct types of database management systems that differ in their data models, query languages, and overall design principles. Here's a comparison of SQL and NoSQL databases:

                        Data Model:

                        SQL databases are based on the relational data model, where data is organized into tables with predefined schemas, and relationships between tables are established through keys.
                        NoSQL databases employ various data models, such as key-value, document, columnar, and graph. They offer more flexibility in terms of data structures and schemaless designs.
                        Scalability:

                        SQL databases typically scale vertically by increasing the hardware resources of a single server. This approach has limitations.
                        NoSQL databases are designed to scale horizontally by distributing data across multiple servers. They can handle large amounts of data and high traffic loads more efficiently.
                        Schema:

                        SQL databases enforce a rigid schema, meaning the structure and types of data must be defined in advance. Altering the schema can be complex and may require downtime.
                        NoSQL databases are schemaless or have flexible schemas. They allow for dynamic and evolving data structures without the need for predefined schemas.
                        Query Language:

                        SQL databases use Structured Query Language (SQL) for defining and manipulating data. SQL provides a standardized and powerful language for querying and managing relational data.
                        NoSQL databases use a variety of query languages specific to their data models. For example, key-value stores may use simple get and put operations, while document databases often support querying with JSON-like syntax.
                        Transaction Support:

                        SQL databases typically provide strong transactional capabilities, ensuring data integrity and ACID (Atomicity, Consistency, Isolation, Durability) properties.
                        NoSQL databases vary in their transactional support. Some NoSQL databases offer limited transactional capabilities, while others prioritize scalability and performance over strict consistency.
                        Use Cases:

                        SQL databases are well-suited for applications that require complex relationships between data, such as financial systems, e-commerce platforms, and content management systems.
                        NoSQL databases are advantageous for handling large volumes of rapidly changing or unstructured data, making them suitable for real-time analytics, content caching, social networks, and IoT applications.
                        Choosing between SQL and NoSQL databases depends on the specific requirements of the application, including data structure, scalability needs, query patterns, and development flexibility.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium bg-quaternary">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content bg-quaternary">
                    <p>
                        Express.js is a popular and lightweight web application framework for Node.js. It provides a simple and minimalist approach to building web servers and APIs. Express.js is known for its simplicity, flexibility, and robustness, making it a popular choice for developing web applications and APIs.

                        Express.js allows developers to handle HTTP requests, define routes, manage middleware, and render dynamic web pages or deliver JSON responses. It provides a set of functions and methods that make it easy to handle HTTP methods like GET, POST, PUT, and DELETE, and perform tasks such as parsing request bodies, handling sessions, and managing cookies.

                        With Express.js, developers have the flexibility to customize and extend the functionality of their web applications by using middleware. Middleware functions can be added to the request/response cycle to perform tasks like authentication, logging, error handling, and more. The modular and flexible nature of Express.js allows developers to create scalable and maintainable web applications.

                        Nest.js, on the other hand, is a progressive and opinionated framework for building efficient and scalable server-side applications. It is built on top of Node.js and leverages TypeScript as its primary language. Nest.js combines elements of Object-Oriented Programming (OOP), Functional Programming (FP), and Reactive Programming to provide a robust and modular architecture for building server-side applications.

                        Nest.js follows a modular structure and uses decorators, dependency injection, and TypeScript metadata to define modules, controllers, services, and other application components. It also provides built-in support for features like routing, validation, authentication, caching, and more.

                        Nest.js is designed to be highly extensible and supports integration with various libraries and tools commonly used in the Node.js ecosystem. It promotes code reusability, testability, and maintainability through its modular architecture and dependency injection system.

                        Overall, Nest.js aims to provide a structured and scalable approach to building server-side applications in Node.js, leveraging the capabilities of TypeScript and embracing modern development principles.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium ">
                    What is MongoDB aggregate and how does it work?
                </div>
                <div className="collapse-content">
                    <p>MongoDB's aggregate is a powerful framework for performing data aggregation operations on MongoDB collections. It allows you to process and transform data, apply various computations, and retrieve aggregated results in a flexible and efficient manner.

                        The aggregate framework in MongoDB operates on a collection using a pipeline approach. A pipeline consists of multiple stages, where each stage performs a specific operation on the input documents and passes the results to the next stage. These stages can include operations like filtering, grouping, sorting, projecting, and performing complex computations.

                        The pipeline stages are executed sequentially, allowing you to shape and manipulate the data as it flows through each stage. This enables you to perform complex aggregations and transformations on your data efficiently.

                        Aggregation pipelines in MongoDB are constructed using a set of operators and stages. Operators like $match, $group, $sort, $project, and $sum are commonly used to perform filtering, grouping, sorting, projection, and mathematical operations respectively.

                        By using the aggregate framework, you can perform a wide range of data aggregation tasks in MongoDB, including generating summary statistics, calculating averages, finding maximum and minimum values, grouping data by certain criteria, and performing more advanced computations.

                        It's worth noting that to understand and utilize the aggregate framework effectively, familiarity with the MongoDB query language and its various operators is necessary. The MongoDB documentation provides detailed information and examples on how to construct and use aggregate pipelines for different aggregation scenarios.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;