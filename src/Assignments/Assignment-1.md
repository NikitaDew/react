[Q] Emmet : VS code helper extension which provides shorthands and snippets which makes dev faster. Also includes intellisense.
``````````

[Q] Library vs Framework Difference: 
`````````````````````````````````````
The technical difference between a framework and library lies in a term called inversion of control.
When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library.
When you use a framework, the framework is in charge of the flow.
It provides some places for you to plug in your code, but it calls the code you plugged in as needed.


- [] Inversion of Control: 
`````````````````````````
A framework typically provides a pre-defined architecture and a set of rules and constraints that the developer must follow, whereas a library typically provides a set of tools and functions that the developer can use as needed.

- [] Code Control: 
`````````````````
In a framework, the developer generally writes code that "plugs into" the framework, whereas with a library, the developer writes code that calls the library's functions or methods.

- [] Flexibility: 
````````````````
Libraries are typically more flexible and provide more control to the developer than frameworks, which are generally more rigid and have a higher learning curve.


[Q] CDN : Content delivery network -> 
```````````````````````````````````
A network of servers that distributes content from an “origin” server throughout the world by caching content close to where 
each end user is accessing the internet via a web-enabled device.


[Q] Why is React known as React?
````````````````````````````````
React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data.
React's primary goal is to simplify the creation of complex, interactive user interfaces by breaking them down into smaller, reusable components. 
These components are built using a declarative syntax that allows developers to describe what the interface should look like at any given moment, and 
React takes care of efficiently updating the DOM (Document Object Model) as needed when the data changes.


[Q] What is crossorigin in script tag? 
``````````````````````````````````````
The crossorigin attribute in the <script> tag is used to specify whether or not a script loaded from a different domain should be allowed to access the resources of the current document.
When a script is loaded from a different domain, the browser may restrict its access to certain resources, such as cookies or local storage, as a security measure to prevent cross-site scripting attacks. 
The crossorigin attribute allows you to specify whether or not the script should be allowed to bypass these restrictions.

The crossorigin attribute can take one of three values:
anonymous: The script is loaded without any credentials, such as cookies or authentication tokens, and therefore cannot access resources that require authentication. 

use-credentials: The script is loaded with credentials and can access resources that require authentication. However, the server hosting the script must also allow credentials to be passed in order for this to work.

null: The script is loaded without any CORS validation, which is equivalent to not including the attribute at all. This value is only used for same-origin scripts and should not be used for scripts loaded from a different domain.


[Q] What is difference between React and ReactDOM? 
``````````````````````````````````````````````````
React is a JavaScript library for building user interfaces. 
It provides a way to create reusable UI components and manage their state and props. 
React allows you to create dynamic, high-performance web applications with a declarative and component-based approach. 
React provides the core functionality for building React applications, including the virtual DOM, component lifecycle methods, and JSX syntax.

ReactDOM, on the other hand, is a library that provides the DOM-specific methods that React needs to interact with the browser DOM. 
ReactDOM is responsible for rendering React components into the browser DOM and updating them when changes occur. 
It provides methods like ,ReactDOM.render(), which takes a React component and mounts it to a DOM element,andReactDOM.unmountComponentAtNode(), which unmounts a React component from the DOM.


[Q] What is difference between react.development.js and react.production.js files via CDN? 
``````````````````````````````````````````````````````````````````````````````````````````
React provides two versions of its JavaScript library that can be used via CDN: react.development.jsand react.production.js.
The react.development.js file is an uncompressed, development version of the React library. 
It is intended for use during development and debugging, as it contains additional error checking and warning messages that are helpful for troubleshooting issues in your React code. 
This version is larger in size than the production version and is not optimized for performance.
The react.production.js file, on the other hand, is a compressed, production-ready version of the React library. 
It is intended for use in production environments, as it is smaller in size and optimized for performance. 
This version does not include the additional error checking and warning messages found in the development version, as they can negatively impact performance.

In summary, the main difference between react.development.js and react.production.js is that the former is larger in size and contains additional error checking and warning messages 
that are useful during development and debugging, while the latter is smaller in size and optimized for performance, making it suitable for use in production environments.

When developing a React application, it's recommended to use the development version of the React library to take advantage of the additional error checking and warning messages. 
However, when deploying your application to a production environment, you should switch to the production version of the library for optimal performance.


[Q] What is async and defer? 
```````````````````````````
async and defer are attributes that can be added to the script tag in HTML to control the way in which a script is loaded and executed.

async is an attribute that tells the browser to load the script asynchronously while the page continues to load. 
The script is executed as soon as it is downloaded, without waiting for other scripts or resources to finish loading. 
This can improve page load times and improve the user experience. 
However, because the script is executed immediately after it is downloaded, the order in which scripts are executed is not guaranteed. 
This means that scripts that rely on other scripts or resources may not work correctly.
Syntax:
<script src="demo_async.js" async></script>

defer is an attribute that tells the browser to load the script in the background while the page is being parsed, and execute it after the page has finished parsing. 
This allows the script to be executed in the order in which it appears in the HTML document, without blocking the loading of other resources on the page. 
This is especially useful for scripts that need to be executed after the page has finished loading, such as scripts that manipulate the DOM or interact with other page elements.
Syntax:
<script src="demo_defer.js" defer></script>
In summary, async and defer are attributes that control how a script is loaded and executed in the browser. 
async loads and executes the script asynchronously while the page continues to load, while defer loads the script in the background and executes it after the page has finished parsing. 
Choosing the appropriate attribute depends on the script's dependencies and the desired loading behavior.