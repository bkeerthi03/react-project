# Reference URL:
[React](https://react.dev/learn)

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
<code>setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);</code>
* If you prefer more verbose code, another common convention is to repeat the full state variable name, like setEnabled(enabled => !enabled), or to use a prefix like setEnabled(prevEnabled => !prevEnabled).
