# React Props – Complete Guide

## Introduction

In React, **props** (short for *properties*) are used to pass data from one component to another. They enable communication between components, especially from parent to child, making components dynamic and reusable.

Props are **read-only** and cannot be modified by the receiving component.

---

## Why Props Are Used

### 1. Data Passing

Props allow components to share data, making it possible to build interconnected UI elements.

### 2. Reusability

The same component can behave differently based on the props it receives.

### 3. Dynamic Rendering

Props make components flexible by allowing dynamic values instead of hardcoded content.

---

## Basic Usage of Props

### Passing Props

Props are passed from a parent component as attributes.

```jsx
function App() {
  return <User name="Pranay" age={21} />;
}
```

### Receiving Props

Props are received as parameters in the child component.

```jsx
function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}
```

---

## Destructuring Props

A cleaner way to access props is by destructuring.

```jsx
function User({ name, age }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
}
```

---

## Props in Parent-Child Relationship

Props flow in a **unidirectional way** (parent → child).

```jsx
function Child({ message }) {
  return <p>{message}</p>;
}

function Parent() {
  return <Child message="Hello from Parent" />;
}
```

### Key Points

* Parent controls the data
* Child only receives and uses it
* Data flow is one-way

---

## Passing Different Types of Props

### 1. Strings

```jsx
<Component title="React Guide" />
```

### 2. Numbers

```jsx
<Component count={10} />
```

### 3. Boolean

```jsx
<Component isActive={true} />
```

### 4. Arrays

```jsx
<Component items={["A", "B", "C"]} />
```

### 5. Objects

```jsx
<Component user={{ name: "Pranay", age: 21 }} />
```

### 6. Functions

```jsx
function handleClick() {
  console.log("Clicked");
}

<Component onClick={handleClick} />
```

---

## Default Props

Default props are used when no value is passed.

```jsx
function Button({ label = "Click Me" }) {
  return <button>{label}</button>;
}
```

---

## Props with JSX

Props can also pass JSX elements.

```jsx
function Wrapper({ children }) {
  return <div>{children}</div>;
}

function App() {
  return (
    <Wrapper>
      <h1>Inside Wrapper</h1>
    </Wrapper>
  );
}
```

---

## Props Are Immutable

Props cannot be modified inside a component.

Incorrect:

```jsx
props.name = "New Name"; // Not allowed
```

Correct approach:

* Use props as they are
* If modification is needed, manage it using state (covered separately)

---

## Props Drilling

Props drilling refers to passing props through multiple levels of components.

```jsx
function App() {
  return <Parent message="Hello" />;
}

function Parent({ message }) {
  return <Child message={message} />;
}

function Child({ message }) {
  return <p>{message}</p>;
}
```

### Limitation

* Can make code complex when deeply nested

---

## Props vs State (Brief Overview)

* **Props**: Passed from parent, read-only
* **State**: Managed within the component, mutable

(State is covered in a separate repository.)

---

## Best Practices

* Use destructuring for cleaner code
* Keep props minimal and meaningful
* Avoid unnecessary prop drilling
* Use default values where needed
* Name props clearly and consistently

---

## Common Mistakes

* Modifying props directly
* Passing too many props unnecessarily
* Poor naming of props
* Deep prop drilling without structure

---

## Conclusion

Props are essential for communication between components in React. They allow developers to create dynamic, reusable, and scalable components by passing data efficiently.

Understanding props is key to mastering component-based architecture in React.

---
