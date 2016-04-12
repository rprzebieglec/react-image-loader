import React from 'react';
import ReactDOM from 'react-dom';
import ImageLoader from './components/ImageLoader';

ReactDOM.render(
  <ImageLoader src='https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=aff2bf56593d08c8fdda8de3eced4910'/>,
  document.getElementById('app')
);
