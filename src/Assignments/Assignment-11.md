# What is Prop Drilling?

Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. Here is a diagram to demonstrate it better. Data needed to be sent from Parent to ChildC. In this article different ways to do that are discussed.

Prop drilling in react is the process of passing data from one component via several interconnected components to the component that needs it.

# Solution

There are three alternative solutions to solve the problem we encountered above:

- Redux: An external library that offers state management for React applications.
- Context: An API that enables sharing inherently global data/state with components at different nesting levels.
- Component composition: A technique which involves passing components to other components as props. It has two subcategories:
  - Container components
  - Specialized components

# What is lifting the state up?

Sometime you wnat the state of two components to always change together to do it , remove state form both of them and move it to their closest comon parent and then pass it down to them via props.
this it known as lifting the state up.

# what are context provider and context consumer?

Context.Provider
<MyContext.Provider value={/_ some value _/}>
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider can be connected to many consumers.

Providers can be nested to override values deeper within the tree.

All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes. The propagation from Provider to its descendant consumers (including .contextType and useContext) is not subject to the shouldComponentUpdate method, so the consumer is updated even when an ancestor component skips an update.

# if you dont pass value to the provider does it take the default value?

<UserContext.Provider>
No, the value of context will be undefined and it will throw and error saying..................... the `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?

Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This default value can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue.
