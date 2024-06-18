/*
 * Example demonstrating props drilling in React.
 * Parent components pass props down to deeply nested child components.
 * This example uses a simple hierarchy of components to illustrate props drilling.
 *
 * This structure demonstrates how props are passed down through multiple layers of components I
 * (ComponentA -> ComponentB -> ComponentC), illustrating the concept of props drilling in React.
 *
 *  While props drilling can be suitable for simpler applications or smaller component hierarchies,
 *  state management libraries like Redux or Context API are generally better choices for larger applications
 *  or when handling complex state management needs across multiple components.
 *
 * Concepts used:
 * - React functional components
 * - Props drilling (passing props through intermediate components)
 * - JSX syntax for defining UI elements
 */

// Child component C
const ComponentC = (props) => {
  return (
    <div>
      <h3>Component C</h3>
      <p>Received prop: {props.message}</p>
    </div>
  );
};

// Intermediate component B
const ComponentB = (props) => {
  return (
    <div>
      <h2>Component B</h2>
      <ComponentC message={props.message} />{" "}
      {/* Passes 'message' prop to ComponentC */}
    </div>
  );
};

// Parent component A
const ComponentA = (props) => {
  return (
    <main>
      <h1>Component A</h1>
      <ComponentB message={props.message} />{" "}
      {/* Passes 'message' prop to ComponentB */}
    </main>
  );
};

// App component (top-level component)
const App = () => {
  const message = "Props drilling example"; // Define prop to be passed down

  return (
    <main className="flex min-h-screen flex-col items-center p-3">
      <div>
        <h1>App Component</h1>
        <ComponentA message={message} />{" "}
        {/* Passes 'message' prop to ComponentA */}
      </div>
    </main>
  );
};

export default App;
