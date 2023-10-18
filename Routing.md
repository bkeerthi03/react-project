npm install react-router-dom --save
# Using App Router

## Routing Fundamentals
* The skeleton of every application is routing.

### Terminology
* **Tree:** A convention for visualizing a hierarchical structure. For example, a component tree with parent and children components, a folder structure, etc.
* **Subtree:** Part of a tree, starting at a new root (first) and ending at the leaves (last).
* **Root:** The first node in a tree or subtree, such as a root layout.
* **Leaf:** Nodes in a subtree that have no children, such as the last segment in a URL path.
* **URL Segment:** Part of the URL path delimited by slashes.
* **URL Path:** Part of the URL that comes after the domain (composed of segments).

### The app Router
* The App Router works in a new directory named app

### Roles of Folders and Files
* Next.js uses a file-system based router where:
    * **Folders** are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a page.js file. See Defining Routes.
    * **Files** are used to create UI that is shown for a route segment. See special files.

### Route Segments
* Each folder in a route represents a route segment.
* Each route segment is mapped to a corresponding segment in a URL path.

### Nested Routes
* To create a nested route, you can nest folders inside each other. For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory.
* The /dashboard/settings route is composed of three segments:
    * / (Root segment)
    * dashboard (Segment)
    * settings (Leaf segment)

### File Conventions
Next.js provides a set of special files to create UI with specific behavior in nested routes:
* **layout**	Shared UI for a segment and its children
* **page**	Unique UI of a route and make routes publicly accessible
* **loading**	Loading UI for a segment and its children
* **not-found**	Not found UI for a segment and its children
* **error**	Error UI for a segment and its children
* **global-error**	Global Error UI
* **route**	Server-side API endpoint
* **template**	Specialized re-rendered Layout UI
* **default**	Fallback UI for Parallel Routes

### Component Hierarchy
The React components defined in special files of a route segment are rendered in a specific hierarchy:
* layout.js
* template.js
* error.js (React error boundary)
* loading.js (React suspense boundary)
* not-found.js (React error boundary)
* page.js or nested layout.js
In a nested route, the components of a segment will be nested inside the components of its parent segment.

### Colocation
* In addition to special files, you have the option to colocate your own files (e.g. components, styles, tests, etc) inside folders in the app directory.
* This is because while folders define routes, only the contents returned by page.js or route.js are publicly addressable.

### Advanced Routing Patterns
The App Router also provides a set of conventions to help you implement more advanced routing patterns. These include:
* **Parallel Routes:** Allow you to simultaneously show two or more pages in the same view that can be navigated independently. You can use them for split views that have their own sub-navigation. E.g. Dashboards.
* **Intercepting Routes:** Allow you to intercept a route and show it in the context of another route. You can use these when keeping the context for the current page is important. E.g. Seeing all tasks while editing one task or expanding a photo in a feed.

These patterns allow you to build richer and more complex UIs, democratizing features that were historically complex for small teams and individual developers to implement.

## Defining Routes
### Creating Routes
* Next.js uses a file-system based router where folders are used to define routes.
* Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other.
* A special page.js file is used to make route segments publicly accessible.
* .js, .jsx, or .tsx file extensions can be used for special files.
* For example, the **/dashboard/analytics** URL path is not publicly accessible because it does not have a corresponding page.js file. This folder could be used to store components, stylesheets, images, or other colocated files.

### Creating UI
* Special file conventions are used to create UI for each route segment. The most common are pages to show UI unique to a route, and layouts to show UI that is shared across multiple routes.
* For example, to create your first page, add a page.js file inside the app directory and export a React component.

## Pages and Layouts
### Pages
* A page is UI that is unique to a route.
* You can define pages by exporting a component from a page.js file.
* Use nested folders to define a route and a page.js file to make the route publicly accessible.

### Layouts
* A layout is UI that is shared between multiple pages.
* On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.
* You can define a layout by default exporting a React component from a layout.js file. The component should accept a children prop that will be populated with a child layout (if it exists) or a child page during rendering.
* **Root Layout (Required)**: The root layout is defined at the top level of the app directory and applies to all routes. This layout enables you to modify the initial HTML returned from the server.
* **Nesting Layouts**: Layouts defined inside a folder (e.g. app/dashboard/layout.js) apply to specific route segments and render when those segments are active. By default, layouts in the file hierarchy are nested, which means they wrap child layouts via their children prop.
* You can use Route Groups to opt specific route segments in and out of shared layouts.

### Templates
* Templates are similar to layouts in that they wrap each child layout or page.
* A template can be defined by exporting a default React component from a template.js file. The component should accept a children prop.

### Modifying <head>
* In the app directory, you can modify the <head> HTML elements such as title and meta using the built-in SEO support.
* Metadata can be defined by exporting a metadata object or generateMetadata function in a layout.js or page.js file.

## Linking and Navigating
There are two ways to navigate between routes in Next.js: Using the Link Component and Using the useRouter Hook.

**Link Component**:
* Link is a built-in component that extends the HTML <a> tag to provide prefetching and client-side navigation between routes.
* It is the primary way to navigate between routes in Next.js.
* props available for the Link Component:
  * **href (required)** - The path or URL to navigate to. <Link href="/dashboard">Dashboard</Link>. href can also accept an object. You can use it by importing it from next/link, and passing a href prop to the component.
  * **replace** - Defaults to false. When true, next/link will replace the current history state instead of adding a new URL into the browser’s history stack.
  * **scroll** - Defaults to true. The default behavior of <Link> is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation. When false, next/link will not scroll to the top of the page after a navigation.
  * **prefetch** - Defaults to true. When true, next/link will prefetch the page (denoted by the href) in the background. This is useful for improving the performance of client-side navigations. Any <Link /> in the viewport (initially or through scroll) will be preloaded. Prefetch can be disabled by passing prefetch={false}. Prefetching is only enabled in production.
  * **Checking Active Links** - You can use usePathname() to determine if a link is active. For example, to add a class to the active link, you can check if the current pathname matches the href of the link.
  * **Scrolling to an id** - The default behavior of the Next.js App Router is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation. If you'd like to scroll to a specific id on navigation, you can append your URL with a # hash link or just pass a hash link to the href prop. This is possible since <Link> renders to an <a> element.
  * **Disabling scroll restoration** - The default behavior of the Next.js App Router is to scroll to the top of a new route or to maintain the scroll position for backwards and forwards navigation. If you'd like to disable this behavior, you can pass scroll={false} to the <Link> component, or scroll: false to router.push() or router.replace().
 
**useRouter() Hook**:
* The useRouter hook allows you to programmatically change routes. This hook can only be used inside Client Components and is imported from next/navigation.
* **router.push(href: string, { scroll: boolean }):** Perform a client-side navigation to the provided route. Adds a new entry into the browser’s history stack.
* **router.replace(href: string, { scroll: boolean }):** Perform a client-side navigation to the provided route without adding a new entry into the browser’s history stack.
* **router.refresh():** Refresh the current route. Making a new request to the server, re-fetching data requests, and re-rendering Server Components. The client will merge the updated React Server Component payload without losing unaffected client-side React (e.g. useState) or browser state (e.g. scroll position).
* **router.prefetch(href: string):** Prefetch the provided route for faster client-side transitions.
* **router.back():** Navigate back to the previous route in the browser’s history stack.
* **router.forward():** Navigate forwards to the next page in the browser’s history stack.
* **Migrating from next/router**
   * The useRouter hook should be imported from next/navigation and not next/router when using the App Router.
   * The pathname string has been removed and is replaced by usePathname().
   * The query object has been removed and is replaced by useSearchParams().
   * router.events has been replaced.
* v13.0.0 - useRouter from next/navigation introduced.

### How Routing and Navigation Works
The App Router uses a hybrid approach for routing and navigation. On the server, your application code is automatically code-split by route segments. And on the client, Next.js prefetches and caches the route segments. This means, when a user navigates to a new route, the browser doesn't reload the page, and only the route segments that change re-render - improving the navigation experience and performance.

**1. Prefetching**
* Prefetching is a way to preload a route in the background before the user visits it. There are two ways routes are prefetched in Next.js:
   * **Link component:** Routes are automatically prefetched as they become visible in the user's viewport. Prefetching happens when the page first loads or when it comes into view through scrolling.
   * **router.prefetch():** The useRouter hook can be used to prefetch routes programmatically.
* The<Link>'s prefetching behavior is different for static and dynamic routes:
   * **Static Routes:** prefetch defaults to true. The entire route is prefetched and cached.
   * **Dynamic Routes:** prefetch default to automatic. Only the shared layout down until the first loading.js file is prefetched and cached for 30s. This reduces the cost of fetching an entire dynamic route, and it means you can show an instant loading state for better visual feedback to users.
* You can disable prefetching by setting the prefetch prop to false.

**2. Caching**
* Next.js has an in-memory client-side cache called the Router Cache. As users navigate around the app, the React Server Component Payload of prefetched route segments and visited routes are stored in the cache.
* This means on navigation, the cache is reused as much as possible, instead of making a new request to the server - improving performance by reducing the number of requests and data transferred.

**3. Partial Rendering**
* Partial rendering means only the route segments that change on navigation re-render on the client, and any shared segments are preserved.
* For example, when navigating between two sibling routes, /dashboard/settings and /dashboard/analytics, the settings and analytics pages will be rendered, and the shared dashboard layout will be preserved.
* Without partial rendering, each navigation would cause the full page to re-render on the server. Rendering only the segment that changes reduces the amount of data transferred and execution time, leading to improved performance.

**4. Soft Navigation**
* By default, the browser performs a hard navigation between pages. This means the browser reloads the page and resets React state such as useState hooks in your app and browser state such as the user's scroll position or focused element.
* However, in Next.js, the App Router uses soft navigation. This means React only renders the segments that have changed while preserving React and browser state, and there is no full page reload.

**5. Back and Forward Navigation**
* By default, Next.js will maintain the scroll position for backwards and forwards navigation, and re-use route segments in the Router Cache.

## Route Groups
