# react-hooks-fetch

[![CI](https://img.shields.io/github/workflow/status/dai-shi/react-hooks-fetch/CI)](https://github.com/dai-shi/react-hooks-fetch/actions?query=workflow%3ACI)
[![npm](https://img.shields.io/npm/v/react-hooks-fetch)](https://www.npmjs.com/package/react-hooks-fetch)
[![size](https://img.shields.io/bundlephobia/minzip/react-hooks-fetch)](https://bundlephobia.com/result?p=react-hooks-fetch)
[![discord](https://img.shields.io/discord/627656437971288081)](https://discord.gg/MrQdmzd)

Minimal data fetching library with React Suspense

## Introduction

This library provides a React hook `useFetch` for any async functions.
It utilizes React Suspense and requires to create
a store in advance with `createFetch`.
The API is designed to force fetching data before rendering.

Project status: Experimental. We need to collect feedbacks.

## Install

```bash
npm install react-hooks-fetch
```

## Usage

```javascript
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { createFetch, useFetch } from 'react-hooks-fetch';

// 1️⃣
// Create a store with an async function.
// The async function can take one input argument.
// The input value becomes the "key" of cache.
// By default, keys are compared with strict equal `===`.
const store = createFetch(async (userId) => {
  const res = await fetch(`https://reqres.in/api/users/${userId}?delay=3`);
  const data = await res.json();
  return data;
});

// 2️⃣
// We need to start fetching somewhere before rendering.
// If we allow `undefined` value for the initial render,
// this can be omitted.
store.prefetch('1');

// 3️⃣
// Define a component to use store.
// The `refetch` function take the input argument,
// and it will start fetching before rendering.
const Main = () => {
  const { result, refetch } = useFetch(store, '1');
  const handleClick = () => {
    refetch('2');
  };
  return (
    <div>
      <div>First Name: {result.data.first_name}</div>
      <button type="button" onClick={handleClick}>Fetch user 2</button>
    </div>
  );
};

// 4️⃣
// The outer component should have ErrorBoundary and Suspense boundary.
const App = () => (
  <ErrorBoundary fallback={<h1>Error</h1>}>
    <Suspense fallback={<span>Loading...</span>}>
      <Main />
    </Suspense>
  </ErrorBoundary>
);
```

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### createFetch

create fetch store

#### Parameters

*   `fetchFunc` **FetchFunc\<Input, Result>** 
*   `options` **Options\<Input, Result>?** 

#### Examples

```javascript
import { createFetch } from 'react-hooks-fetch';

const fetchFunc = async (userId) => {
  const res = await fetch(`https://reqres.in/api/users/${userId}?delay=3`));
  const data = await res.json();
  return data;
};
const store = createFetch(fetchFunc);
store.prefetch('1');
```

### useFetch

useFetch hook

#### Parameters

*   `store` **FetchStore\<Input, Result>** 
*   `initialInput` **Input?** 

#### Examples

```javascript
import { useFetch } from 'react-hooks-fetch';

const { result, refetch } = useFetch(store, initialInput);
```

## Examples

The [examples](examples) folder contains working examples.
You can run one of them with

```bash
PORT=8080 npm run examples:01_minimal
```

and open <http://localhost:8080> in your web browser.

You can also try them in codesandbox.io:
[01](https://codesandbox.io/s/github/dai-shi/react-hooks-fetch/tree/main/examples/01\_minimal)
[02](https://codesandbox.io/s/github/dai-shi/react-hooks-fetch/tree/main/examples/02\_typescript)
[03](https://codesandbox.io/s/github/dai-shi/react-hooks-fetch/tree/main/examples/03\_noinit)

## Blogs

See [History](./HISTORY.md) for previous implementations.

*   [React Hooks Tutorial on Developing a Custom Hook for Data Fetching](https://blog.axlight.com/posts/react-hooks-tutorial-on-developing-a-custom-hook-for-data-fetching/)
*   [useFetch: React custom hook for Fetch API with Suspense and Concurrent Mode in Mind](https://blog.axlight.com/posts/usefetch-react-custom-hook-for-fetch-api-with-suspense-and-concurrent-mode-in-mind/)
*   [Developing a React Library for Suspense for Data Fetching in Concurrent Mode](https://blog.axlight.com/posts/developing-a-react-library-for-suspense-for-data-fetching-in-concurrent-mode/)
*   [Diving Into React Suspense Render-as-You-Fetch for REST APIs](https://blog.axlight.com/posts/diving-into-react-suspense-render-as-you-fetch-for-rest-apis/)

## Translations

This is also available in other languages:

- ![ko](https://raw.githubusercontent.com/gosquared/flags/master/flags/flags/shiny/24/South-Korea.png) **Korean**: [melonbarCode/react-hooks-fetch](https://github.com/melonbarCode/react-hooks-fetch)