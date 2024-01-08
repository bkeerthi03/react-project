# Zustand

## Differences between Zustand, Redux and Context API
### Redux:
* Use Redux for <b>large-scale applications</b> with <b>complex state management</b> needs.
* Choose Redux if you require strict data flow and a <b>well-defined architecture</b>.
* Redux is an excellent choice for projects with a large development team and the need for standardized state management practices.
### Zustand:
* Zustand is best suited for <b>smaller applications or specific components with localized state</b> needs.
* Consider Zustand when you prefer a <b>lightweight state management</b> solution with <b>minimal setup</b>.
* Zustand is ideal for projects where simplicity and performance are essential.
### Context API:
* Use Context API for <b>small applications or when managing state within individual components.</b>
* Context API is a good choice when you want a built-in, <b>easy-to-use state management solution with less complexity.</b>
* Context API is well-suited for scenarios where <b>global state management is not a primary concern.</b>

## State
* State is a piece of data that is stored by our program to reflect the changes that occur when it’s running and when the user interacts with it.
    * information about the logged-in user,
    * list of products fetched from the backend,
    * flag indicating opened/closed state of the navigation bar,
    * the sum of prices from each product in the user’s shopping cart.

## Local state
* State that is strictly connected with a component that changes the UI appearance.
* This state doesn’t have to be shared across multiple components.
* Flag keeping the navbar state from the list above is a good example. The navigation bar is probably the only component that cares about this piece of information so you don’t have to worry about sharing it.

## Global state
* On the other hand, this state represents the data that can be used by multiple nested components in your application. 

## React-Query – a library that helps you to manage server state.

## Zustand:
* Zustand is a state management library for React that allows you to manage state in a simple way.
* It is built on top of the Context API and uses the concept of stores to manage state.

A store is a container for a specific piece of state and any functions that modify that state. You can create as many stores as you need, and they can be used throughout your application.

## Install Zustand
* In order to install Zustand, run the following command:
      * npm install zustand or yarn add zustand

### Once you’ve installed Zustand, you can create a store like this:
<code>
import create from 'zustand';

type Store = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
</code>

