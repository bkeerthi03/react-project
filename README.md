# Install React:
  npm install -g create-react-app 

# Create a new React project:
  create-react-app react-project
  or
  npx create-react-app react-project

### Notes:
React component names must always start with a capital letter, while HTML tags must be lowercase.\
In React, you specify a CSS class with className.
React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
Without parentheses, any code on the lines after return will be ignored!
Components can render other components, but you must never nest their definitions.
When a child component needs some data from a parent, pass it by props instead of nesting definitions.
Every module can have two different types of export, named export and default export. You can have multiple named exports per module but only one default export.

# Syntax for Export statement and Import statement:
Default	export default function -> Button() {} ->	import Button from './Button.js';
Named	export function -> Button() {}	-> import { Button } from './Button.js';
