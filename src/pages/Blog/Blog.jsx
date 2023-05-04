import React from "react";

const Blog = () => {
  return (
    <div className="grid md:grid-cols-2 px-[5%] my-14">
      <div className="border border-blue-400 bg-blue-100 p-4">
        <h3 className="font-semibold text-2xl">
          Tell us the differences between uncontrolled and controlled
          components.
        </h3>
        <p className="mt-4 text-lg">
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </p>
      </div>
      <div className="border border-blue-400 bg-blue-100 p-4">
        <h3 className="font-semibold text-2xl">
          How to validate React props using PropTypes?
        </h3>
        <p className="mt-4 text-lg">
          PropTypes is a utility library included in React that allows
          developers to validate the type and shape of props passed to a
          component. With React props, you can send data to a component when you
          call on that component, including numbers, strings, functions,
          objects, and arrays. If you have multiple components, you can pass
          data from one component to another. PropTypes is React’s internal
          mechanism for adding type checking to component props.
        </p>
      </div>
      <div className="border border-blue-400 bg-blue-100 p-4">
        <h3 className="font-semibold text-2xl">
          Tell us the difference between nodejs and express js.
        </h3>
        <p className="mt-4 text-lg">
          Node.js and Express.js are two popular technologies used for building
          server-side web applications in JavaScript. Node.js is a server-side
          JavaScript runtime, while Express.js is a web framework.
        </p>
        <p className="mt-4 text-lg">
          Node.js provides a platform for running JavaScript code outside of a
          browser. It allows developers to use JavaScript to build server-side
          applications and perform operations like reading and writing files,
          connecting to databases, and making network requests.
        </p>
        <p className="mt-4 text-lg">
          Express.js is a web framework that provides a set of tools and
          features for building web applications on top of Node.js. Express.js
          allows developers to create a web server and define endpoints for
          handling different types of requests, such as GET, POST, PUT, and
          DELETE.
        </p>
      </div>
      <div className="border border-blue-400 bg-blue-100 p-4">
        <h3 className="font-semibold text-2xl">
          What is a custom hook, and why will you create a custom hook?
        </h3>
        <p className="mt-4 text-lg">
          In React, a custom hook is a function that starts with the prefix
          "use" and allows you to reuse stateful logic between different
          components. Custom hooks allow you to extract and share common
          functionality that can be reused across different components and
          reduce the amount of code duplication in your application
        </p>
      </div>
    </div>
  );
};

export default Blog;
