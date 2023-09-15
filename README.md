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
      * As text directly inside a JSX tag: <code><h1>{name}'s To Do List</h1></code> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
      * As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}"
* ### Using “double curlies”
    * Inline style properties are written in camelCase. For example, HTML <ul style="background-color: black"> would be written as <ul style={{ backgroundColor: 'black' }}>  in your component.

## Passing Props to a Component
* React components use props to communicate with each other.
* Every parent component can pass some information to its child components by giving them props.
* Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

