# Assignment 2 - Epsisode 02 - Igniting our app

1. What is NPM?
   NPM is many things but not Node Package Manager. NPM is a Open Source package manager for javascript programming language and is the default package manager for nodejs. NPM helps developers to share and reuse code for building their applications. It allows us in installing a package, updating, uninstalling and publishing a package to the NPM registry where it can be accessed by others and downloaded to use for their projects.

2. What is 'Parcel/Webpack'? why do we need it?
   Parcel and Webpack are module bundlers, which is used to minify and clean our code for deployment. We need them to improve our application performance, reduce overall file size by making our code compact.

3. What is .parcel-cache?
   '.parcel-cache' stores information about our project when parcel builds it, so that when parcel rebuilds, it doesn't have to re-parse and re-analyse everything from scratch. It's the reason why parcel is so fast during development.

4. what is 'npx'?
   'npx' stands for 'Node Package eXecute'. It is a command that is used to execute/run any package from the npm registry directly without installing it.

5. What is the difference between 'dependencies' and 'devDependencies'?
   Dependencies are the list of packages that are required to run our application in production or testing environment, whereas devDependencies are the packages that are required only in the project development environment.

6. What is Tree shaking?
   Tree shaking is a technique that is used for optimizing our code performance by eliminating the dead/unused codes.

7. What is Hot Module Replacement?
   Hot Module Replacement (HMR) adds or removes modules while an application is running, without a full reload. This helps to retain its state values, and saves valuable development time by only updating what has changed.

8. List down your favourite 5 superpowers of parcel and describe any 3 of them in your own code?

- Dev Build
- Local Server
- HMR >Hot Module Replacement - chnaging the each changes , instantly its reflecting in browser without refreshing
- file watcher algoritham - written in C++ > keep tracking all the file and once the changes made , its automatically updating in browser
- Caching - Faster Development builds > its caching the file which is already in build, and its only build and replace the which file made change. so it is making developmnet build fast.
- Image Optimization - its basically do image optimization
- Minification files - its used to do the mifiy the all the file in production
- Bundling - its used to do the budle all the files
- Compression - compress alll the files
- Consistent Hashing
- File Splitting
- Diffrential Bundling - it used to support the older browsers (diffrent type of older browsers)
- Diagnostics
- Error Handling - gives you to easily understandable errors in cosole
- HTTPS
- Tree Shaking - remove unused code
