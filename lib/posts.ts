export interface PostType {
  id: string;
  title: string;
  content: string;
}

export const getPosts = (): PostType[] => {
  return [
    {
      id: '1',
      title: 'First Post',
      content:
        'This is the content of the first post. It provides an introduction to the blog and sets the stage for future posts. In this blog, we will cover a wide range of topics related to web development, programming languages, and software engineering best practices. Our goal is to provide valuable insights and practical advice that can help both beginners and experienced developers improve their skills and stay up-to-date with the latest trends in the industry. We hope you find our content informative and engaging, and we look forward to sharing our knowledge with you.',
    },
    {
      id: '2',
      title: 'Second Post',
      content:
        'This is the content of the second post. It delves deeper into the topics introduced in the first post and provides more detailed information. In this post, we will explore the importance of continuous learning in the field of software development. The technology landscape is constantly evolving, and it is crucial for developers to keep their skills current. We will discuss various resources and strategies for staying up-to-date, including online courses, coding bootcamps, and professional communities. By the end of this post, you will have a better understanding of how to navigate the ever-changing world of technology and continue growing as a developer.',
    },
    {
      id: '3',
      title: 'Understanding TypeScript',
      content:
        'This post explains the basics of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript. TypeScript offers static typing, which can help catch errors early in the development process and improve code quality. In this post, we will cover the fundamental concepts of TypeScript, including types, interfaces, and classes. We will also discuss the benefits of using TypeScript in your projects, such as improved code readability and maintainability. By the end of this post, you will have a solid understanding of TypeScript and how it can enhance your development workflow.',
    },
    {
      id: '4',
      title: 'JavaScript ES6 Features',
      content:
        'This post explores the new features introduced in ECMAScript 6 (ES6), including arrow functions, classes, template literals, and more. ES6 brought significant improvements to the JavaScript language, making it more powerful and easier to work with. In this post, we will provide detailed explanations and examples of the most important ES6 features. We will also discuss how these features can be used to write cleaner and more efficient code. By the end of this post, you will be well-versed in the latest advancements in JavaScript and ready to apply them in your projects.',
    },
    {
      id: '5',
      title: 'React Hooks in Depth',
      content:
        'This post provides an in-depth look at React Hooks, a feature that allows you to use state and other React features without writing a class. Hooks were introduced in React 16.8 and have since become an essential part of modern React development. In this post, we will cover the basics of Hooks, including useState and useEffect, as well as more advanced hooks like useContext and useReducer. We will also discuss best practices for using hooks in your applications and how they can help you write more concise and maintainable code. By the end of this post, you will have a thorough understanding of React Hooks and how to leverage them in your projects.',
    },
    {
      id: '6',
      title: 'Building REST APIs with Node.js',
      content:
        'This post covers the process of building RESTful APIs using Node.js and Express. REST APIs are a popular way to structure and expose data to client applications. In this post, we will walk through the steps of setting up a Node.js project, creating routes, and handling requests and responses. We will also discuss best practices for designing and securing your APIs, as well as how to use middleware to add functionality to your endpoints. By the end of this post, you will have the knowledge and skills to build robust and scalable REST APIs with Node.js.',
    },
    {
      id: '7',
      title: 'Introduction to GraphQL',
      content:
        'This post introduces GraphQL, a query language for your API, and explains how it can be used as an alternative to REST for fetching data. GraphQL allows clients to request exactly the data they need, reducing over-fetching and under-fetching of data. In this post, we will cover the basics of GraphQL, including its syntax, schema, and resolvers. We will also discuss the benefits of using GraphQL, such as improved performance and flexibility. By the end of this post, you will have a solid understanding of GraphQL and how it can be used to build efficient and flexible APIs.',
    },
    {
      id: '8',
      title: 'Mastering CSS Grid',
      content:
        'This post dives into CSS Grid, a powerful layout system for the web. CSS Grid allows you to create complex and responsive layouts with ease. In this post, we will cover the basics of CSS Grid, including grid containers, grid items, and grid lines. We will also discuss advanced techniques for creating intricate layouts, such as nested grids and grid template areas. By the end of this post, you will have a comprehensive understanding of CSS Grid and how to use it to build modern and responsive web designs.',
    },
    {
      id: '9',
      title: 'Getting Started with Docker',
      content:
        "This post provides a beginner's guide to Docker, a tool designed to make it easier to create, deploy, and run applications by using containers. Docker allows you to package your application and its dependencies into a single container, ensuring that it runs consistently across different environments. In this post, we will cover the basics of Docker, including how to install it, create Dockerfiles, and build and run containers. We will also discuss best practices for using Docker in your development workflow. By the end of this post, you will have a solid understanding of Docker and how it can streamline your development and deployment processes.",
    },
    {
      id: '10',
      title: 'Deploying Applications with Kubernetes',
      content:
        'This post explains how to deploy, scale, and manage containerized applications using Kubernetes, an open-source container orchestration platform. Kubernetes provides a robust and scalable solution for managing containerized applications in production. In this post, we will cover the basics of Kubernetes, including its architecture, components, and key concepts such as pods, services, and deployments. We will also discuss best practices for deploying and managing applications with Kubernetes, as well as how to use tools like Helm to simplify the process. By the end of this post, you will have a thorough understanding of Kubernetes and how to use it to manage your containerized applications.',
    },
  ];
};
