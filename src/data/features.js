export const categories = [
  "All",
  "React Basics",
  "Hooks & State",
  "Rendering & Components",
  "Routing & Data",
  "Performance & Tools",
];

export const features = [
  // React Basics
  {
    name: "State",
    category: "React Basics",
    definition: "Data that belongs to a component and can change over time.",
  },

  {
    name: "Props",
    category: "React Basics",
    definition: "Values passed from a parent component to a child component.",
  },

  {
    name: "JSX",
    category: "React Basics",
    definition:
      "A syntax extension that allows writing HTML-like code in JavaScript.",
  },

  {
    name: "Component",
    category: "React Basics",
    definition: "A reusable piece of user interface in React.",
  },

  {
    name: "Virtual DOM",
    category: "React Basics",
    definition: "A lightweight copy of the real DOM used by React.",
  },

  {
    name: "Event Handling",
    category: "React Basics",
    definition:
      "Responding to user interactions like clicks or keyboard input.",
  },

  {
    name: "Fragment",
    category: "React Basics",
    definition:
      "A wrapper that groups elements without adding extra HTML nodes.",
  },

  {
    name: "Children",
    category: "React Basics",
    definition: "Elements placed inside a component tag.",
  },

  {
    name: "Context API",
    category: "React Basics",
    definition:
      "A React feature used for sharing global data across components.",
  },

  {
    name: "One-way Data Flow",
    category: "React Basics",
    definition:
      "Data in React flows from parent components to child components.",
  },

  {
    name: "Controlled Component",
    category: "React Basics",
    definition: "A form element controlled by React state.",
  },

  {
    name: "Uncontrolled Component",
    category: "React Basics",
    definition: "A form element managed by the DOM itself.",
  },

  {
    name: "Prop Drilling",
    category: "React Basics",
    definition: "Passing props through many nested components.",
  },

  {
    name: "Composition",
    category: "React Basics",
    definition: "Building components from smaller components.",
  },

  {
    name: "Lifting State Up",
    category: "React Basics",
    definition: "Moving shared state to a common parent.",
  },

  {
    name: "Immutable Data",
    category: "React Basics",
    definition: "Data that cannot be changed directly.",
  },

  {
    name: "Mutation",
    category: "React Basics",
    definition: "Directly modifying existing data.",
  },

  {
    name: "DOM",
    category: "React Basics",
    definition: "A programming interface for HTML documents.",
  },

  {
    name: "Synthetic Event",
    category: "React Basics",
    definition: "A cross-browser wrapper around native events.",
  },

  {
    name: "Semantic HTML",
    category: "React Basics",
    definition: "HTML elements with meaningful structure.",
  },

  {
    name: "Accessibility",
    category: "React Basics",
    definition: "Making applications usable for everyone.",
  },

  // Hooks & State
  {
    name: "Hook",
    category: "Hooks & State",
    definition:
      "A special React function that adds functionality to components.",
  },

  {
    name: "useState",
    category: "Hooks & State",
    definition: "A React hook used to store and update component state.",
  },

  {
    name: "useEffect",
    category: "Hooks & State",
    definition: "A React hook used to run side effects after rendering.",
  },

  {
    name: "useRef",
    category: "Hooks & State",
    definition:
      "A React hook used to reference DOM elements or mutable values.",
  },

  {
    name: "useContext",
    category: "Hooks & State",
    definition: "A React hook used to access shared context values.",
  },

  {
    name: "useReducer",
    category: "Hooks & State",
    definition: "A React hook used for more complex state logic.",
  },

  {
    name: "useMemo",
    category: "Hooks & State",
    definition: "A hook used to memoize expensive calculations.",
  },

  {
    name: "useCallback",
    category: "Hooks & State",
    definition: "A hook used to memoize functions.",
  },

  {
    name: "Custom Hook",
    category: "Hooks & State",
    definition: "A reusable function built using React hooks.",
  },

  {
    name: "Derived State",
    category: "Hooks & State",
    definition: "State calculated from other values.",
  },

  {
    name: "useLayoutEffect",
    category: "Hooks & State",
    definition:
      "A React hook similar to useEffect, but runs synchronously after DOM updates and before the browser paints.",
  },

  {
    name: "useImperativeHandle",
    category: "Hooks & State",
    definition:
      "A React hook used together with forwardRef to customize the value exposed to parent components through refs.",
  },

  {
    name: "Side Effect",
    category: "Hooks & State",
    definition: "Code that affects something outside the component.",
  },

  {
    name: "Dependency Array",
    category: "Hooks & State",
    definition: "An array controlling useEffect execution.",
  },

  {
    name: "Cleanup Function",
    category: "Hooks & State",
    definition: "A function that removes side effects.",
  },

  {
    name: "Ref",
    category: "Hooks & State",
    definition: "A reference to a DOM element or value.",
  },

  {
    name: "Forward Ref",
    category: "Hooks & State",
    definition: "Passing refs through components.",
  },

  {
    name: "State Management",
    category: "Hooks & State",
    definition: "Handling and organizing application state.",
  },

  {
    name: "Reducer",
    category: "Hooks & State",
    definition: "A function used to update state predictably.",
  },

  {
    name: "Context Provider",
    category: "Hooks & State",
    definition: "A component supplying context values.",
  },

  {
    name: "Context Consumer",
    category: "Hooks & State",
    definition: "A component reading context values.",
  },

  // Rendering & Components
  {
    name: "Rendering",
    category: "Rendering & Components",
    definition: "The process of displaying UI on the screen.",
  },

  {
    name: "Re-render",
    category: "Rendering & Components",
    definition: "Updating a component after state or props change.",
  },

  {
    name: "Conditional Rendering",
    category: "Rendering & Components",
    definition: "Displaying UI elements based on conditions.",
  },

  {
    name: "List Rendering",
    category: "Rendering & Components",
    definition: "Rendering multiple elements using arrays and map().",
  },

  {
    name: "Key",
    category: "Rendering & Components",
    definition: "A special prop used to identify list elements.",
  },

  {
    name: "Functional Component",
    category: "Rendering & Components",
    definition: "A React component written as a function.",
  },

  {
    name: "Class Component",
    category: "Rendering & Components",
    definition: "A React component written using ES6 classes.",
  },

  {
    name: "Reusable Component",
    category: "Rendering & Components",
    definition: "A component designed for repeated use.",
  },

  {
    name: "Pure Component",
    category: "Rendering & Components",
    definition: "A component that renders the same output for the same props.",
  },

  {
    name: "Portal",
    category: "Rendering & Components",
    definition: "Rendering children into another DOM node.",
  },

  {
    name: "Stateful Component",
    category: "Rendering & Components",
    definition: "A component that manages state.",
  },

  {
    name: "Stateless Component",
    category: "Rendering & Components",
    definition: "A component without internal state.",
  },

  {
    name: "Lifecycle",
    category: "Rendering & Components",
    definition: "Different phases of a component's existence.",
  },

  {
    name: "Mounting",
    category: "Rendering & Components",
    definition: "The process of inserting a component into the DOM.",
  },

  {
    name: "Unmounting",
    category: "Rendering & Components",
    definition: "Removing a component from the DOM.",
  },

  {
    name: "Updating",
    category: "Rendering & Components",
    definition: "Refreshing a component after changes.",
  },

  {
    name: "Suspense",
    category: "Rendering & Components",
    definition: "A React feature for handling asynchronous rendering.",
  },

  {
    name: "Error Boundary",
    category: "Rendering & Components",
    definition: "A component that catches rendering errors.",
  },

  {
    name: "Fallback UI",
    category: "Rendering & Components",
    definition: "Alternative UI shown during loading or errors.",
  },

  {
    name: "React.memo",
    category: "Rendering & Components",
    definition: "A higher-order component used to prevent unnecessary renders.",
  },

  {
    name: "createRoot",
    category: "Rendering & Components",
    definition: "A React API used to initialize rendering.",
  },

  {
    name: "HydrateRoot",
    category: "Rendering & Components",
    definition: "A React API used for server-side rendering hydration.",
  },

  {
    name: "Concurrent Rendering",
    category: "Rendering & Components",
    definition: "Rendering UI in interruptible chunks.",
  },

  {
    name: "Batching",
    category: "Rendering & Components",
    definition: "Grouping multiple state updates together.",
  },

  {
    name: "React Fiber",
    category: "Rendering & Components",
    definition:
      "The internal rendering engine used by React for performance improvements.",
  },

  {
    name: "SSR",
    category: "Rendering & Components",
    definition: "Server-side rendering of React applications.",
  },

  {
    name: "CSR",
    category: "Rendering & Components",
    definition: "Client-side rendering in the browser.",
  },

  {
    name: "Static Rendering",
    category: "Rendering & Components",
    definition: "Generating pages at build time.",
  },

  {
    name: "Server Components",
    category: "Rendering & Components",
    definition: "Components rendered on the server.",
  },

  {
    name: "Client Components",
    category: "Rendering & Components",
    definition: "Components rendered in the browser.",
  },

  {
    name: "Hydration",
    category: "Rendering & Components",
    definition: "Attaching React to server-rendered HTML.",
  },

  {
    name: "Hydration Error",
    category: "Rendering & Components",
    definition: "A mismatch between server and client rendering.",
  },

  // Routing & Data
  {
    name: "React Router",
    category: "Routing & Data",
    definition: "A library used for routing in React applications.",
  },

  {
    name: "Route",
    category: "Routing & Data",
    definition: "A path mapped to a specific component.",
  },

  {
    name: "Navigation",
    category: "Routing & Data",
    definition: "Changing views between routes.",
  },

  {
    name: "Dynamic Route",
    category: "Routing & Data",
    definition: "A route containing variable parameters.",
  },

  {
    name: "Nested Route",
    category: "Routing & Data",
    definition: "A route rendered inside another route.",
  },

  {
    name: "Fetch API",
    category: "Routing & Data",
    definition: "A browser API used for making HTTP requests.",
  },

  {
    name: "REST API",
    category: "Routing & Data",
    definition: "An architectural style for building APIs using HTTP methods.",
  },

  {
    name: "GraphQL",
    category: "Routing & Data",
    definition: "A query language used for requesting specific API data.",
  },

  {
    name: "JSON",
    category: "Routing & Data",
    definition: "A lightweight format used for data exchange.",
  },

  {
    name: "Promise",
    category: "Routing & Data",
    definition: "An object representing asynchronous completion.",
  },

  {
    name: "Async Function",
    category: "Routing & Data",
    definition: "A function that works with asynchronous operations.",
  },

  {
    name: "Await",
    category: "Routing & Data",
    definition: "A keyword used to pause async execution.",
  },

  {
    name: "API",
    category: "Routing & Data",
    definition: "An interface allowing communication between systems.",
  },

  {
    name: "Middleware",
    category: "Routing & Data",
    definition: "Code that runs between a request and response.",
  },

  {
    name: "Database",
    category: "Routing & Data",
    definition: "A structured system used to store and retrieve data.",
  },

  {
    name: "SQL",
    category: "Routing & Data",
    definition: "A language used to manage and query relational databases.",
  },

  {
    name: "NoSQL",
    category: "Routing & Data",
    definition:
      "A category of databases designed for non-relational data storage.",
  },

  {
    name: "ORM",
    category: "Routing & Data",
    definition:
      "Object Relational Mapping technology for database communication.",
  },

  {
    name: "Prisma",
    category: "Routing & Data",
    definition: "A modern database ORM used in JavaScript applications.",
  },

  {
    name: "Firebase",
    category: "Routing & Data",
    definition: "A backend platform providing databases and authentication.",
  },

  {
    name: "Supabase",
    category: "Routing & Data",
    definition: "An open-source backend platform with databases and APIs.",
  },

  {
    name: "Session",
    category: "Routing & Data",
    definition: "Temporary user data stored during application interaction.",
  },

  {
    name: "Cookie",
    category: "Routing & Data",
    definition: "A small piece of data stored in the browser.",
  },

  {
    name: "JWT",
    category: "Routing & Data",
    definition: "JSON Web Token used for secure authentication.",
  },

  {
    name: "Authentication",
    category: "Routing & Data",
    definition: "Verifying user identity.",
  },

  {
    name: "Authorization",
    category: "Routing & Data",
    definition: "Controlling access permissions.",
  },

  {
    name: "Token",
    category: "Routing & Data",
    definition: "A value used for authentication.",
  },

  {
    name: "Protected Route",
    category: "Routing & Data",
    definition: "A route accessible only to authenticated users.",
  },

  {
    name: "Authentication Flow",
    category: "Routing & Data",
    definition: "The sequence of steps used to verify users and grant access.",
  },

  {
    name: "Outlet",
    category: "Routing & Data",
    definition: "A placeholder for nested routes.",
  },

  {
    name: "Loader",
    category: "Routing & Data",
    definition: "A function used to fetch route data.",
  },

  {
    name: "Action",
    category: "Routing & Data",
    definition: "A function handling route form submissions.",
  },

  // Performance & Tools
  {
    name: "Memoization",
    category: "Performance & Tools",
    definition: "Caching values to improve performance.",
  },

  {
    name: "Lazy Loading",
    category: "Performance & Tools",
    definition: "Loading components only when needed.",
  },

  {
    name: "Code Splitting",
    category: "Performance & Tools",
    definition: "Splitting code into smaller bundles.",
  },

  {
    name: "Debouncing",
    category: "Performance & Tools",
    definition: "Delaying function execution until input stops.",
  },

  {
    name: "Throttling",
    category: "Performance & Tools",
    definition: "Limiting how often a function executes.",
  },

  {
    name: "Vite",
    category: "Performance & Tools",
    definition: "A fast frontend build tool and development server.",
  },

  {
    name: "Webpack",
    category: "Performance & Tools",
    definition: "A module bundler used in JavaScript applications.",
  },

  {
    name: "Babel",
    category: "Performance & Tools",
    definition:
      "A compiler that converts modern JavaScript into compatible code.",
  },

  {
    name: "React DevTools",
    category: "Performance & Tools",
    definition:
      "A browser extension used to inspect React components and state.",
  },

  {
    name: "TypeScript",
    category: "Performance & Tools",
    definition: "A strongly typed superset of JavaScript.",
  },

  {
    name: "Type Safety",
    category: "Performance & Tools",
    definition:
      "A programming feature that prevents errors by validating data types.",
  },

  {
    name: "Generics",
    category: "Performance & Tools",
    definition: "Reusable type definitions in TypeScript.",
  },

  {
    name: "Transpiling",
    category: "Performance & Tools",
    definition:
      "Converting source code from one version to another compatible version.",
  },

  {
    name: "Bundle",
    category: "Performance & Tools",
    definition: "A compiled JavaScript file containing application code.",
  },

  {
    name: "Tree Shaking",
    category: "Performance & Tools",
    definition: "A build optimization that removes unused JavaScript code.",
  },

  {
    name: "Caching",
    category: "Performance & Tools",
    definition: "Storing previously fetched data to improve performance.",
  },

  {
    name: "Hot Reloading",
    category: "Performance & Tools",
    definition: "A development feature that updates UI without full refresh.",
  },

  {
    name: "DevTools",
    category: "Performance & Tools",
    definition:
      "Browser or framework tools for debugging and optimizing applications.",
  },

  {
    name: "Development Environment",
    category: "Performance & Tools",
    definition:
      "A local or testing environment used to build and debug applications.",
  },

  {
    name: "Production",
    category: "Performance & Tools",
    definition:
      "The live environment where real users interact with an application.",
  },

  {
    name: "Deployment",
    category: "Performance & Tools",
    definition:
      "The process of publishing an application to a live environment.",
  },

  {
    name: "CI/CD",
    category: "Performance & Tools",
    definition: "Continuous Integration and Continuous Deployment practices.",
  },

  {
    name: "SPA",
    category: "Performance & Tools",
    definition: "A Single Page Application that dynamically updates content.",
  },

  {
    name: "MPA",
    category: "Performance & Tools",
    definition:
      "A Multi Page Application where each navigation loads a new page.",
  },

  {
    name: "Next.js",
    category: "Performance & Tools",
    definition:
      "A React framework providing routing and server-side rendering.",
  },

  {
    name: "Remix",
    category: "Performance & Tools",
    definition: "A full-stack React framework focused on nested routing.",
  },

  {
    name: "Gatsby",
    category: "Performance & Tools",
    definition:
      "A React-based static site generator optimized for performance.",
  },

  {
    name: "React Native",
    category: "Performance & Tools",
    definition:
      "A framework for building native mobile applications with React.",
  },

  {
    name: "Environment Variable",
    category: "Performance & Tools",
    definition: "A configuration value stored outside code.",
  },

  {
    name: "Local Storage",
    category: "Performance & Tools",
    definition: "Browser storage for persistent data.",
  },

  {
    name: "Session Storage",
    category: "Performance & Tools",
    definition: "Temporary browser storage for a session.",
  },

  {
    name: "SEO",
    category: "Performance & Tools",
    definition: "Search Engine Optimization techniques to improve visibility.",
  },

  {
    name: "Meta Tags",
    category: "Performance & Tools",
    definition: "HTML tags containing metadata about a webpage.",
  },

  {
    name: "Form Validation",
    category: "Performance & Tools",
    definition: "Checking user input correctness.",
  },

  {
    name: "Pagination",
    category: "Performance & Tools",
    definition: "Splitting large datasets into smaller pages.",
  },

  {
    name: "Infinite Scroll",
    category: "Performance & Tools",
    definition: "Automatically loading additional content as user scrolls.",
  },

  {
    name: "Skeleton Loader",
    category: "Performance & Tools",
    definition:
      "A placeholder UI that mimics content structure during loading.",
  },

  {
    name: "Optimistic UI",
    category: "Performance & Tools",
    definition:
      "A UI technique where updates appear immediately before server confirmation.",
  },

  {
    name: "Dark Mode",
    category: "Performance & Tools",
    definition: "A UI theme using dark colors.",
  },

  {
    name: "Responsive Design",
    category: "Performance & Tools",
    definition: "Design adapting to different screen sizes.",
  },

  {
    name: "Tailwind CSS",
    category: "Performance & Tools",
    definition: "A utility-first CSS framework.",
  },

  {
    name: "CSS Module",
    category: "Performance & Tools",
    definition: "Scoped CSS styles for components.",
  },

  {
    name: "Styled Components",
    category: "Performance & Tools",
    definition: "A CSS-in-JS styling library.",
  },

  {
    name: "Animation",
    category: "Performance & Tools",
    definition: "Visual motion effects in the UI.",
  },

  {
    name: "Transition",
    category: "Performance & Tools",
    definition: "A smooth visual change between states.",
  },

  {
    name: "Headless CMS",
    category: "Performance & Tools",
    definition: "A content management system providing content through APIs.",
  },

  {
    name: "Rate Limiting",
    category: "Performance & Tools",
    definition: "Restricting how frequently requests can be made to a server.",
  },

  {
    name: "Strict Mode",
    category: "Performance & Tools",
    definition: "A tool for highlighting potential React problems.",
  },
];
