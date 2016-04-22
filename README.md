[![Build Status](https://travis-ci.org/rprzebieglec/react-image-loader.svg?branch=master)](https://travis-ci.org/rprzebieglec/react-image-loader)

# About

This component is using great svg loader from http://samherbert.net/svg-loaders.
It is showed until onload event is triggered on requested image.

# Getting started

```
npm install react-image-loader --save
```

## Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import ImageLoader from 'react-image-loader';

ReactDOM.render(
  <ImageLoader 
    src="https://images.unsplash.com/photo-1460626399219-57a00a2361cb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=12c861af4f60a23c7f55a83f401f4b7"
    alt="Random image from Unsplash.com"
    />,
  document.getElementById('app')
);
```

## Props

* `src`: Source of an image to be loaded
* `alt`: Alternative description

## Demo

https://rprzebieglec.github.io/react-image-loader/#app

# License

MIT 
