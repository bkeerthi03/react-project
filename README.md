# Reference URL:
[React](https://react.dev/learn)
[React Legacy](https://legacy.reactjs.org/docs)

## Install React:
  npm install -g create-react-app 

## Create a new React project:
  create-react-app react-project (or) npx create-react-app react-project

## Notes:
* React component names must always start with a capital letter, while HTML tags must be lowercase.
* In React, you specify a CSS class with className.
* React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
* Without parentheses, any code on the lines after return will be ignored!
* Components can render other components, but you must never nest their definitions.
* When a child component needs some data from a parent, pass it by props instead of nesting definitions.
* Every module can have two different types of export, named export and default export. You can have multiple named exports per module but only one default export.

## LifeCycle Methods:
* To define a React component class, you need to extend React.Component.
* The only method you must define in a React.Component subclass is called render(). All the other methods are optional.
### Mounting
* These methods are called in the following order when an instance of a component is being created and inserted into the DOM:
    * constructor() - If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.The constructor for a React component is called before it is mounted. When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    * static getDerivedStateFromProps() - getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.
    * render() - The render() method is the only required method in a class component.When called, it should examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Portals, String and numbers, Booleans or null or undefined.
    * componentDidMount() - componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
### Updating
* An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:
    * static getDerivedStateFromProps()
    * shouldComponentUpdate() - shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
    * render() - The render() method is the only required method in a class component.When called, it should examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Portals, String and numbers, Booleans or null or undefined.
    * getSnapshotBeforeUpdate() - getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate().
    * componentDidUpdate() - componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
### Unmounting
* This method is called when a component is being removed from the DOM:
    * componentWillUnmount() - componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
### Error Handling
* These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
    * static getDerivedStateFromError() - This lifecycle is invoked after an error has been thrown by a descendant component. It receives the error that was thrown as a parameter and should return a value to update state.
    * componentDidCatch() - This lifecycle is invoked after an error has been thrown by a descendant component. It receives two parameters: error - The error that was thrown, info - An object with a componentStack key containing information about which component threw the error. componentDidCatch() is called during the “commit” phase, so side-effects are permitted. It should be used for things like logging errors.
### Other APIs
* Each component also provides some other APIs:
    * setState() - setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.
    * forceUpdate() - By default, when your component’s state or props change, your component will re-render. If your render() method depends on some other data, you can tell React that the component needs re-rendering by calling forceUpdate().Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). This will trigger the normal lifecycle methods for child components, including the shouldComponentUpdate() method of each child. React will still only update the DOM if the markup changes.
### Class Properties
* defaultProps - defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.
      * class CustomButton extends React.Component {
  // ...
}

CustomButton.defaultProps = {
  color: 'blue'
};
* displayName - The displayName string is used in debugging messages.
### Instance Properties
* props - this.props contains the props that were defined by the caller of this component. In particular, this.props.children is a special prop, typically defined by the child tags in the JSX expression rather than in the tag itself.
* state - The state contains data specific to this component that may change over time. The state is user-defined, and it should be a plain JavaScript object. Never mutate this.state directly, as calling setState() afterwards may replace the mutation you made. Treat this.state as if it were immutable.

### Notes
* Receiving latest props from the parent and updating state - using getDerivedStateFromProps
* conditional rendering - if else, ternary, Inline If with Logical && Operator
* Parent component to child component data sharing - using props
* Child component to parent component data sharing - passing callback function to child and return data to parent
* Binding this to the function - this.example=this.example.bind(this) - normal function
* Using of 'key' property while iterating data inside render method - <div key={item.id}> or else throws an warning* - theory
* Optional callback parameter in setState method - setState({},SomeCallbackFunction(pass data)) - immedaite updated state concept
* Maintaing a class compoent with out state - directly use props
* Maintaing state with outing using constructor - directly use variables
* functional compoent.
* React.Fragment - <> </> - wrapping to single group of list for multiple elements
* Writing external styles - import "../product.css";
* To show an array of data, Why we are using map method in render -  map() creates a new array from calling a function for every array element, map() does not change the original array.
* Writing <form> element, onSubmit of form stoping default action - event.stopPropagation(), event.preventDefault()

## Keys
* Keys tell React which array item each component corresponds to, so that it can match them up later.
* This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted.
* A well-chosen key helps React infer what exactly has happened, and make the correct updates to the DOM tree.
* Do not generate keys on the fly, e.g. with key={Math.random()}. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time.
* React can keep track of each of them even if their position or data changes.
## Rules of keys 
* Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
* Keys must not change or that defeats their purpose! Don’t generate them while rendering.

## Syntax for Export statement and Import statement:
* Default	export default function -> Button() {} ->	import Button from './Button.js';
* Named	export function -> Button() {}	-> import { Button } from './Button.js';

## JSX
* JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

## Rules of JSX:
* ### Return a single root element
   * To return multiple elements from a component, wrap them with a single parent tag.
   * If you don’t want to add an extra <div> to your markup, you can write <> and </> instead
   * This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.
* ### Close all the tags
   * JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>
* ### camelCase most of the things

## JavaScript in JSX with Curly Braces
* ### Passing strings with quotes
    * When you want to pass a string attribute to JSX, you put it in single or double quotes
* ### Using curly braces:
    * You can only use curly braces in two ways inside JSX:
      * As text directly inside a JSX tag. like {name}
      * As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}"
* ### Using “double curlies”
    * Inline style properties are written in camelCase. For example, HTML <ul style="background-color: black"> would be written as <ul style={{ backgroundColor: 'black' }}>  in your component.


## Passing Props to a Component:
* React components use props to communicate with each other.
* Every parent component can pass some information to its child components by giving them props.
* Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
* You can give Avatar some props in two steps:
    * Step 1: Pass props to the child component.
    * Step 2: Read props inside the child component.

## Specifying a default value for a prop 
* If you want to give a prop a default value to fall back on when no value is specified, you can do it with the destructuring by putting = and the default value right after the parameter.
* You can specify a default value like size = 100, which is used for missing and undefined props.

## Forwarding props with the JSX spread syntax
* You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!

## How props change over time
* props are immutable — a term from computer science meaning “unchangeable”.
* When a component needs to change its props (for example, in response to a user interaction or new data), it will have to “ask” its parent component to pass it different props—a new object!
* Don’t try to “change props”. When you need to respond to the user input (like changing the selected color), you will need to “set state”.

## Conditional Rendering
* Your components will often need to display different things depending on different conditions.
* In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
* You can return a JSX expression conditionally with an if statement.
* You can conditionally save some JSX to a variable and then include it inside other JSX by using the curly braces.
* In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
* In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.

## Rendering Lists
* Move data out of components and into data structures like arrays and objects.
* Generate sets of similar components with JavaScript’s map().
* Create arrays of filtered items with JavaScript’s filter().
* Set key on each component in a collection so React can keep track of each of them even if their position or data changes.

## Adding Interactivity

* Some things on the screen update in response to user input.
* For example, clicking an image gallery switches the active image.
* In React, data that changes over time is called state.
* You can add state to any component, and update it as needed.

## Responding to Events
* Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

## Adding event handlers
* To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag.

### Reading props in event handlers
* Because event handlers are declared inside of a component, they have access to the component’s props.
### Passing event handlers as props 
* Often you’ll want the parent component to specify a child’s event handler.
* Consider buttons: depending on where you’re using a Button component, you might want to execute a different function—perhaps one plays a movie and another uploads an image.
### Naming event handler props 
* Built-in components like <button> and <div> only support browser event names like onClick.
* However, when you’re building your own components, you can name their event handler props any way that you like.
* By convention, event handler props should start with on, followed by a capital letter.

## Event propagation 
* e.stopPropagation() stops the event handlers attached to the tags above from firing.
* e.preventDefault() prevents the default browser behavior for the few events that have it.

## State: A Component's Memory
* Components need to “remember” things: the current input value, the current image, the shopping cart.
* In React, this kind of component-specific memory is called state.
* The useState Hook provides those two things:
    * A state variable to retain the data between renders.
    * A state setter function to update the variable and trigger React to render the component again.

## Adding a state variable 
* To add a state variable, import useState from React at the top of the file:
    * import { useState } from 'react';
    * const [index, setIndex] = useState(0); - index is a state variable and setIndex is the setter function.
* In React, useState, as well as any other function starting with ”use”, is called a Hook.
* Hooks are special functions that are only available while React is rendering. They let you “hook into” different React features.
* State is just one of those features.
* When you call useState, you are telling React that you want this component to remember something.
* The convention is to name this pair like const [something, setSomething]. You could name it anything you like, but conventions make things easier to understand across projects.
* The only argument to useState is the initial value of your state variable. In this example, the index’s initial value is set to 0 with useState(0).
* Every time your component renders, useState gives you an array containing two values:
    * The state variable (index) with the value you stored.
    * The state setter function (setIndex) which can update the state variable and trigger React to render the component again.

## Giving a component multiple state variables 
* You can have as many state variables of as many types as you like in one component.
* This component has two state variables, a number index and a boolean showMore.

## State is isolated and private
* State is private to the component. If you render it in two places, each copy gets its own state.

## Render and Commit
* Before your components are displayed on screen, they must be rendered by React.
* Imagine that your components are cooks in the kitchen, assembling tasty dishes from ingredients. In this scenario, React is the waiter who puts in requests from customers and brings them their orders. This process of requesting and serving UI has three steps:
    * Triggering a render (delivering the guest’s order to the kitchen)
    * Rendering the component (preparing the order in the kitchen)
    * Committing to the DOM (placing the order on the table)
### Step 1: Trigger a render 
* There are two reasons for a component to render:
    * It’s the component’s initial render - When your app starts, you need to trigger the initial render.
    * The component’s (or one of its ancestors’) state has been updated - Once the component has been initially rendered, you can trigger further renders by updating its state with the set function. Updating           your component’s state automatically queues a render.
### Step 2: React renders your components
* After you trigger a render, React calls your components to figure out what to display on screen. “Rendering” is React calling your components.
* On initial render, React will call the root component.
* For subsequent renders, React will call the function component whose state update triggered the render.
* This process is recursive: if the updated component returns some other component, React will render that component next, and if that component also returns something, it will render that component next, and so on. The process will continue until there are no more nested components and React knows exactly what should be displayed on screen.
### Step 3: React commits changes to the DOM 
* After rendering (calling) your components, React will modify the DOM.
* For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
* For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

## Epilogue: Browser paint 
After rendering is done and React updated the DOM, the browser will repaint the screen. Although this process is known as “browser rendering”, we’ll refer to it as “painting”.

## State as a Snapshot
### Setting state triggers renders
* For an interface to react to the event, you need to update the state.
### Rendering takes a snapshot in time 
* “Rendering” means that React is calling your component, which is a function.
* The JSX you return from that function is like a snapshot of the UI in time.
* Its props, event handlers, and local variables were all calculated using its state at the time of the render.
* When React re-renders a component:
    * React calls your function again.
    * Your function returns a new JSX snapshot.
    * React then updates the screen to match the snapshot you’ve returned.
* As a component’s memory, state is not like a regular variable that disappears after your function returns.
* State actually “lives” in React itself—as if on a shelf!—outside of your function.
* When React calls your component, it gives you a snapshot of the state for that particular render.
* Your component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX, all calculated using the state values from that render!

## Queueing a Series of State Updates
* Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render.
* To do this, it helps to understand how React batches state updates.
* Setting state does not change the variable in the existing render, but it requests a new render.
### React batches state updates 
* React processes state updates after event handlers have finished running. This is called batching.
### Updating the same state multiple times before the next render 
* To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.
### Naming conventions 
* It’s common to name the updater function argument by the first letters of the corresponding state variable:
    * setEnabled(e => !e);
    * setLastName(ln => ln.reverse());
    * setFriendCount(fc => fc * 2);
* If you prefer more verbose code, another common convention is to repeat the full state variable name, like setEnabled(enabled => !enabled), or to use a prefix like setEnabled(prevEnabled => !prevEnabled).

## Updating Objects in State
* State can hold any kind of JavaScript value, including objects.
* But you shouldn’t change objects that you hold in the React state directly.
* Instead, when you want to update an object, you need to create a new one (or make a copy of an existing one), and then set the state to use that copy.
### Mutation
* objects in React state are technically mutable, you should treat them as if they were immutable—like numbers, booleans, and strings. Instead of mutating them, you should always replace them.
### Treat state as read-only
* In other words, you should treat any JavaScript object that you put into state as read-only.
### Copying objects with the spread syntax
The ... spread syntax is “shallow”—it only copies things one level deep. This makes it fast, but it also means that if you want to update a nested property, you’ll have to use it more than once.
### Updating a nested object
#### Write concise update logic with Immer 
* If your state is deeply nested, you might want to consider flattening it.
* But, if you don’t want to change your state structure, you might prefer a shortcut to nested spreads.
* Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you. With Immer, the code you write looks like you are “breaking the rules” and mutating an object:
        updatePerson(draft => {
          draft.artwork.city = 'Lagos';
        });
* To try Immer:
    * Run npm install use-immer to add Immer as a dependency
    * Then replace import { useState } from 'react' with import { useImmer } from 'use-immer'
*  Immer is a great way to keep the update handlers concise, especially if there’s nesting in your state, and copying objects leads to repetitive code.

## Updating Arrays in State
* Arrays are mutable in JavaScript, but you should treat them as immutable when you store them in state.
* Just like with objects, when you want to update an array stored in state, you need to create a new one (or make a copy of an existing one), and then set state to use the new array.
* Like with objects, you should treat arrays in React state as read-only. This means that you shouldn’t reassign items inside an array like arr[0] = 'bird', and you also shouldn’t use methods that mutate the array, such as push() and pop().
* Instead, every time you want to update an array, you’ll want to pass a new array to your state setting function. To do that, you can create a new array from the original array in your state by calling its non-mutating methods like filter() and map(). Then you can set your state to the resulting new array.
* Here is a reference table of common array operations. When dealing with arrays inside React state, you will need to avoid the methods in the left column, and instead prefer the methods in the right column:

operations | avoid (mutates the array) | prefer (returns a new array)
| :--- | ---: | :---:
adding  | push, unshift | concat, [...arr] spread syntax
removing  | pop, shift, splice | filter, slice
replacing  | 	splice, arr[i] = ... assignment | map
sorting  | reverse, sort | copy the array first 

* Alternatively, you can use Immer which lets you use methods from both columns.

## Adding an Array
* push() will mutate an array.
* Instead, create a new array which contains the existing items and a new item at the end. There are multiple ways to do this, but the easiest one is to use the ... array spread syntax.

## Removing from an Array
* The easiest way to remove an item from an array is to filter it out. In other words, you will produce a new array that will not contain that item. To do this, use the filter method.

## Transforming an array
* If you want to change some or all items of the array, you can use map() to create a new array. The function you will pass to map can decide what to do with each item, based on its data or its index (or both).

## Replacing items in an array 
* It is particularly common to want to replace one or more items in an array. Assignments like arr[0] = 'bird' are mutating the original array, so instead you’ll want to use map for this as well.
* To replace an item, create a new array with map. Inside your map call, you will receive the item index as the second argument. Use it to decide whether to return the original item (the first argument) or something else.

## Inserting into an array 
* Sometimes, you may want to insert an item at a particular position that’s neither at the beginning nor at the end.
* To do this, you can use the ... array spread syntax together with the slice() method.
* The slice() method lets you cut a “slice” of the array. To insert an item, you will create an array that spreads the slice before the insertion point, then the new item, and then the rest of the original array.

## Making other changes to an array
* There are some things you can’t do with the spread syntax and non-mutating methods like map() and filter() alone.
* For example, you may want to reverse or sort an array. The JavaScript reverse() and sort() methods are mutating the original array, so you can’t use them directly.
* However, you can copy the array first, and then make changes to it.

## Updating objects inside arrays 
When updating nested state, you need to create copies from the point where you want to update, and all the way up to the top level.

## Write concise update logic with Immer
* Updating nested arrays without mutation can get a little bit repetitive. Just as with objects:
    * Generally, you shouldn’t need to update state more than a couple of levels deep. If your state objects are very deep, you might want to restructure them differently so that they are flat.
    * If you don’t want to change your state structure, you might prefer to use Immer, which lets you write using the convenient but mutating syntax and takes care of producing the copies for you.


## Add icons in React
* npm install react-icons --save
* import { MdShoppingCartCheckout } from "react-icons/md";
* <MdShoppingCartCheckout size="100px" color="green"/>

## Built-in React Hooks
* Hooks let you use different React features from your components.
* You can either use the built-in Hooks or combine them to build your own.
* **Basic Hooks** - useState, useEffect, useContext
* **Additional Hooks** - useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue, useDeferredValue, useTransition, useId
* **Library Hooks** - useSyncExternalStore, useInsertionEffect

## Rules of Hooks
* Hooks are JavaScript functions, but you need to follow two rules when using them:
* **Only Call Hooks at the Top Level**
    * Don’t call Hooks inside loops, conditions, or nested functions.
    * Instead, always use Hooks at the top level of your React function, before any early returns.
    * By following this rule, you ensure that Hooks are called in the same order each time a component renders.
    * That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.
* **Only Call Hooks from React Functions**
    * Don’t call Hooks from regular JavaScript functions. Instead, you can:
        * Call Hooks from React function components.
        * Call Hooks from custom Hooks.
    * By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

### useState
* State lets a component “remember” information like user input.
* For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.
* const [index, setIndex] = useState(0);
* useState returns a pair: the current state value and a function that lets you update it.
* useState setter function will replace the older value
* we can use single and many useState hooks.
* Hooks execute one after another in a sequence.

### useEffect
* connects a component to an external system.
* function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...
* useEffect adds the ability to perform side effectss from a function component.
* By default, React runs the effects after every render - including the first render.
* Similar to useState, you can use more than a single effect in a component.

## useContext
* Context lets a component receive information from distant parents without passing it as props.
* For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.
* **useContext** - reads and subscribes to a context.
* const ThemeContext = createContext();
* const theme = useContext(ThemeContext);

## useReducer
* useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
* useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
* const [state, dispatch] = useReducer(reducer, initialArg, init?)
* Call useReducer at the top level of your component to manage its state with a reducer.
* **Parameters**
    * **reducer:** The reducer function that specifies how the state gets updated. It must be pure, should take the state and action as arguments, and should return the next state. State and action can be of any types.
    * **initialArg:** The value from which the initial state is calculated. It can be a value of any type. How the initial state is calculated from it depends on the next init argument.
    * **optional init:** The initializer function that should return the initial state. If it’s not specified, the initial state is set to initialArg. Otherwise, the initial state is set to the result of calling init(initialArg).
* **Returns** - useReducer returns an array with exactly two values:
    * **The current state** - During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
    * **The dispatch function** - lets you update the state to a different value and trigger a re-render.

## useCallback
* Returns a memoized callback.
* const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
* Pass an inline callback and an array of dependencies.
* useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate).
* useCallback(fn, deps) is equivalent to useMemo(() => fn, dep

## useMemo
* const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
* Returns a memoized value.
* useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

## useRef
* useRef is a React Hook that lets you reference a value that’s not needed for rendering.
* const ref = useRef(initialValue)
* **Parameters**
    * **initialValue:** The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.
* **Returns** - useRef returns an object with a single property:
    * **current:** Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
    * On the next renders, useRef will return the same object.

## useImperativeHandle
* useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.
* useImperativeHandle(ref, createHandle, dependencies?)
* **Parameters**
    * **ref:** The ref you received as the second argument from the forwardRef render function.
    * **createHandle:** A function that takes no arguments and returns the ref handle you want to expose. That ref handle can have any type. Usually, you will return an object with the methods you want to expose.
    * **optional dependencies:** The list of all reactive values referenced inside of the createHandle code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. If a re-render resulted in a change to some dependency, or if you omitted this argument, your createHandle function will re-execute, and the newly created handle will be assigned to the ref.
 
## useLayoutEffect
* useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.
* useLayoutEffect(setup, dependencies?)

## useInsertionEffect
* useInsertionEffect allows inserting elements into the DOM before any layout effects fire.
* useInsertionEffect(setup, dependencies?)
* **Parameters** 
    * **setup:** The function with your Effect’s logic. Your setup function may also optionally return a cleanup function. When your component is added to the DOM, but before any layout effects fire, React will run your setup function. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. When your component is removed from the DOM, React will run your cleanup function.
    * **optional dependencies:** The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm. If you don’t specify the dependencies at all, your Effect will re-run after every re-render of the component.
 
## useDebugValue
* useDebugValue is a React Hook that lets you add a label to a custom Hook in React DevTools.
* useDebugValue(value, format?)
* **Parameters**
    * **value:** The value you want to display in React DevTools. It can have any type.
    * **optional format:** A formatting function. When the component is inspected, React DevTools will call the formatting function with the value as the argument, and then display the returned formatted value (which may have any type). If you don’t specify the formatting function, the original value itself will be displayed.
 
## useDeferredValue
* useDeferredValue is a React Hook that lets you defer updating a part of the UI.
* const deferredValue = useDeferredValue(value)
* **Parameters** -> **value:** The value you want to defer. It can have any type.

## useTransition
* useTransition is a React Hook that lets you update the state without blocking the UI.
* const [isPending, startTransition] = useTransition()
* **Parameters** - useTransition does not take any parameters.
* **Returns** - useTransition returns an array with exactly two items:
    * The **isPending** flag that tells you whether there is a pending transition.
    * The **startTransition** function that lets you mark a state update as a transition.

## useId
* useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
* const id = useId()
* **Parameters** - useId does not take any parameters.
* **Returns** - useId returns a unique ID string associated with this particular useId call in this particular component.

## useSyncExternalStore
* useSyncExternalStore is a React Hook that lets you subscribe to an external store.
* const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
* Call useSyncExternalStore at the top level of your component to read a value from an external data store.
* **Parameters**
    * **subscribe:** A function that takes a single callback argument and subscribes it to the store. When the store changes, it should invoke the provided callback. This will cause the component to re-render. The subscribe function should return a function that cleans up the subscription.
    * **getSnapshot:** A function that returns a snapshot of the data in the store that’s needed by the component. While the store has not changed, repeated calls to getSnapshot must return the same value. If the store changes and the returned value is different (as compared by Object.is), React re-renders the component.
    * **optional getServerSnapshot:** A function that returns the initial snapshot of the data in the store. It will be used only during server rendering and during hydration of server-rendered content on the client. The server snapshot must be the same between the client and the server, and is usually serialized and passed from the server to the client. If you omit this argument, rendering the component on the server will throw an error.
* **Returns** 
The current snapshot of the store which you can use in your rendering logic.
