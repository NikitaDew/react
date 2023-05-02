# when and why to use lazy() in react js

## Code Splitting

Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

## lazy

lazy lets you defer loading component’s code until it is rendered for the first time.

`const SomeComponent = lazy(load)`

Call lazy outside your components to declare a lazy-loaded React component:

import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));

`lazy returns a React component you can render in your tree. While the code for the lazy component is still loading, attempting to render it will suspend. Use <Suspense> to display a loading indicator while it’s loading.`

Now that your component’s code loads on demand, you also need to specify what should be displayed while it is loading. You can do this by wrapping the lazy component or any of its parents into a <Suspense> boundary:

<Suspense fallback={<Loading />}>

  <h2>Preview</h2>
  <MarkdownPreview />
 </Suspense>

`Do not declare lazy components inside other components Instead, always declare them at the top level of your module `
